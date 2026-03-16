(function () {
    'use strict';

    /* ======================================================
       1. COUNTUP ANIMATION
       ====================================================== */
    function easeOutExpo(t) {
        return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    }

    function formatNumber(n, format) {
        if (format === 'compact') {
            if (n >= 1e9) return formatWithDots(Math.round(n / 1e6) * 1e6);
            if (n >= 1e6) return formatWithDots(Math.round(n / 1e3) * 1e3);
            return formatWithDots(n);
        }
        return formatWithDots(n);
    }

    function formatWithDots(n) {
        // Dutch formatting: dots as thousands separator
        var str = Math.round(n).toString();
        var result = '';
        var count = 0;
        for (var i = str.length - 1; i >= 0; i--) {
            if (count > 0 && count % 3 === 0) result = '.' + result;
            result = str[i] + result;
            count++;
        }
        return result;
    }

    function countUp(el, target, duration, format) {
        var start = 0;
        var startTime = null;
        duration = duration || 2000;

        function step(now) {
            if (!startTime) startTime = now;
            var elapsed = now - startTime;
            var t = Math.min(elapsed / duration, 1);
            var et = easeOutExpo(t);
            var current = Math.round(start + (target - start) * et);
            el.textContent = formatNumber(current, format);

            if (t < 1) {
                requestAnimationFrame(step);
            } else {
                el.textContent = formatNumber(target, format);
            }
        }

        requestAnimationFrame(step);
    }

    /* ======================================================
       2. INTERSECTION OBSERVERS
       ====================================================== */
    var sections = document.querySelectorAll('.infosection');
    var countupEls = document.querySelectorAll('[data-countup]');
    var progressFills = document.querySelectorAll('.progress-fill');
    var trackedSections = {};

    // Section fade-in observer
    var sectionObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');

                // Track section
                var id = entry.target.id;
                if (id && !trackedSections[id]) {
                    trackedSections[id] = true;
                    var h2 = entry.target.querySelector('h2');
                    gcEvent('islam-in-cijfers/sectie/' + id, h2 ? h2.textContent : id);

                    // Check if all sections visited
                    if (Object.keys(trackedSections).length === sections.length) {
                        gcEvent('islam-in-cijfers/voltooid', 'Alle secties bekeken');
                    }
                }
            }
        });
    }, { threshold: 0.15 });

    for (var s = 0; s < sections.length; s++) {
        sectionObserver.observe(sections[s]);
    }

    // CountUp observer
    var countObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            if (entry.target.classList.contains('counted')) return;

            var el = entry.target;
            var target = parseInt(el.getAttribute('data-target'), 10);
            var format = el.getAttribute('data-format') || '';
            if (isNaN(target)) return;

            el.classList.add('counted');

            // Also mark the parent stat-card as counted
            var card = el.closest('.stat-card');
            if (card) card.classList.add('counted');

            countUp(el, target, 2000, format);

            // Trigger progress bars in the same card
            if (card) {
                var fills = card.querySelectorAll('.progress-fill');
                for (var f = 0; f < fills.length; f++) {
                    var pct = fills[f].getAttribute('data-progress');
                    if (pct) {
                        fills[f].classList.add('animate');
                        fills[f].style.width = pct + '%';
                    }
                }
            }
        });
    }, { threshold: 0.5 });

    for (var c = 0; c < countupEls.length; c++) {
        countObserver.observe(countupEls[c]);
    }

    /* ======================================================
       3. HERO COUNTUP (immediate on load)
       ====================================================== */
    var heroNumber = document.querySelector('.hero-big-number[data-countup]');
    if (heroNumber) {
        var heroTarget = parseInt(heroNumber.getAttribute('data-target'), 10);
        if (!isNaN(heroTarget)) {
            // Delay slightly for visual impact
            setTimeout(function () {
                countUp(heroNumber, heroTarget, 2500);
            }, 400);
        }
    }

    /* ======================================================
       4. GOATCOUNTER
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

    gcEvent('islam-in-cijfers/app-gestart', 'App gestart');

})();
