// Light option — Dos Herencias homepage
// Warm ivory, bronze-gold, airy modern editorial.

const LIGHT = {
  bg: '#f5f0e6',      // warm ivory
  bg2: '#ebe3d2',     // soft sand
  bg3: '#1a1613',     // deep contrast panel
  ink: '#1a1613',
  inkDim: 'rgba(26,22,19,0.64)',
  inkFaint: 'rgba(26,22,19,0.38)',
  rule: 'rgba(26,22,19,0.14)',
  gold: '#8a6a2d',    // deeper bronze that reads well on light
  goldSoft: 'rgba(138,106,45,0.72)',
};

const lSerif = `"Cormorant Garamond", "EB Garamond", Garamond, "Didot", serif`;
const lSans = `"Inter Tight", "Neue Haas Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif`;
const lMono = `"JetBrains Mono", "IBM Plex Mono", ui-monospace, monospace`;

function LSeal({ size = 56, color = LIGHT.gold }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" style={{ display: 'block' }}>
      <defs>
        <path id="lSealCircle" d="M 60 60 m -44 0 a 44 44 0 1 1 88 0 a 44 44 0 1 1 -88 0" />
      </defs>
      <circle cx="60" cy="60" r="56" fill="none" stroke={color} strokeWidth="0.8" opacity="0.9" />
      <circle cx="60" cy="60" r="50" fill="none" stroke={color} strokeWidth="0.5" opacity="0.55" />
      <text fill={color} style={{ fontFamily: lSerif, fontSize: 9, letterSpacing: 3 }}>
        <textPath href="#lSealCircle" startOffset="0%">DOS HERENCIAS · DOS HERENCIAS ·</textPath>
      </text>
      <text x="60" y="68" textAnchor="middle" fill={color}
        style={{ fontFamily: lSerif, fontSize: 34, fontStyle: 'italic', letterSpacing: 1 }}>
        II
      </text>
    </svg>
  );
}

function LFlourish({ w = 60, color = LIGHT.goldSoft }) {
  return (
    <svg width={w} height="8" viewBox="0 0 60 8" style={{ display: 'block' }}>
      <line x1="0" y1="4" x2="26" y2="4" stroke={color} strokeWidth="0.6" />
      <circle cx="30" cy="4" r="1" fill={color} />
      <line x1="34" y1="4" x2="60" y2="4" stroke={color} strokeWidth="0.6" />
    </svg>
  );
}

function LightNav() {
  const link = { color: LIGHT.ink, fontFamily: lSans, fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', textDecoration: 'none', opacity: 0.82 };
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 20, padding: '28px 56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', gap: 32 }}>
        <a style={link} href="#">The Estate</a>
        <a style={link} href="#">Wines</a>
        <a style={link} href="#">Heritage</a>
      </div>
      <div style={{ fontFamily: lSerif, fontSize: 16, letterSpacing: 5, color: LIGHT.ink }}>DOS HERENCIAS</div>
      <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
        <a style={link} href="#">Journal</a>
        <a style={link} href="#">Visit</a>
        <a style={{ ...link, border: `1px solid ${LIGHT.gold}`, padding: '9px 16px', color: LIGHT.gold }} href="#">Acquire</a>
      </div>
    </div>
  );
}

function LightHero() {
  return (
    <section style={{ position: 'relative', height: 900, background: LIGHT.bg, overflow: 'hidden' }}>
      {/* Ivory background with subtle paper grain */}
      <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse at 70% 40%, rgba(138,106,45,0.08), transparent 60%)` }} />

      {/* Split layout: big type left, bottle-top image right */}
      <div style={{ position: 'absolute', left: 56, top: 180, width: 720 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 40 }}>
          <LFlourish w={40} />
          <div style={{ fontFamily: lMono, fontSize: 11, letterSpacing: 3, color: LIGHT.gold, textTransform: 'uppercase' }}>Napa Valley · Est. 2025</div>
        </div>
        <h1 style={{ fontFamily: lSerif, fontWeight: 300, fontSize: 128, lineHeight: 0.92, letterSpacing: -3, margin: 0, color: LIGHT.ink }}>
          Two lines,<br />
          <em style={{ fontStyle: 'italic', color: LIGHT.gold, fontWeight: 300 }}>one vintage.</em>
        </h1>
        <p style={{ fontFamily: lSerif, fontSize: 22, lineHeight: 1.5, color: LIGHT.inkDim, marginTop: 44, maxWidth: 480, fontWeight: 300 }}>
          A Cabernet Sauvignon born of two inheritances —
          the rocky patience of old-world vineyards and the warmth of the Napa sun.
        </p>
        <div style={{ display: 'flex', gap: 28, alignItems: 'center', marginTop: 56 }}>
          <a href="#" style={{ fontFamily: lSans, fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: LIGHT.bg, background: LIGHT.ink, padding: '16px 28px', textDecoration: 'none' }}>
            Reserve the 2025
          </a>
          <a href="#" style={{ fontFamily: lSans, fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: LIGHT.ink, textDecoration: 'none', borderBottom: `1px solid ${LIGHT.ink}`, paddingBottom: 4 }}>
            Read the story ↘
          </a>
        </div>
      </div>

      {/* Bottle-top photograph, right */}
      <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '42%', backgroundImage: `url(${window.__resources.bottleTop})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '42%', background: 'linear-gradient(90deg, rgba(245,240,230,1) 0%, rgba(245,240,230,0) 20%)' }} />

      {/* Seal lower-left */}
      <div style={{ position: 'absolute', bottom: 48, left: 56 }}>
        <LSeal size={74} />
      </div>
      <div style={{ position: 'absolute', bottom: 48, right: 56, textAlign: 'right', color: LIGHT.inkDim, fontFamily: lMono, fontSize: 10, letterSpacing: 2 }}>
        <div>N 38.4°   W 122.3°</div>
        <div style={{ marginTop: 6 }}>Cuvée II · Lot 0024</div>
      </div>
    </section>
  );
}

function LightMarquee() {
  const items = ['Cabernet Sauvignon', '2025 Vintage', 'Napa Valley', 'Estate Bottled', '—', 'Lot 0024', 'Cabernet Sauvignon', '2025 Vintage', 'Napa Valley'];
  return (
    <div style={{ borderTop: `1px solid ${LIGHT.rule}`, borderBottom: `1px solid ${LIGHT.rule}`, background: LIGHT.bg, padding: '22px 0', overflow: 'hidden', whiteSpace: 'nowrap' }}>
      <div style={{ display: 'inline-flex', gap: 40, animation: 'dh-marquee 40s linear infinite' }}>
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} style={{ fontFamily: lSerif, fontSize: 16, fontStyle: i % 3 === 1 ? 'italic' : 'normal', color: i % 3 === 0 ? LIGHT.gold : LIGHT.inkDim, letterSpacing: 3 }}>{t}</span>
        ))}
      </div>
    </div>
  );
}

function LightHeritage() {
  return (
    <section style={{ background: LIGHT.bg, color: LIGHT.ink, padding: '180px 56px 160px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 100, alignItems: 'start' }}>
        <div>
          <div style={{ fontFamily: lMono, fontSize: 10, letterSpacing: 3, color: LIGHT.gold, textTransform: 'uppercase', marginBottom: 40 }}>
            Chapter I · Heritage
          </div>
          <h2 style={{ fontFamily: lSerif, fontWeight: 300, fontSize: 72, lineHeight: 1.02, letterSpacing: -1, margin: 0 }}>
            Two families.<br />
            <em style={{ fontStyle: 'italic', color: LIGHT.gold }}>One soil.</em>
          </h2>
          <div style={{ marginTop: 40, height: 320, backgroundImage: `url(${window.__resources.vineyard})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        </div>
        <div style={{ paddingTop: 60 }}>
          <p style={{ fontFamily: lSerif, fontSize: 22, lineHeight: 1.55, color: LIGHT.ink, fontWeight: 300, margin: 0 }}>
            Dos Herencias is a conversation between generations —
            a single vineyard tended by two families whose methods,
            though centuries apart, arrive at the same quiet insistence.
          </p>
          <p style={{ fontFamily: lSerif, fontSize: 18, lineHeight: 1.7, color: LIGHT.inkDim, marginTop: 36, fontWeight: 300 }}>
            The Roman numeral II is not a mark of sequence
            but of partnership. Every bottle carries two signatures:
            one stamped into the foil, one written into the soil itself.
          </p>
          <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, paddingTop: 40, borderTop: `1px solid ${LIGHT.rule}` }}>
            {[
              ['Elevation', '412 m'],
              ['Harvest', 'By hand'],
              ['Barrel', 'French oak, 22 mo'],
              ['Production', '1,842 bottles'],
            ].map(([k, v]) => (
              <div key={k}>
                <div style={{ fontFamily: lMono, fontSize: 10, letterSpacing: 2, color: LIGHT.gold, textTransform: 'uppercase' }}>{k}</div>
                <div style={{ fontFamily: lSerif, fontSize: 28, color: LIGHT.ink, marginTop: 10, fontWeight: 300 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LightWines() {
  const wines = [
    { name: 'Cabernet Sauvignon', year: '2025', note: 'Cassis, graphite, cedar', price: '$148', img: window.__resources.bottleHeirs },
    { name: 'Cabernet Sauvignon', year: '2024 · Reserve', note: 'Black cherry, tobacco, leather', price: '$212', img: window.__resources.bottleScroll },
    { name: 'Cabernet Sauvignon', year: '2023 · Library', note: 'Plum, violet, graphite', price: '$285', img: window.__resources.bottleGrapes },
  ];
  return (
    <section style={{ background: LIGHT.bg2, color: LIGHT.ink, padding: '160px 56px 180px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 90 }}>
        <div>
          <div style={{ fontFamily: lMono, fontSize: 10, letterSpacing: 3, color: LIGHT.gold, textTransform: 'uppercase', marginBottom: 28 }}>
            Chapter II · The Collection
          </div>
          <h2 style={{ fontFamily: lSerif, fontWeight: 300, fontSize: 72, lineHeight: 1, letterSpacing: -1, margin: 0 }}>
            Three <em style={{ fontStyle: 'italic', color: LIGHT.gold }}>vintages</em>, one lineage.
          </h2>
        </div>
        <a href="#" style={{ fontFamily: lSans, fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: LIGHT.gold, textDecoration: 'none', borderBottom: `1px solid ${LIGHT.goldSoft}`, paddingBottom: 6 }}>
          View full cellar →
        </a>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40 }}>
        {wines.map((w, i) => (
          <div key={i} style={{ background: LIGHT.bg, padding: '56px 32px 40px', position: 'relative', border: `1px solid ${LIGHT.rule}` }}>
            <div style={{ position: 'absolute', top: 20, left: 24, fontFamily: lMono, fontSize: 10, letterSpacing: 2, color: LIGHT.gold }}>N° {String(i + 1).padStart(2, '0')}</div>
            <div style={{ position: 'absolute', top: 20, right: 24, fontFamily: lMono, fontSize: 10, letterSpacing: 2, color: LIGHT.gold }}>{w.year}</div>
            <div style={{ height: 520, backgroundImage: `url(${w.img})`, backgroundSize: 'cover', backgroundPosition: 'center', marginBottom: 32 }} />
            <h3 style={{ fontFamily: lSerif, fontWeight: 300, fontSize: 28, color: LIGHT.ink, margin: 0, letterSpacing: -0.3 }}>{w.name}</h3>
            <div style={{ fontFamily: lSerif, fontStyle: 'italic', fontSize: 15, color: LIGHT.inkDim, marginTop: 8, fontWeight: 300 }}>{w.note}</div>
            <div style={{ marginTop: 28, paddingTop: 20, borderTop: `1px solid ${LIGHT.rule}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontFamily: lSerif, fontSize: 22, color: LIGHT.gold, fontWeight: 400 }}>{w.price}</div>
              <a href="#" style={{ fontFamily: lSans, fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: LIGHT.ink, textDecoration: 'none' }}>Add to cellar ↗</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function LightPullQuote() {
  // Dark contrast panel against the airy palette — adds depth
  return (
    <section style={{ background: LIGHT.bg3, color: '#ebe4d4', padding: '180px 56px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontFamily: lSerif, fontSize: 520, color: 'rgba(138,106,45,0.09)', fontStyle: 'italic', lineHeight: 0.8, pointerEvents: 'none', letterSpacing: -20 }}>II</div>
      <div style={{ position: 'relative', maxWidth: 880, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 48 }}>
          <LFlourish w={80} color="rgba(201,168,100,0.72)" />
        </div>
        <blockquote style={{ fontFamily: lSerif, fontSize: 48, lineHeight: 1.25, fontWeight: 300, color: '#ebe4d4', margin: 0, letterSpacing: -0.5 }}>
          “Wine is the only art form you must <em style={{ color: '#c9a864', fontStyle: 'italic' }}>drink</em> to understand. Ours asks only that you listen closely — to the soil, to the year, to the hands that shaped it.”
        </blockquote>
        <div style={{ marginTop: 56, fontFamily: lMono, fontSize: 10, letterSpacing: 3, color: 'rgba(201,168,100,0.75)', textTransform: 'uppercase' }}>
          Elena Vargas · Winemaker, Dos Herencias
        </div>
      </div>
    </section>
  );
}

function LightFooter() {
  return (
    <footer style={{ background: LIGHT.bg, color: LIGHT.ink, padding: '100px 56px 48px', borderTop: `1px solid ${LIGHT.rule}` }}>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 56, paddingBottom: 80 }}>
        <div>
          <div style={{ fontFamily: lSerif, fontSize: 32, letterSpacing: 6, color: LIGHT.ink, marginBottom: 20 }}>DOS HERENCIAS</div>
          <p style={{ fontFamily: lSerif, fontSize: 16, lineHeight: 1.6, color: LIGHT.inkDim, maxWidth: 320, fontWeight: 300 }}>
            A single-vineyard Cabernet, crafted at the confluence of two traditions. Napa Valley.
          </p>
          <div style={{ marginTop: 32, display: 'flex', gap: 16, alignItems: 'center' }}>
            <input type="email" placeholder="Your email" style={{ background: 'transparent', border: 'none', borderBottom: `1px solid ${LIGHT.rule}`, padding: '10px 0', fontFamily: lSerif, fontSize: 15, color: LIGHT.ink, outline: 'none', width: 260 }} />
            <button style={{ background: 'transparent', border: `1px solid ${LIGHT.gold}`, padding: '10px 20px', fontFamily: lSans, fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: LIGHT.gold, cursor: 'pointer' }}>Subscribe</button>
          </div>
        </div>
        {[
          { t: 'Cellar', l: ['2025 Cabernet', '2024 Reserve', '2023 Library', 'Allocations'] },
          { t: 'Estate', l: ['Our Story', 'The Vineyard', 'Winemaking', 'Press'] },
          { t: 'Visit', l: ['Private Tastings', 'Trade Inquiries', 'Journal', 'Contact'] },
        ].map((col, i) => (
          <div key={i}>
            <div style={{ fontFamily: lMono, fontSize: 10, letterSpacing: 2, color: LIGHT.gold, textTransform: 'uppercase', marginBottom: 24 }}>{col.t}</div>
            {col.l.map((x, j) => (
              <div key={j} style={{ fontFamily: lSerif, fontSize: 16, color: LIGHT.ink, marginBottom: 12, fontWeight: 300 }}>{x}</div>
            ))}
          </div>
        ))}
      </div>
      <div style={{ borderTop: `1px solid ${LIGHT.rule}`, paddingTop: 32, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontFamily: lMono, fontSize: 10, letterSpacing: 2, color: LIGHT.inkFaint, textTransform: 'uppercase' }}>
          © MMXXV · Dos Herencias · Napa Valley
        </div>
        <LSeal size={40} />
        <div style={{ fontFamily: lMono, fontSize: 10, letterSpacing: 2, color: LIGHT.inkFaint, textTransform: 'uppercase' }}>
          Please enjoy responsibly
        </div>
      </div>
    </footer>
  );
}

function LightSite() {
  return (
    <div style={{ background: LIGHT.bg, fontFamily: lSans, color: LIGHT.ink, position: 'relative' }}>
      <LightNav />
      <LightHero />
      <LightMarquee />
      <LightHeritage />
      <LightWines />
      <LightPullQuote />
      <LightFooter />
    </div>
  );
}

window.LightSite = LightSite;
