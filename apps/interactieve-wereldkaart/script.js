(function () {
    'use strict';

    /* ======================================================
       1. LOCATIONS DATA
       ====================================================== */
    var LOCATIONS = [
        { id: 'mekka',      name: 'Mekka',      highlight: 'saudi' },
        { id: 'medina',     name: 'Medina',      highlight: 'saudi' },
        { id: 'jeruzalem',  name: 'Jeruzalem',   highlight: 'palestine' },
        { id: 'damascus',   name: 'Damascus',    highlight: 'syria' },
        { id: 'bagdad',     name: 'Bagdad',      highlight: 'iraq' },
        { id: 'cairo',      name: 'Caïro',       highlight: 'egypt' },
        { id: 'cordoba',    name: 'Córdoba',     highlight: 'spain' },
        { id: 'timboektoe', name: 'Timboektoe',  highlight: 'mali' },
        { id: 'samarkand',  name: 'Samarkand',   highlight: 'uzbekistan' },
        { id: 'istanbul',   name: 'Istanbul',    highlight: 'turkey' }
    ];

    /* ======================================================
       2. DOM REFERENCES
       ====================================================== */
    var mapContainer = document.getElementById('mapContainer');
    var mapInner     = document.getElementById('mapInner');
    var mapLabel     = document.getElementById('mapLabel');
    var progressDots = document.getElementById('progressDots');
    var chapters     = document.querySelectorAll('.chapter');
    var dots         = progressDots.querySelectorAll('.dot');

    /* ======================================================
       3. SVG LOADING
       ====================================================== */
    var svgEl = null;
    var defaultViewBox = '0 50 1000 500';

    function loadSVG() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'map.svg', true);
        xhr.onload = function () {
            if (xhr.status === 200) {
                mapInner.innerHTML = xhr.responseText;
                svgEl = mapInner.querySelector('svg');
                if (svgEl) {
                    svgEl.setAttribute('viewBox', defaultViewBox);
                    svgEl.style.transition = 'none';
                }
                init();
            }
        };
        xhr.send();
    }

    /* ======================================================
       4. VIEWBOX ANIMATION
       ====================================================== */
    var currentVB = parseViewBox(defaultViewBox);
    var animFrameId = null;

    function parseViewBox(str) {
        var parts = str.split(/\s+/).map(Number);
        return { x: parts[0], y: parts[1], w: parts[2], h: parts[3] };
    }

    function easeInOut(t) {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function applyViewBox(vb) {
        if (!svgEl) return;
        svgEl.setAttribute('viewBox',
            Math.round(vb.x) + ' ' + Math.round(vb.y) + ' ' +
            Math.round(vb.w) + ' ' + Math.round(vb.h));
    }

    function animateViewBox(targetStr, duration) {
        if (!svgEl) return;
        var target = parseViewBox(targetStr);
        duration = duration || 800;

        // If already at target, skip
        if (Math.abs(currentVB.x - target.x) < 1 &&
            Math.abs(currentVB.y - target.y) < 1 &&
            Math.abs(currentVB.w - target.w) < 1 &&
            Math.abs(currentVB.h - target.h) < 1) return;

        // Cancel any running animation
        if (animFrameId) cancelAnimationFrame(animFrameId);

        var startVB = { x: currentVB.x, y: currentVB.y, w: currentVB.w, h: currentVB.h };
        var startTime = performance.now();

        function step(now) {
            var elapsed = now - startTime;
            var t = Math.min(elapsed / duration, 1);
            var et = easeInOut(t);

            currentVB = {
                x: startVB.x + (target.x - startVB.x) * et,
                y: startVB.y + (target.y - startVB.y) * et,
                w: startVB.w + (target.w - startVB.w) * et,
                h: startVB.h + (target.h - startVB.h) * et
            };
            applyViewBox(currentVB);

            if (t < 1) {
                animFrameId = requestAnimationFrame(step);
            } else {
                animFrameId = null;
            }
        }

        animFrameId = requestAnimationFrame(step);
    }

    /* ======================================================
       5. MAP HIGHLIGHTING
       ====================================================== */
    var activeMarker = null;
    var activeCountry = null;

    function highlightLocation(index) {
        var loc = LOCATIONS[index];
        if (!svgEl) return;

        // Remove previous highlights
        if (activeCountry) activeCountry.classList.remove('active');
        if (activeMarker) activeMarker.classList.remove('visible');

        // Highlight country
        var country = svgEl.getElementById(loc.highlight);
        if (country) {
            country.classList.add('active');
            activeCountry = country;
        }

        // Show marker
        var marker = svgEl.getElementById('marker-' + loc.id);
        if (marker) {
            marker.classList.add('visible');
            activeMarker = marker;
        }

        // Show label
        mapLabel.textContent = loc.name;
        mapLabel.classList.add('visible');
    }

    function resetMap() {
        if (activeCountry) activeCountry.classList.remove('active');
        if (activeMarker) activeMarker.classList.remove('visible');
        mapLabel.classList.remove('visible');
        activeCountry = null;
        activeMarker = null;
        animateViewBox(defaultViewBox, 1000);
    }

    /* ======================================================
       6. PROGRESS DOTS
       ====================================================== */
    var visitedChapters = {};

    function updateDots(activeIndex) {
        visitedChapters[activeIndex] = true;

        for (var i = 0; i < dots.length; i++) {
            dots[i].classList.remove('active');
            if (visitedChapters[i]) {
                dots[i].classList.add('visited');
            }
        }
        if (activeIndex >= 0 && activeIndex < dots.length) {
            dots[activeIndex].classList.add('active');
        }
    }

    /* ======================================================
       7. INTERSECTION OBSERVER
       ====================================================== */
    var activeChapterIndex = -1;
    var trackedChapters = {};

    function setupObserver() {
        // Chapter visibility observer (fade in)
        var fadeObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                }
            });
        }, { threshold: 0.15 });

        // Active chapter observer (map animation)
        var activeObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;

                var chapterEl = entry.target;
                var index = Array.prototype.indexOf.call(chapters, chapterEl);
                if (index === activeChapterIndex) return;

                activeChapterIndex = index;

                // Remove active from all
                for (var i = 0; i < chapters.length; i++) {
                    chapters[i].classList.remove('active');
                }
                chapterEl.classList.add('active');

                // Animate map
                var viewBox = chapterEl.getAttribute('data-viewbox');
                if (viewBox) {
                    animateViewBox(viewBox, 800);
                    highlightLocation(index);
                }

                // Update dots
                updateDots(index);

                // Track with GoatCounter
                var locId = chapterEl.getAttribute('data-location');
                if (locId && !trackedChapters[locId]) {
                    trackedChapters[locId] = true;
                    gcEvent('interactieve-wereldkaart/locatie/' + locId, LOCATIONS[index].name);

                    // Check if all visited
                    if (Object.keys(trackedChapters).length === LOCATIONS.length) {
                        gcEvent('interactieve-wereldkaart/voltooid', 'Alle 10 locaties bezocht');
                    }
                }
            });
        }, {
            threshold: 0.5,
            rootMargin: '-10% 0px -30% 0px'
        });

        for (var i = 0; i < chapters.length; i++) {
            fadeObserver.observe(chapters[i]);
            activeObserver.observe(chapters[i]);
        }
    }

    /* ======================================================
       8. DOT NAVIGATION
       ====================================================== */
    function setupDotNavigation() {
        progressDots.addEventListener('click', function (e) {
            var dot = e.target.closest('.dot');
            if (!dot) return;
            var index = parseInt(dot.getAttribute('data-index'), 10);
            if (isNaN(index) || index < 0 || index >= chapters.length) return;

            chapters[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    }

    /* ======================================================
       9. GOATCOUNTER
       ====================================================== */
    function gcEvent(path, title) {
        if (window.goatcounter && typeof window.goatcounter.count === 'function') {
            window.goatcounter.count({
                path: path,
                title: title || '',
                event: true
            });
        }
    }

    /* ======================================================
       10. INIT
       ====================================================== */
    function init() {
        setupObserver();
        setupDotNavigation();
        gcEvent('interactieve-wereldkaart/app-gestart', 'App gestart');
    }

    // Start
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadSVG);
    } else {
        loadSVG();
    }

})();
