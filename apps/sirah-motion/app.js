import React, { useEffect, useRef, useState } from 'https://esm.sh/react@18.3.1';
import { createRoot } from 'https://esm.sh/react-dom@18.3.1/client';
import { motion, AnimatePresence } from 'https://esm.sh/framer-motion@11.11.17';
import htm from 'https://esm.sh/htm@3.1.1';

const html = htm.bind(React.createElement);

const events = [
  {
    year: '570 CE',
    title: 'Jaar van de Olifant',
    summary: 'Geboorte van de Profeet in Makkah.',
    details:
      'Dit jaar werd een belangrijk ijkpunt: de aanval op de Kaabah mislukte en kort daarna werd de Profeet geboren.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Kaaba_masjid_haram.jpg/1280px-Kaaba_masjid_haram.jpg',
    caption: 'Makkah en de Kaabah als startpunt van de seerah.'
  },
  {
    year: '610 CE',
    title: 'Eerste Openbaring',
    summary: 'De eerste verzen in de grot van Hira.',
    details:
      'Tijdens khulwah ontving de Profeet de eerste openbaring. Dit markeert het begin van de risalah.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Jabal_al-Nour.jpg/1280px-Jabal_al-Nour.jpg',
    caption: 'Jabal al-Nour, met de grot van Hira.'
  },
  {
    year: '613 CE',
    title: 'Openbare Daawah',
    summary: 'De oproep wordt publiek in Makkah.',
    details:
      'Na een fase in kleine kring volgde de publieke daawah. De weerstand in Makkah nam daarmee sterk toe.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Mount_Safa_Marwa.jpg/1280px-Mount_Safa_Marwa.jpg',
    caption: 'Safa en Marwa, verbonden met vroege daawah-momenten.'
  },
  {
    year: '619 CE',
    title: 'Jaar van Verdriet',
    summary: 'Overlijden van Khadijah en Abu Talib.',
    details:
      'Een zware periode met verlies van twee steunpilaren. Dit laat de enorme standvastigheid en tawakkul zien.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Jannat_al-Mualla_Mecca.jpg/1280px-Jannat_al-Mualla_Mecca.jpg',
    caption: 'Historische context in Makkah.'
  },
  {
    year: '622 CE',
    title: 'Hijrah naar Madinah',
    summary: 'Migratie en opbouw van de gemeenschap.',
    details:
      'De hijrah vormt het begin van de islamitische jaartelling en de institutionele opbouw van de ummah.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Medina_Masjid_Al_Nabawi.jpg/1280px-Medina_Masjid_Al_Nabawi.jpg',
    caption: 'Madinah als nieuwe fase van opbouw.',
    video: 'https://www.youtube.com/embed/e4DYxX6g9U8'
  },
  {
    year: '632 CE',
    title: 'Afscheidsboodschap',
    summary: 'Ethiek, rechtvaardigheid en amanah.',
    details:
      'Tijdens de afscheidshadj werden kernprincipes over verantwoordelijkheid, menswaardigheid en broederschap bevestigd.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Arafat.jpg/1280px-Arafat.jpg',
    caption: 'Arafat, verbonden aan de afscheidshadj.'
  }
];

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalIndex, setModalIndex] = useState(null);
  const dragRef = useRef({ active: false, startX: 0, startScroll: 0, pointerId: null, dragging: false });
  const timelineRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const onEsc = (event) => {
      if (event.key === 'Escape') {
        setModalIndex(null);
      }
    };

    window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, []);

  useEffect(() => {
    document.body.style.overflow = modalIndex !== null ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [modalIndex]);

  useEffect(() => {
    if (modalIndex !== null && !events[modalIndex]) {
      setModalIndex(null);
    }
  }, [modalIndex]);

  const scrollToIndex = (index) => {
    const item = itemRefs.current[index];
    if (!item) return;

    item.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    setActiveIndex(index);
  };

  const updateActiveFromScroll = () => {
    const container = timelineRef.current;
    if (!container) return;

    const viewportCenter = container.scrollLeft + container.clientWidth / 2;
    let nearest = 0;
    let nearestDistance = Infinity;

    itemRefs.current.forEach((item, index) => {
      if (!item) return;
      const center = item.offsetLeft + item.clientWidth / 2;
      const distance = Math.abs(center - viewportCenter);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearest = index;
      }
    });

    setActiveIndex(nearest);
  };

  const onSliderChange = (event) => {
    const index = Number(event.target.value);
    scrollToIndex(index);
  };

  const onPointerDown = (event) => {
    const container = timelineRef.current;
    if (!container) return;

    dragRef.current = {
      active: true,
      startX: event.clientX,
      startScroll: container.scrollLeft,
      pointerId: event.pointerId,
      dragging: false
    };
  };

  const onPointerMove = (event) => {
    const container = timelineRef.current;
    const d = dragRef.current;
    if (!container || !d.active) return;

    const distance = event.clientX - d.startX;
    if (!d.dragging && Math.abs(distance) > 5) {
      d.dragging = true;
      try {
        container.setPointerCapture(d.pointerId);
      } catch (error) {
        // Ignore pointer-capture errors so dragging never blocks UI interaction.
      }
    }
    if (d.dragging) {
      container.scrollLeft = d.startScroll - distance;
    }
  };

  const onPointerEnd = (event) => {
    const container = timelineRef.current;
    const d = dragRef.current;
    if (!container || !d.active) return;

    d.active = false;
    if (d.dragging) {
      try {
        container.releasePointerCapture(event.pointerId);
      } catch (error) {
        // Ignore pointer-capture release errors.
      }
    }

    updateActiveFromScroll();
  };

  const activeEvent = modalIndex !== null ? events[modalIndex] : null;
  const safeEvent = activeEvent || null;
  const modalTitle = safeEvent?.title || 'Gebeurtenis';
  const modalYear = safeEvent?.year || '';
  const modalDetails = safeEvent?.details || 'Geen extra details beschikbaar.';

  return html`
    <div className="app-shell">
      <header className="portal-nav">
        <div className="brand">
          <img src="../sirah-explorer/images/HRPC-logo.png" alt="HRPC logo" />
          <h1></h1>
        </div>
        <span></span>
      </header>

      <section className="hero">
        <span className="hero-kicker">Interactieve Tijdlijn</span>
        <motion.h2
          initial=${{ opacity: 0, y: 12 }}
          animate=${{ opacity: 1, y: 0 }}
          transition=${{ duration: 0.55 }}
        >
          Verken de sirah via een levende reis door de tijd.
        </motion.h2>
        <motion.p
          initial=${{ opacity: 0, y: 10 }}
          animate=${{ opacity: 1, y: 0 }}
          transition=${{ duration: 0.55, delay: 0.08 }}
        >
          Klik op een gebeurtenis om meer te weten te komen over de sirah.
          Gebruik onderaan de slider om snel te springen naar mijlpalen zoals
          het Jaar van de Olifant of de Hijrah.
        </motion.p>
      </section>

      <section className="timeline-stage">
        <div className="timeline-line"></div>
        <div
          className="timeline-scroll"
          ref=${timelineRef}
          onPointerDown=${onPointerDown}
          onPointerMove=${onPointerMove}
          onPointerUp=${onPointerEnd}
          onPointerCancel=${onPointerEnd}
          onScroll=${updateActiveFromScroll}
        >
          ${events.map(
            (event, index) => html`
              <motion.article
                className="timeline-item"
                key=${event.year + event.title}
                ref=${(node) => {
                  itemRefs.current[index] = node;
                }}
                initial=${{ opacity: 0, y: 18 }}
                whileInView=${{ opacity: 1, y: 0 }}
                viewport=${{ once: true, amount: 0.35 }}
                transition=${{ duration: 0.32, delay: index * 0.06 }}
              >
                <div className="timeline-dot"></div>
                <div className="event-card">
                  <p className="event-year">${event.year}</p>
                  <h3 className="event-title">${event.title}</h3>
                  <p className="event-summary">${event.summary}</p>
                  <button className="btn" onClick=${() => setModalIndex(index)}>
                    Lees het verhaal
                  </button>
                </div>
              </motion.article>
            `
          )}
        </div>
      </section>

      <section className="controls">
        <div className="controls-head">
          <span>Spring naar jaar</span>
          <strong>${events[activeIndex]?.year}</strong>
        </div>
        <input
          id="jump"
          type="range"
          min="0"
          max=${String(events.length - 1)}
          value=${String(activeIndex)}
          onInput=${onSliderChange}
        />
        <div className="chips">
          ${events.map(
            (event, index) => html`
              <button
                key=${'chip-' + event.year}
                className=${'jump-chip ' + (activeIndex === index ? 'active' : '')}
                onClick=${() => scrollToIndex(index)}
              >
                ${event.year}
              </button>
            `
          )}
        </div>
      </section>

      <${AnimatePresence}>
        ${safeEvent &&
        html`
          <motion.div
            className="backdrop"
            onClick=${() => setModalIndex(null)}
            initial=${{ opacity: 0 }}
            animate=${{ opacity: 1 }}
            exit=${{ opacity: 0 }}
          >
            <motion.article
              className="modal"
              onClick=${(event) => event.stopPropagation()}
              initial=${{ y: 20, opacity: 0, scale: 0.97 }}
              animate=${{ y: 0, opacity: 1, scale: 1 }}
              exit=${{ y: 14, opacity: 0, scale: 0.98 }}
              transition=${{ duration: 0.22 }}
            >
              <button className="close" onClick=${() => setModalIndex(null)}>
                &times;
              </button>

              <span className="badge">${modalYear}</span>
              <h3>${modalTitle}</h3>
              <p>${modalDetails}</p>

              ${safeEvent.image &&
              html`
                <figure className="media">
                  <img src=${safeEvent.image} alt=${modalTitle} loading="lazy" />
                  <figcaption>${safeEvent.caption || ''}</figcaption>
                </figure>
              `}

              ${safeEvent.video &&
              html`
                <div className="media">
                  <iframe
                    src=${safeEvent.video}
                    title=${'Video: ' + modalTitle}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              `}
            </motion.article>
          </motion.div>
        `}
      </${AnimatePresence}>
    </div>
  `;
}

createRoot(document.getElementById('root')).render(html`<${App} />`);
