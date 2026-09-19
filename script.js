/* ================================================================
   DATA
   ================================================================ */
const cards = [
  {
    id: 1,
    color: '#f5dfe0',  // dusty rose
    emoji: '😄',
    title: 'Tu risa',
    preview: 'El sonido más bonito que existe.',
    body: 'Cuando te ríes todo a mi alrededor desaparece. Es contagiosa, genuina, y me hace querer hacer el ridículo con tal de escucharla una vez más. Es, sin duda, mi sonido favorito en el universo entero.'
  },
  {
    id: 2,
    color: '#daeada',  // sage green
    emoji: '🌿',
    title: 'Cómo cuidas todo',
    preview: 'Tienes el don de hacer sentir especial a quien amas.',
    body: 'Hay una ternura en la forma en que tratas a las personas, a los animales, hasta a las flores. Nada pasa desapercibido para ti. Cuidas con detalles que otros no ven, y eso dice muchísimo de quién eres en el fondo de tu corazón.'
  },
  {
    id: 3,
    color: '#e4daf5',  // soft lavender
    emoji: '✨',
    title: 'Cómo ves el mundo',
    preview: 'Ves magia donde otros no ven nada.',
    body: 'Tienes una perspectiva única, para encontrar belleza en lo cotidiano. Un cielo, un color, una canción, un pequeño momento. Me has enseñado a mirar diferente, y ahora veo el mundo con los ojos que tú me prestaste. Me motivas a querer ser mejor persona, no por presión, sino porque quiero ser digno de compartir este mundo contigo.'
  },
  {
    id: 4,
    color: '#f5e8da',  // warm peach
    emoji: '🤗',
    title: 'Tus abrazos',
    preview: 'El lugar donde más quiero estar.',
    body: 'No sé cómo describirlo, pero contigo tengo la sensación de que el mundo puede detenerse un momento. Tus abrazos son cálidos, son hogar. Cuando estoy entre tus brazos, ya no necesito nada más, absolutamente nada. Siempre los espero con ansias, y siempre me dejas con ganas de más.'
  },
  {
    id: 5,
    color: '#dae4f5',  // dusty blue
    emoji: '💬',
    title: 'Tus mensajitos',
    preview: 'Me iluminan el día sin aviso.',
    body: 'Ese mensaje de "ya llegué", ese meme que me mandas sabiendo que me va a hacer reír, ese "Te amo" que llega justo cuando lo necesito. Cada mensajito tuyo me recuerda que alguien en este mundo me piensa. Y ese alguien eres tú.'
  },
  {
    id: 6,
    color: '#f5f0da',  // warm cream-yellow
    emoji: '💪',
    title: 'Tu valentía',
    preview: 'Me inspiras a ser mejor persona.',
    body: 'Enfrentas las cosas con una fortaleza que admiro profundamente. Incluso cuando tienes miedo, sigues adelante. Incluso cuando es difícil, no te rindes. Me enseñas que ser valiente no es no tener miedo, sino seguir caminando a pesar de él. Veo a una mujer increíblemente fuerte en ti, y eso me hace amarte aún más.'
  },
  {
    id: 7,
    color: '#f5e0da',  // dusty coral
    emoji: '🎶',
    title: 'Lo que compartimos',
    preview: 'Nuestros momentos.',
    body: 'Cada charla hasta quedarnos dormidos, cada lugar al que fuimos. Todo eso ya es nuestro. Me gusta pensar que vamos construyendo un mundo chiquito que solo existe entre tú y yo.'
  },
  {
    id: 8,
    color: '#daf5f0',  // pale mint
    emoji: '🧠',
    title: 'Tu inteligencia',
    preview: 'Me asombras constantemente.',
    body: 'La forma en que piensas, argumentas las cosas me parece tan bello. Puedo hablar contigo horas de absolutamente cualquier tema y siempre me aportas algo nuevo. Eres de las personas más interesantes que he conocido en mi vida.'
  },
  {
    id: 9,
    color: '#f0daf5',  // pale mauve
    emoji: '🌙',
    title: 'Las noches contigo',
    preview: 'Las horas vuelan y no me importa.',
    body: 'Cuando estamos juntos en la noche y el tiempo desaparece sin avisarnos. Hablando de todo y de nada, jugando, riendo de tonterías. Contigo el tiempo pasa de una manera diferente, y siempre quiero más. Aunque siempre el tiempo se me pasa volando:('
  },
  {
    id: 10,
    color: '#f0ebda',  // antique tan
    emoji: '💕',
    title: 'Simplemente tú',
    preview: 'Todo lo que eres, me enamora.',
    body: 'No es una sola cosa. Es la suma de todo lo que eres: tus gestos, tu voz, tus manías, tus miedos, tus sueños, tu historia. Eres la persona más real y completa que he conocido, y me sigo enamorando de ti cada día, cada momento. Esta lista no alcanza para todo. Quiero que sepas que eres una mujer realmente bella. Sé que tu nombre se relaciona con la luna, pero para mi eres un sol que ilumina mi vida. Gracias por ser tú, por compartir tu mundo conmigo, por hacerme tan feliz. Te amo con todo mi corazón, hoy y siempre.'
  }
];



const songs = [
  { title: 'Razón',          artist: 'Los Caligaris',                  icon: '🎸' },
  { title: 'Amor de siempre', artist: 'cuco',                           icon: '🎤' },
  { title: 'I Could die for You',            artist: 'Red Hot Chili Peppers',                       icon: '🌺' },
  { title: 'Viento', artist: 'Caifanes',              icon: '🎹' },
  { title: 'Vuelta por el universo',artist: 'Gustavo Cerati',             icon: '💿' },
  { title: 'My Kind of Woman',     artist: 'Mac DeMarco',           icon: '🎵' },
];

/* ================================================================
   JOURNEY — Nuestro trayecto (una estación por cada mes cumplido)
   ================================================================ */
const START_DATE = { year: 2026, month: 6, day: 19 }; // 19 de julio
const MONTH_NAMES = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];

const journeyMonths = [
  {
    n: 1, emoji: '🌱',
    title: 'El comienzo',
    preview: 'Un 19 de julio, y un "síiiii" que lo cambió todo.',
    body: 'Durante el primer mes, aprendí mucho más de ti. Aprendí a quererte, a conocerte, a admirarte. Aprendí que la vida es muy bonita cuando se comparte con alguien, que nada es dificíl si tienes una buena compañía, si tienes un roble que te sostenga y no te deje caer. Aquí confirmé que realmente eres la mujer más increíble que he conocido. Sin duda alguna aprendí que el amor contigo está en todas las cosas que hacemos, desde un simple "buenos días" hasta un "te amo" que me hace sentir el hombre más afortunado del mundo. Gracias por elegirme, gracias por amarme, gracias por ser tú.'
  },
  {
    n: 2, emoji: '🌙',
    title: 'Dos lunas de nosotros',
    preview: 'Un mes más, y todavía me sigo enamorando.',
    body: 'Dos lunas, y encima con la mía: la que vive en tu nombre. Aprendí a quererte en el "buenos días" de todas las mañanas, en el "ya llegué" de todos los días, en cómo el tiempo se nos va sin avisar. Cada día elijo quedarme, y siempre vuelvo a elegirte a ti. Aquí hubieron desacuerdos, discusiones pequeñas, pero también hubo reconciliaciones, abrazos, y mucho amor. Aprendí que el amor no es perfecto, pero sí es real. Y contigo, mi amor, todo es real. Muchas veces me pregunto cómo es que tuve tanta suerte de encontrarte, y la respuesta siempre es la misma: no hay suerte, hay destino. Y el destino nos trajo a este camino que apenas empieza, pero que ya me ha enseñado tanto. Gracias por ser mi compañera, mi amiga, mi amor. Gracias por ser tú. Aprendí a apreciar mucho más lo que tenemos, y a valorar cada momento que compartimos, desde las banqueteadas hasta los silencios cómodos. Sé que si tú me llegas a hacer falta en algún momento, mi mundo se caería a pedazos, sé que si esa risa que me hace feliz se apagara, mi corazón se rompería. Pero sé que eso nunca pasará, porque tú eres mi todo, y yo soy tuyo.  Felices dos meses, mi amor. Eres la mejor parte de mi vida, y no puedo esperar a seguir construyendo nuestro camino juntos. Te amo con todo mi corazón, hoy y siempre.'
  },
  {
    n: 3, emoji: '🍂',
    title: 'Cerquita de tu rutina',
    preview: 'Aún no se desbloquea… cuando pase su 19, aquí habrá un hermoso escrito esperándote.'
  },
  {
    n: 4, emoji: '🕯️',
    title: 'El viaje, nuestro',
    preview: 'Aún no se desbloquea… cuando pase su 19, aquí habrá un hermoso escrito esperándote.'
  },
  {
    n: 5, emoji: '🎄',
    title: 'Las fechas y yo',
    preview: 'Aún no se desbloquea… cuando pase su 19, aquí habrá un hermoso escrito esperándote.'
  },
  {
    n: 6, emoji: '❄️',
    title: 'Mitad del primer año',
    preview: 'Aún no se desbloquea… cuando pase su 19, aquí habrá un hermoso escrito esperándote.'
  },
  {
    n: 7, emoji: '💌',
    title: 'Me sigues eligiendo',
    preview: 'Aún no se desbloquea… cuando pase su 19, aquí habrá un hermoso escrito esperándote.'
  },
  {
    n: 8, emoji: '🌷',
    title: 'Brotando',
    preview: 'Aún no se desbloquea… cuando pase su 19, aquí habrá un hermoso escrito esperándote.'
  },
  {
    n: 9, emoji: '🌧️',
    title: 'Nuestras tormentas',
    preview: 'Aún no se desbloquea… cuando pase su 19, aquí habrá un hermoso escrito esperándote.'
  },
  {
    n: 10, emoji: '🌸',
    title: 'Diez lunas',
    preview: 'Aún no se desbloquea… cuando pase su 19, aquí habrá un hermoso escrito esperándote.'
  },
  {
    n: 11, emoji: '☀️',
    title: 'Un mes para el año',
    preview: 'Aún no se desbloquea… cuando pase su 19, aquí habrá un hermoso escrito esperándote.'
  },
  {
    n: 12, emoji: '🥂',
    title: 'Un año entero',
    preview: 'Aún no se desbloquea… cuando pase su 19, aquí habrá un hermoso escrito esperándote.'
  }
];

const foreverJourney = {
  forever: true, emoji: '∞',
  title: 'Lo que viene',
  preview: 'Y después de un año… el viaje solo acaba de empezar.',
  body: 'Al final de cada estación hay otra, y a la vuelta de cada mes hay más "nosotros". Esto no es un final: es un "y lo que sigue". Con todo lo que hemos construido, no puedo esperar a ver qué nos tiene preparado el camino. Contigo, y para siempre, sea la ruta.'
};

function journeyDate(n) {
  const idx = (START_DATE.month + n) % 12;
  const year = START_DATE.year + Math.floor((START_DATE.month + n) / 12);
  return `19 de ${MONTH_NAMES[idx]}${year !== START_DATE.year ? ` de ${year}` : ''}`;
}

function monthsCompleted() {
  const now = new Date();
  const diff = (now.getFullYear() - START_DATE.year) * 12 + (now.getMonth() - START_DATE.month);
  return Math.max(0, diff - (now.getDate() < START_DATE.day ? 1 : 0));
}

/* ================================================================
   RENDER CARDS
   ================================================================ */
function renderCards() {
  const grid = document.getElementById('cards-grid');
  cards.forEach((card, i) => {
    const el = document.createElement('div');
    el.className = 'card';
    el.style.background = card.color;
    el.style.animationDelay = `${i * 0.07}s`;

    el.innerHTML = `
      <div class="card__seal">💌</div>
      <span class="card__num">${card.id}</span>
      <span class="card__emoji">${card.emoji}</span>
      <h3 class="card__title">${card.title}</h3>
      <p class="card__preview">${card.preview}</p>
      <span class="card__hint">toca para leer ✦</span>
    `;

    el.addEventListener('click', e => { e.stopPropagation(); openModal(card); });
    grid.appendChild(el);
  });
}

/* ================================================================
   MODAL
   ================================================================ */
const modalBg   = document.getElementById('modal-bg');
const modalBody = document.getElementById('modal-content');

function openModal(card) {
  modalBody.innerHTML = `
    <span class="modal__emoji">${card.emoji}</span>
    <p class="modal__num">Razón #${card.id} de muchas...</p>
    <h2 class="modal__title">${card.title}</h2>
    <hr class="modal__divider" />
    <p class="modal__body">${card.body}</p>
  `;
  modalBg.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalBg.classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('modal-close').addEventListener('click', closeModal);
modalBg.addEventListener('click', e => { if (e.target === modalBg) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ================================================================
   JOURNEY — RENDER & INTERACTION
   ================================================================ */
function openJourneyModal(m, reached, isNext) {
  let inner;
  if (m.forever) {
    inner = `
      <span class="modal__emoji">${m.emoji}</span>
      <p class="modal__num">la parada que no termina</p>
      <h2 class="modal__title">${m.title}</h2>
      <hr class="modal__divider" />
      <p class="modal__body">${m.body}</p>`;
  } else if (reached) {
    const body = (m.body && m.body.trim())
      ? m.body
      : 'Esta carta aún se está escribiendo, mi amor. Este mes ya llegó, pero quiero escribírtela despacito, con el corazón. Espéramela… muy pronto tendrás un hermoso escrito de lo que estuvo pasando aquí.';
    inner = `
      <span class="modal__emoji">${m.emoji}</span>
      <p class="modal__num">Estación ${m.n} de 12 · ${journeyDate(m.n)}</p>
      <h2 class="modal__title">${m.title}</h2>
      <hr class="modal__divider" />
      <p class="modal__body">${body}</p>`;
  } else {
    inner = `
      <span class="modal__emoji">${isNext ? '🚂' : '🔒'}</span>
      <p class="modal__num">${isNext ? 'estación al llegar' : 'estación en camino'}</p>
      <h2 class="modal__title">${isNext ? 'Próxima parada' : 'Todavía no llega'}</h2>
      <hr class="modal__divider" />
      <p class="modal__body">${isNext
        ? 'Esta parada está muy cerquita, mi amor. Cuando pase el 19, aquí estará tu cartita contando lo que cada día nuevo me sigue enseñando de ti.'
        : 'Esta carta no existe todavía… porque aún no hemos vivido ese mes. Cuando llegue su 19, la escribiré con todo lo que el camino nos haya regalado entretanto.'}</p>`;
  }
  modalBody.innerHTML = inner;
  modalBg.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function renderJourney() {
  const track = document.getElementById('journey-track');
  const counter = document.getElementById('journey-counter');
  const done = monthsCompleted();

  if (done === 0)        counter.textContent = 'Nuestro primer 19 está por llegar 🌱';
  else if (done === 1)   counter.textContent = 'Ya es 1 luna y el camino apenas empieza a brillar ✨';
  else                   counter.textContent = `Ya son ${done} lunas de nosotros, y cada estación nos hace más "nosotros" 💗`;

  journeyMonths.forEach((m, i) => {
    const reached = m.n <= done;
    const isNext  = done > 0 && m.n === done + 1;
    const st = document.createElement('div');
    st.className = 'station';
    st.classList.add(i % 2 ? 'station--right' : 'station--left');
    st.classList.add(reached ? 'station--reached' : (isNext ? 'station--next' : 'station--locked'));

    st.innerHTML = `
      <div class="station__node">${reached ? m.emoji : (isNext ? '⭐' : '🔒')}</div>
      <div class="station__card">
        <span class="station__num">Mes ${m.n}</span>
        <p class="station__meta">${journeyDate(m.n)} · ${m.title}</p>
        <p class="station__preview">${m.preview}</p>
        ${reached ? '<span class="station__hint">toca para leer tu carta ✦</span>' : ''}
      </div>
    `;

    const open = () => openJourneyModal(m, reached, isNext);
    st.querySelector('.station__card').addEventListener('click', open);
    st.querySelector('.station__node').addEventListener('click', open);
    track.appendChild(st);
  });

  const f = document.createElement('div');
  f.className = 'station station--locked station--right';
  f.innerHTML = `
    <div class="station__node">∞</div>
    <div class="station__card">
      <span class="station__num">Para siempre</span>
      <p class="station__meta">más allá de las estaciones</p>
      <p class="station__preview">${foreverJourney.preview}</p>
    </div>
  `;
  const openForever = () => openJourneyModal(foreverJourney, false, false);
  f.querySelector('.station__card').addEventListener('click', openForever);
  f.querySelector('.station__node').addEventListener('click', openForever);
  track.appendChild(f);
}

/* ================================================================
   RENDER SONGS
   ================================================================ */
function renderSongs() {
  const list = document.getElementById('songs-list');
  songs.forEach(song => {
    const el = document.createElement('div');
    el.className = 'song-item';
    el.innerHTML = `
      <div class="song-icon">${song.icon}</div>
      <div class="song-info">
        <p class="song-title">${song.title}</p>
        <p class="song-artist">${song.artist}</p>
      </div>
    `;
    list.appendChild(el);
  });
}

/* ================================================================
   CAT MOVEMENT
   ================================================================ */
const catWrap = document.getElementById('cat-wrap');
const catEl   = document.getElementById('cat');

let prevX = window.innerWidth  / 2;
let prevY = window.innerHeight * 0.75;
let walkTimer = null;

// set initial position
catWrap.style.left = prevX + 'px';
catWrap.style.top  = prevY + 'px';

function moveCatTo(x, y) {
  // Face correct direction
  if (x < prevX) {
    catEl.classList.add('flipped');
  } else {
    catEl.classList.remove('flipped');
  }
  prevX = x;
  prevY = y;

  // Start walking animation
  catEl.classList.add('walking');

  // Move
  catWrap.style.left = x + 'px';
  catWrap.style.top  = y + 'px';

  // Stop walking after transition completes (~800ms)
  clearTimeout(walkTimer);
  walkTimer = setTimeout(() => {
    catEl.classList.remove('walking');
  }, 850);

  // Spawn hearts at click point
  spawnHearts(x, y);
}

/* ================================================================
   HEARTS
   ================================================================ */
const heartsContainer = document.getElementById('hearts-container');
const heartSymbols = ['💕', '✨', '🌸', '💫', '❤️', '🌹', '⭐'];

function spawnHearts(x, y) {
  const count = 3 + Math.floor(Math.random() * 2);
  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
      const offsetX = (Math.random() - 0.5) * 50;
      heart.style.left   = (x + offsetX) + 'px';
      heart.style.top    = (y - 10) + 'px';
      heart.style.fontSize = (.75 + Math.random() * .6) + 'rem';
      heart.style.animationDuration = (1.4 + Math.random() * .8) + 's';
      heartsContainer.appendChild(heart);
      setTimeout(() => heart.remove(), 2500);
    }, i * 90);
  }
}

/* ================================================================
   EVENT LISTENERS — click & touch
   ================================================================ */
const IGNORED_SELECTORS = '.card, .modal-bg, .modal-letter, .extra-card, footer, .song-item, .emoji-item, .station, .station__card, .station__node';

document.addEventListener('click', e => {
  if (e.target.closest(IGNORED_SELECTORS)) return;
  moveCatTo(e.clientX, e.clientY);
});

document.addEventListener('touchend', e => {
  if (e.target.closest(IGNORED_SELECTORS)) return;
  const t = e.changedTouches[0];
  moveCatTo(t.clientX, t.clientY);
}, { passive: true });

/* ================================================================
   INIT
   ================================================================ */
renderCards();
renderSongs();
renderJourney();