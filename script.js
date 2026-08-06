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
const IGNORED_SELECTORS = '.card, .modal-bg, .modal-letter, .extra-card, footer, .song-item, .emoji-item';

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