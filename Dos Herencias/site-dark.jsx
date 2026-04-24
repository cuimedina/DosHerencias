// Dark option — Dos Herencias homepage
// Luxurious, editorial, minimalist. Deep noir, gold foil, serif display.

const DARK = {
  bg: '#0a0908',
  bg2: '#141211',
  ink: '#ebe4d4',
  inkDim: 'rgba(235,228,212,0.62)',
  inkFaint: 'rgba(235,228,212,0.38)',
  rule: 'rgba(235,228,212,0.12)',
  gold: '#c9a864',
  goldDim: 'rgba(201,168,100,0.65)',
};

const dhSerif = `"Cormorant Garamond", "EB Garamond", Garamond, "Didot", serif`;
const dhSans = `"Inter Tight", "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif`;
const dhMono = `"JetBrains Mono", "IBM Plex Mono", ui-monospace, monospace`;

// Circle seal SVG: "DOS HERENCIAS · DOS HERENCIAS" around "II"
function Seal({ size = 56, color = DARK.gold, bg = 'transparent' }) {
  const r = size / 2;
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" style={{ display: 'block' }}>
      <defs>
        <path id="sealCircle" d="M 60 60 m -44 0 a 44 44 0 1 1 88 0 a 44 44 0 1 1 -88 0" />
      </defs>
      {bg !== 'transparent' && <circle cx="60" cy="60" r="58" fill={bg} />}
      <circle cx="60" cy="60" r="56" fill="none" stroke={color} strokeWidth="0.8" opacity="0.9" />
      <circle cx="60" cy="60" r="50" fill="none" stroke={color} strokeWidth="0.5" opacity="0.6" />
      <text fill={color} style={{ fontFamily: dhSerif, fontSize: 9, letterSpacing: 3 }}>
        <textPath href="#sealCircle" startOffset="0%">DOS HERENCIAS · DOS HERENCIAS ·</textPath>
      </text>
      <text x="60" y="68" textAnchor="middle" fill={color}
        style={{ fontFamily: dhSerif, fontSize: 34, fontStyle: 'italic', letterSpacing: 1 }}>
        II
      </text>
    </svg>
  );
}

// Thin decorative flourish (single gold line)
function Flourish({ w = 60, color = DARK.goldDim }) {
  return (
    <svg width={w} height="8" viewBox="0 0 60 8" style={{ display: 'block' }}>
      <line x1="0" y1="4" x2="26" y2="4" stroke={color} strokeWidth="0.6" />
      <circle cx="30" cy="4" r="1" fill={color} />
      <line x1="34" y1="4" x2="60" y2="4" stroke={color} strokeWidth="0.6" />
    </svg>
  );
}

function DarkNav() {
  const link = { color: DARK.ink, fontFamily: dhSans, fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', textDecoration: 'none', opacity: 0.85 };
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 20, padding: '28px 56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', gap: 32 }}>
        <a style={link} href="#">The Estate</a>
        <a style={link} href="#">Wines</a>
        <a style={link} href="#">Heritage</a>
      </div>
      <div style={{ fontFamily: dhSerif, fontSize: 16, letterSpacing: 5, color: DARK.ink }}>DOS HERENCIAS</div>
      <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
        <a style={link} href="#">Journal</a>
        <a style={link} href="#">Visit</a>
        <a style={{ ...link, border: `1px solid ${DARK.goldDim}`, padding: '9px 16px', color: DARK.gold }} href="#">Acquire</a>
      </div>
    </div>
  );
}

function DarkHero() {
  return (
    <section style={{ position: 'relative', height: 900, background: DARK.bg, overflow: 'hidden' }}>
      {/* background gradient — subtle top-down */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 110%, rgba(201,168,100,0.10), transparent 60%)' }} />
      {/* bottle image right-center */}
      <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '55%', backgroundImage: 'url(assets/bottle_heirs.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center', filter: 'brightness(1.05)' }} />
      {/* left text column */}
      <div style={{ position: 'absolute', left: 56, top: 200, width: 560, color: DARK.ink }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 40 }}>
          <Flourish w={40} />
          <div style={{ fontFamily: dhMono, fontSize: 11, letterSpacing: 3, color: DARK.goldDim, textTransform: 'uppercase' }}>Napa Valley · Est. 2025</div>
        </div>
        <h1 style={{ fontFamily: dhSerif, fontWeight: 300, fontSize: 108, lineHeight: 0.95, letterSpacing: -2, margin: 0, color: DARK.ink }}>
          Two lines,<br />
          <em style={{ fontStyle: 'italic', color: DARK.gold, fontWeight: 300 }}>one vintage.</em>
        </h1>
        <p style={{ fontFamily: dhSerif, fontSize: 20, lineHeight: 1.55, color: DARK.inkDim, marginTop: 44, maxWidth: 440, fontWeight: 300 }}>
          A Cabernet Sauvignon born of two inheritances —
          the rocky patience of old-world vineyards and
          the warmth of the Napa sun.
        </p>
        <div style={{ display: 'flex', gap: 28, alignItems: 'center', marginTop: 56 }}>
          <a href="#" style={{ fontFamily: dhSans, fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: DARK.bg, background: DARK.gold, padding: '16px 28px', textDecoration: 'none' }}>
            Reserve the 2025
          </a>
          <a href="#" style={{ fontFamily: dhSans, fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: DARK.ink, textDecoration: 'none', borderBottom: `1px solid ${DARK.rule}`, paddingBottom: 4 }}>
            Read the story ↘
          </a>
        </div>
      </div>
      {/* Seal in bottom-left */}
      <div style={{ position: 'absolute', bottom: 48, left: 56 }}>
        <Seal size={74} />
      </div>
      {/* vintage marker right */}
      <div style={{ position: 'absolute', bottom: 48, right: 56, textAlign: 'right', color: DARK.inkDim, fontFamily: dhMono, fontSize: 10, letterSpacing: 2 }}>
        <div>N 38.4°   W 122.3°</div>
        <div style={{ marginTop: 6 }}>Cuvée II · Lot 0024</div>
      </div>
    </section>
  );
}

function DarkMarquee() {
  const items = ['Cabernet Sauvignon', '2025 Vintage', 'Napa Valley', 'Estate Bottled', '—', 'Lot 0024', 'Cabernet Sauvignon', '2025 Vintage', 'Napa Valley'];
  return (
    <div style={{ borderTop: `1px solid ${DARK.rule}`, borderBottom: `1px solid ${DARK.rule}`, background: DARK.bg, padding: '22px 0', overflow: 'hidden', whiteSpace: 'nowrap' }}>
      <div style={{ display: 'inline-flex', gap: 40, animation: 'dh-marquee 40s linear infinite' }}>
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} style={{ fontFamily: dhSerif, fontSize: 16, fontStyle: i % 3 === 1 ? 'italic' : 'normal', color: i % 3 === 0 ? DARK.gold : DARK.inkDim, letterSpacing: 3 }}>{t}</span>
        ))}
      </div>
    </div>
  );
}

function DarkHeritage() {
  return (
    <section style={{ background: DARK.bg, color: DARK.ink, padding: '180px 56px 160px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 100, alignItems: 'start' }}>
        <div>
          <div style={{ fontFamily: dhMono, fontSize: 10, letterSpacing: 3, color: DARK.goldDim, textTransform: 'uppercase', marginBottom: 40 }}>
            Chapter I · Heritage
          </div>
          <h2 style={{ fontFamily: dhSerif, fontWeight: 300, fontSize: 72, lineHeight: 1.02, letterSpacing: -1, margin: 0 }}>
            Two families.<br />
            <em style={{ fontStyle: 'italic', color: DARK.gold }}>One soil.</em>
          </h2>
          <div style={{ marginTop: 40, height: 320, backgroundImage: 'url(assets/grapes_hands.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        </div>
        <div style={{ paddingTop: 60 }}>
          <p style={{ fontFamily: dhSerif, fontSize: 22, lineHeight: 1.55, color: DARK.ink, fontWeight: 300, margin: 0 }}>
            Dos Herencias is a conversation between generations —
            a single vineyard tended by two families whose methods,
            though centuries apart, arrive at the same quiet insistence.
          </p>
          <p style={{ fontFamily: dhSerif, fontSize: 18, lineHeight: 1.7, color: DARK.inkDim, marginTop: 36, fontWeight: 300 }}>
            The Roman numeral II is not a mark of sequence
            but of partnership. Every bottle carries two signatures:
            one stamped into the foil, one written into the soil itself.
          </p>
          <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, paddingTop: 40, borderTop: `1px solid ${DARK.rule}` }}>
            <div>
              <div style={{ fontFamily: dhMono, fontSize: 10, letterSpacing: 2, color: DARK.goldDim, textTransform: 'uppercase' }}>Elevation</div>
              <div style={{ fontFamily: dhSerif, fontSize: 28, color: DARK.ink, marginTop: 10, fontWeight: 300 }}>412 m</div>
            </div>
            <div>
              <div style={{ fontFamily: dhMono, fontSize: 10, letterSpacing: 2, color: DARK.goldDim, textTransform: 'uppercase' }}>Harvest</div>
              <div style={{ fontFamily: dhSerif, fontSize: 28, color: DARK.ink, marginTop: 10, fontWeight: 300 }}>By hand</div>
            </div>
            <div>
              <div style={{ fontFamily: dhMono, fontSize: 10, letterSpacing: 2, color: DARK.goldDim, textTransform: 'uppercase' }}>Barrel</div>
              <div style={{ fontFamily: dhSerif, fontSize: 28, color: DARK.ink, marginTop: 10, fontWeight: 300 }}>French oak, 22 mo</div>
            </div>
            <div>
              <div style={{ fontFamily: dhMono, fontSize: 10, letterSpacing: 2, color: DARK.goldDim, textTransform: 'uppercase' }}>Production</div>
              <div style={{ fontFamily: dhSerif, fontSize: 28, color: DARK.ink, marginTop: 10, fontWeight: 300 }}>1,842 bottles</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DarkWines() {
  const wines = [
    { name: 'Cabernet Sauvignon', year: '2025', note: 'Cassis, graphite, cedar', price: '$148', img: 'assets/bottle_heirs.jpg' },
    { name: 'Cabernet Sauvignon', year: '2024 · Reserve', note: 'Black cherry, tobacco, leather', price: '$212', img: 'assets/bottle_scroll.jpg' },
    { name: 'Cabernet Sauvignon', year: '2023 · Library', note: 'Plum, violet, graphite', price: '$285', img: 'assets/bottle_grapes.jpg' },
  ];
  return (
    <section style={{ background: DARK.bg2, color: DARK.ink, padding: '160px 56px 180px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 90 }}>
        <div>
          <div style={{ fontFamily: dhMono, fontSize: 10, letterSpacing: 3, color: DARK.goldDim, textTransform: 'uppercase', marginBottom: 28 }}>
            Chapter II · The Collection
          </div>
          <h2 style={{ fontFamily: dhSerif, fontWeight: 300, fontSize: 72, lineHeight: 1, letterSpacing: -1, margin: 0 }}>
            Three <em style={{ fontStyle: 'italic', color: DARK.gold }}>vintages</em>, one lineage.
          </h2>
        </div>
        <a href="#" style={{ fontFamily: dhSans, fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: DARK.gold, textDecoration: 'none', borderBottom: `1px solid ${DARK.goldDim}`, paddingBottom: 6 }}>
          View full cellar →
        </a>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40 }}>
        {wines.map((w, i) => (
          <div key={i} style={{ background: DARK.bg, padding: '56px 32px 40px', position: 'relative', border: `1px solid ${DARK.rule}` }}>
            <div style={{ position: 'absolute', top: 20, left: 24, fontFamily: dhMono, fontSize: 10, letterSpacing: 2, color: DARK.goldDim }}>N° {String(i + 1).padStart(2, '0')}</div>
            <div style={{ position: 'absolute', top: 20, right: 24, fontFamily: dhMono, fontSize: 10, letterSpacing: 2, color: DARK.goldDim }}>{w.year}</div>
            <div style={{ height: 520, backgroundImage: `url(${w.img})`, backgroundSize: 'cover', backgroundPosition: 'center', marginBottom: 32 }} />
            <h3 style={{ fontFamily: dhSerif, fontWeight: 300, fontSize: 28, color: DARK.ink, margin: 0, letterSpacing: -0.3 }}>{w.name}</h3>
            <div style={{ fontFamily: dhSerif, fontStyle: 'italic', fontSize: 15, color: DARK.inkDim, marginTop: 8, fontWeight: 300 }}>{w.note}</div>
            <div style={{ marginTop: 28, paddingTop: 20, borderTop: `1px solid ${DARK.rule}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontFamily: dhSerif, fontSize: 22, color: DARK.gold, fontWeight: 300 }}>{w.price}</div>
              <a href="#" style={{ fontFamily: dhSans, fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: DARK.ink, textDecoration: 'none' }}>Add to cellar ↗</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function DarkPullQuote() {
  return (
    <section style={{ background: DARK.bg, color: DARK.ink, padding: '180px 56px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontFamily: dhSerif, fontSize: 520, color: 'rgba(201,168,100,0.05)', fontStyle: 'italic', lineHeight: 0.8, pointerEvents: 'none', letterSpacing: -20 }}>II</div>
      <div style={{ position: 'relative', maxWidth: 880, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 48 }}>
          <Flourish w={80} />
        </div>
        <blockquote style={{ fontFamily: dhSerif, fontSize: 48, lineHeight: 1.25, fontWeight: 300, color: DARK.ink, margin: 0, letterSpacing: -0.5 }}>
          “Wine is the only art form you must <em style={{ color: DARK.gold, fontStyle: 'italic' }}>drink</em> to understand. Ours asks only that you listen closely — to the soil, to the year, to the hands that shaped it.”
        </blockquote>
        <div style={{ marginTop: 56, fontFamily: dhMono, fontSize: 10, letterSpacing: 3, color: DARK.goldDim, textTransform: 'uppercase' }}>
          Elena Vargas · Winemaker, Dos Herencias
        </div>
      </div>
    </section>
  );
}

function DarkFooter() {
  return (
    <footer style={{ background: DARK.bg, color: DARK.ink, padding: '100px 56px 48px', borderTop: `1px solid ${DARK.rule}` }}>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 56, paddingBottom: 80 }}>
        <div>
          <div style={{ fontFamily: dhSerif, fontSize: 32, letterSpacing: 6, color: DARK.ink, marginBottom: 20 }}>DOS HERENCIAS</div>
          <p style={{ fontFamily: dhSerif, fontSize: 16, lineHeight: 1.6, color: DARK.inkDim, maxWidth: 320, fontWeight: 300 }}>
            A single-vineyard Cabernet, crafted at the confluence of two traditions. Napa Valley.
          </p>
          <div style={{ marginTop: 32, display: 'flex', gap: 16, alignItems: 'center' }}>
            <input type="email" placeholder="Your email" style={{ background: 'transparent', border: 'none', borderBottom: `1px solid ${DARK.rule}`, padding: '10px 0', fontFamily: dhSerif, fontSize: 15, color: DARK.ink, outline: 'none', width: 260 }} />
            <button style={{ background: 'transparent', border: `1px solid ${DARK.goldDim}`, padding: '10px 20px', fontFamily: dhSans, fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: DARK.gold, cursor: 'pointer' }}>Subscribe</button>
          </div>
        </div>
        {[
          { t: 'Cellar', l: ['2025 Cabernet', '2024 Reserve', '2023 Library', 'Allocations'] },
          { t: 'Estate', l: ['Our Story', 'The Vineyard', 'Winemaking', 'Press'] },
          { t: 'Visit', l: ['Private Tastings', 'Trade Inquiries', 'Journal', 'Contact'] },
        ].map((col, i) => (
          <div key={i}>
            <div style={{ fontFamily: dhMono, fontSize: 10, letterSpacing: 2, color: DARK.goldDim, textTransform: 'uppercase', marginBottom: 24 }}>{col.t}</div>
            {col.l.map((x, j) => (
              <div key={j} style={{ fontFamily: dhSerif, fontSize: 16, color: DARK.ink, marginBottom: 12, fontWeight: 300 }}>{x}</div>
            ))}
          </div>
        ))}
      </div>
      <div style={{ borderTop: `1px solid ${DARK.rule}`, paddingTop: 32, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontFamily: dhMono, fontSize: 10, letterSpacing: 2, color: DARK.inkFaint, textTransform: 'uppercase' }}>
          © MMXXV · Dos Herencias · Napa Valley
        </div>
        <Seal size={40} />
        <div style={{ fontFamily: dhMono, fontSize: 10, letterSpacing: 2, color: DARK.inkFaint, textTransform: 'uppercase' }}>
          Please enjoy responsibly
        </div>
      </div>
    </footer>
  );
}

function DarkSite() {
  return (
    <div style={{ background: DARK.bg, fontFamily: dhSans, color: DARK.ink, position: 'relative' }}>
      <style>{`@keyframes dh-marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-33.333%)} }`}</style>
      <DarkNav />
      <DarkHero />
      <DarkMarquee />
      <DarkHeritage />
      <DarkWines />
      <DarkPullQuote />
      <DarkFooter />
    </div>
  );
}

window.DarkSite = DarkSite;
window.DHSeal = Seal;
window.DHFlourish = Flourish;
window.dhFonts = { dhSerif, dhSans, dhMono };
