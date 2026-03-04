import { useEffect, useRef } from 'react'

// ── Color tokens ──────────────────────────────────────────────────
const GOLD = '#D4AF37'
const BLUE = '#0070f3'
const gold = (a) => `rgba(212,175,55,${a})`
const blue = (a) => `rgba(0,112,243,${a})`

// ── Data ──────────────────────────────────────────────────────────

const STRENGTHS = [
  {
    icon: '◈',
    title: 'Web3 Native CFO',
    subtitle: 'Crypto × Virtual Asset Finance',
    desc: 'Led finance at SFC-licensed VATP (Accumulus) and crypto unicorn Babel Capital. Full ecosystem command across CEX, DeFi, RWA, Stablecoin, DEX, and Custody. Pioneered IFRS-compliant accounting for virtual assets and automated ERP-to-on-chain reconciliation.',
    accent: 'gold',
    tags: ['CEX / DEX', 'RWA', 'Stablecoin', 'DeFi', 'Custody', 'IFRS'],
  },
  {
    icon: '◉',
    title: 'SFC Regulatory Architect',
    subtitle: 'Type 1–9 · AMLO · FRR',
    desc: 'Spearheaded SFC license applications across Types 1, 2, 4, 6, 7, 9 and AMLO compliance — built from zero. Managed on-site regulatory inspections, served as MIC of Finance, and maintained FRR and liquid asset coverage ratio governance across multiple firms.',
    accent: 'blue',
    tags: ['SFC Type 1–9', 'AMLO', 'FRR Compliance', 'Regulatory Affairs', 'Corporate Governance'],
  },
  {
    icon: '◆',
    title: 'Global Capital Strategist',
    subtitle: '5B HKD · Goldman · JPMorgan · CFA',
    desc: 'Executed a 5-Billion HKD multi-asset portfolio (bonds, private loans, perpetual, ABS) with 100% exit rate, co-structuring with Goldman Sachs, Credit Suisse, and JPMorgan via CLN, TRS, and REPO. Managed $100M USD IG secondary bond portfolio. Dual-certified CICPA + CFA.',
    accent: 'gold',
    tags: ['Investment Banking', 'M&A', 'Bond Portfolio', 'Structured Products', 'CICPA · CFA'],
  },
]

const EXPERIENCES = [
  // ── Web3 Era ──────────────────────────────────────────────────
  {
    era: 'WEB3 ERA',
    period: 'Jul 2023 – Dec 2025',
    company: 'Accumulus GBA Technology (HK) Co., Ltd.',
    role: 'CFO',
    location: 'Hong Kong',
    badge: 'VATP · SFC Type 1, 7 · AMLO',
    highlights: [
      'Led SFC Type 1, 7 & AMLO license applications; managed on-site regulatory inspections as MIC of Finance',
      'Built comprehensive financial management framework from zero-to-one for a regulated crypto exchange',
      'Automated accounting by integrating ERP with in-house trading platform — eliminating manual reconciliation',
      'Maintained FRR and liquid asset coverage ratio compliance; directed board-level financial reporting',
    ],
    accent: 'gold',
  },
  {
    period: 'Dec 2020 – Apr 2023',
    company: 'Fosun International Securities Limited',
    role: 'Head of Finance Department',
    location: 'Hong Kong',
    badge: 'SFC Type 1, 2, 4, 6, 9 · Online Brokerage',
    highlights: [
      'Oversaw all-round financial management of company and investment funds',
      'Led fund raising and capital liquidity management; restructured company organization and spun off SFC licenses',
      'Spearheaded SFC license Type 6 & 9 applications; directed FRR management to guide business development',
    ],
    accent: 'blue',
  },
  {
    period: 'Aug – Nov 2020',
    company: 'Babel Capital',
    role: 'Deputy CFO',
    location: 'Hong Kong',
    badge: 'Unicorn · Virtual Asset',
    highlights: [
      'Established financial management system for a leading virtual asset unicorn',
      'Formulated IFRS-compliant accounting policy for virtual assets; applied for SFC License Type 9',
      'Prepared pitch book, brought in strategic investors, and coordinated traditional bank account onboarding',
    ],
    accent: 'gold',
  },
  // ── TradFi Bridge ─────────────────────────────────────────────
  {
    era: 'TRADFI BRIDGE',
    period: 'Mar 2018 – Apr 2020',
    company: 'Huarong Rongde (HK) · Deutsche Bank JV',
    role: 'Head of Finance Department',
    location: 'Hong Kong',
    badge: 'Asset Management · DB JV',
    highlights: [
      'Managed P&L with financial derivative instruments (Put option + CDS) at a Deutsche Bank joint venture',
      'Established institutional-grade financial management policies and improved corporate governance frameworks',
      'Maintained relationships with regulators, external auditors, banks, and shareholders',
    ],
    accent: 'blue',
  },
  {
    period: 'Mar 2014 – Feb 2018',
    company: 'Huarong Rongde',
    role: 'Head of Investment / VP Investment',
    location: 'Hong Kong · Beijing',
    badge: 'Goldman · Credit Suisse · JPMorgan',
    highlights: [
      'Executed 5-Billion HKD multi-asset portfolio (public bonds, private loans, perpetual, ABS) — 100% fully exited',
      'Managed $100M USD IG secondary bond portfolio; conducted financial modelling, valuation, and credit analysis',
      'Structured CLN, TRS, REPO deals in partnership with Goldman Sachs, Credit Suisse, and JPMorgan',
    ],
    accent: 'gold',
  },
  // ── Compliance Foundation ─────────────────────────────────────
  {
    era: 'COMPLIANCE FOUNDATION',
    period: 'Mar 2012 – Feb 2014',
    company: 'Huarong Rongde Asset Management',
    role: 'Financial Manager',
    location: 'Beijing, China',
    badge: 'IFRS · PRC GAAP · Multi-Standard',
    highlights: [
      'Mastered dual-standard accounting (PRC GAAP + IFRS) — the compliance bedrock underpinning today\'s cross-chain audit readiness',
      'Provided front-office investment deal support through professional accounting and tax advisory, bridging financial rigor with business velocity',
      'Managed fund operations, annual budgeting, and tax planning — establishing operational discipline now applied to crypto treasury management',
    ],
    accent: 'blue',
  },
  {
    period: 'May 2010 – Dec 2011',
    company: 'China National Electric Engineering Corp. (CNEEC)',
    role: 'Senior Financial Analyst',
    location: 'Sabah, Malaysia',
    badge: 'SOE · Cross-Border · BOD Reports',
    highlights: [
      'Delivered board-level financial analysis and decision-support for a cross-border SOE infrastructure project',
      'Managed multi-currency budgeting and variance analysis — skills directly applicable to multi-chain treasury operations',
      'Built 3-year business planning models, developed peer benchmarking reports and strategic forecasts for senior leadership',
    ],
    accent: 'gold',
  },
  {
    period: 'Aug 2006 – Apr 2010',
    company: 'China National Complete Plant Import & Export Corp.',
    role: 'Tax Advisor',
    location: 'Beijing, China',
    badge: '000151.SZ A-Share Listed · Cross-Border Tax',
    highlights: [
      'Structured cross-border investment tax strategies for an A-share listed company — the ultimate governance credibility stamp in Chinese finance',
      'Designed offshore investment tax structures for complex multi-jurisdiction deals — directly applicable to RWA and token-economy cross-border flows',
      'Ensured full enterprise income tax compliance while minimizing liability; established onshore/offshore tax optimization playbooks',
    ],
    accent: 'blue',
  },
]

// ── Particle + Grid Canvas ────────────────────────────────────────

function ParticleBackground() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    let raf

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const N = 70
    const GRID = 68
    const CONNECT = 135

    // Mix gold + blue particles
    const pts = Array.from({ length: N }, (_, i) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.20,
      vy: (Math.random() - 0.5) * 0.20,
      r: Math.random() * 1.2 + 0.4,
      a: Math.random() * 0.4 + 0.12,
      isGold: i % 3 === 0,
    }))

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Grid — subtle blue
      ctx.strokeStyle = blue(0.038)
      ctx.lineWidth = 1
      for (let x = 0; x <= canvas.width; x += GRID) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke()
      }
      for (let y = 0; y <= canvas.height; y += GRID) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke()
      }

      // Connections
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y)
          if (d < CONNECT) {
            const t = 1 - d / CONNECT
            ctx.beginPath()
            ctx.moveTo(pts[i].x, pts[i].y)
            ctx.lineTo(pts[j].x, pts[j].y)
            // Gold connection if either is gold
            const useGold = pts[i].isGold || pts[j].isGold
            ctx.strokeStyle = useGold ? gold(0.06 * t) : blue(0.07 * t)
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }

      // Particles
      pts.forEach(p => {
        p.x = (p.x + p.vx + canvas.width) % canvas.width
        p.y = (p.y + p.vy + canvas.height) % canvas.height
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.isGold ? gold(p.a) : blue(p.a)
        ctx.fill()
      })

      raf = requestAnimationFrame(tick)
    }

    tick()
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <canvas
      ref={ref}
      style={{ position: 'fixed', inset: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}
    />
  )
}

// ── Nav ───────────────────────────────────────────────────────────

function NavBar() {
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      background: 'rgba(10,10,10,0.80)',
      backdropFilter: 'blur(20px) saturate(160%)',
      WebkitBackdropFilter: 'blur(20px) saturate(160%)',
      borderBottom: `1px solid ${gold(0.12)}`,
    }}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between" style={{ height: 56 }}>
        {/* Logo */}
        <span style={{ fontWeight: 900, fontSize: 13, letterSpacing: '0.18em' }}>
          <span style={{ color: GOLD }}>BRAIN</span>
          <span style={{ color: '#fff' }}>SIGHT</span>
          <span style={{ color: BLUE }}>.PRO</span>
        </span>
        {/* Links */}
        <div className="hidden sm:flex gap-7" style={{ fontSize: 12, letterSpacing: '0.06em' }}>
          {[['#strengths', 'Strengths'], ['#experience', 'Experience'], ['#credentials', 'Credentials']].map(([href, label]) => (
            <a key={href} href={href} style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'color .2s' }}
              onMouseEnter={e => e.target.style.color = GOLD}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.4)'}>
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

// ── Hero ──────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section style={{
      position: 'relative', zIndex: 1,
      minHeight: '100vh',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      textAlign: 'center', padding: '80px 24px 40px',
    }}>
      {/* Ambient orbs */}
      <div style={{ position: 'absolute', width: 720, height: 720, borderRadius: '50%', background: `radial-gradient(circle, ${gold(0.05)} 0%, transparent 68%)`, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: `radial-gradient(circle, ${blue(0.04)} 0%, transparent 68%)`, top: '35%', left: '65%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 860, width: '100%' }}>

        {/* ── Domain badge ── HERO FOCAL POINT ── */}
        <div className="anim-fade-up" style={{ display: 'flex', justifyContent: 'center', marginBottom: 32 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '10px 28px', borderRadius: 999,
            background: `linear-gradient(135deg, ${gold(0.10)}, ${blue(0.06)})`,
            border: `1px solid ${gold(0.40)}`,
            boxShadow: `0 0 32px ${gold(0.16)}, 0 0 64px ${gold(0.06)}, inset 0 1px 0 ${gold(0.20)}`,
          }}>
            <span className="anim-pulse-dot" style={{ width: 7, height: 7, borderRadius: '50%', background: GOLD, display: 'inline-block', boxShadow: `0 0 8px ${gold(0.8)}` }} />
            <span style={{ color: GOLD, fontSize: 15, fontWeight: 800, letterSpacing: '0.24em' }}>
              BRAINSIGHT<span style={{ color: '#fff' }}>.</span><span style={{ color: BLUE }}>PRO</span>
            </span>
            <span style={{ color: gold(0.5), fontSize: 11, fontWeight: 500, letterSpacing: '0.06em' }}>— Official Portal</span>
          </div>
        </div>

        {/* Name */}
        <h1 className="anim-fade-up anim-delay-1" style={{
          fontSize: 'clamp(56px, 10vw, 104px)', fontWeight: 900,
          lineHeight: 1.02, letterSpacing: '-0.035em', marginBottom: 18,
        }}>
          <span style={{ color: '#fff' }}>Bill </span>
          <span className="text-grad-hero">Shu</span>
        </h1>

        {/* Tagline */}
        <div className="anim-fade-up anim-delay-2" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '6px 14px', marginBottom: 26 }}>
          {[
            { text: 'Strategic CFO', color: 'rgba(255,255,255,0.88)' },
            { text: '·', color: 'rgba(255,255,255,0.2)' },
            { text: 'Web3 & Virtual Asset Finance', color: GOLD },
            { text: '·', color: 'rgba(255,255,255,0.2)' },
            { text: 'CICPA + CFA', color: BLUE },
          ].map(({ text, color }, i) => (
            <span key={i} style={{ color, fontSize: 'clamp(14px, 2.1vw, 19px)', fontWeight: 300 }}>{text}</span>
          ))}
        </div>

        {/* Bio */}
        <p className="anim-fade-up anim-delay-3" style={{
          color: 'rgba(255,255,255,0.44)', fontSize: 'clamp(13px, 1.5vw, 15px)',
          lineHeight: 1.8, maxWidth: 640, margin: '0 auto 36px',
        }}>
          Seasoned financial architect with 18+ years bridging listed-company TradFi and Web3.
          Built regulatory-grade systems at SFC-licensed crypto exchanges, a virtual asset unicorn,
          and global investment banks — driving sustainable growth through data-based decision making.
        </p>

        {/* Credential tags */}
        <div className="anim-fade-up anim-delay-4" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8, marginBottom: 64 }}>
          {[
            { label: 'SFC VATP CFO', c: GOLD },
            { label: 'DeFi · RWA · CEX', c: BLUE },
            { label: 'Compliance Architecture', c: GOLD },
            { label: 'Investment Banking', c: BLUE },
            { label: 'Listed-Co Governance', c: GOLD },
          ].map(({ label, c }) => (
            <span key={label} style={{
              padding: '5px 15px', borderRadius: 999,
              border: `1px solid ${c === GOLD ? gold(0.22) : blue(0.22)}`,
              background: c === GOLD ? gold(0.05) : blue(0.05),
              color: c === GOLD ? gold(0.85) : blue(0.85),
              fontSize: 12, fontWeight: 500,
            }}>{label}</span>
          ))}
        </div>

        {/* Scroll cue */}
        <div className="anim-fade-up anim-delay-5" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
          <div style={{ width: 1, height: 60, background: `linear-gradient(to bottom, ${gold(0.6)}, transparent)` }} />
          <span style={{ color: 'rgba(255,255,255,0.16)', fontSize: 10, letterSpacing: '0.3em', fontWeight: 500 }}>SCROLL</span>
        </div>
      </div>
    </section>
  )
}

// ── Core Strengths ────────────────────────────────────────────────

function CoreStrengths() {
  return (
    <section id="strengths" style={{ position: 'relative', zIndex: 1, padding: '96px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <p style={{ color: GOLD, fontSize: 11, letterSpacing: '0.32em', fontWeight: 600, marginBottom: 12 }}>CORE STRENGTHS</p>
          <h2 style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 800, color: '#fff', lineHeight: 1.2 }}>
            AI × FinTech <span className="text-grad-gold">Competitive Edge</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {STRENGTHS.map((s, i) => {
            const isGold = s.accent === 'gold'
            const ac = isGold ? GOLD : BLUE
            const ac_fn = isGold ? gold : blue
            return (
              <div key={i}
                className={isGold ? 'glass-gold glow-gold' : 'glass-blue glow-blue'}
                style={{ padding: 30, transition: 'transform .28s, box-shadow .28s', cursor: 'default' }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-5px) scale(1.015)'
                  e.currentTarget.style.boxShadow = `0 16px 56px ${ac_fn(0.18)}`
                }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '' }}
              >
                <div style={{ fontSize: 28, color: ac, marginBottom: 16 }}>{s.icon}</div>
                <h3 style={{ color: '#fff', fontWeight: 700, fontSize: 18, marginBottom: 5 }}>{s.title}</h3>
                <p style={{ color: ac, fontSize: 12, fontWeight: 600, marginBottom: 14, letterSpacing: '0.04em' }}>{s.subtitle}</p>
                <p style={{ color: 'rgba(255,255,255,0.48)', fontSize: 13.5, lineHeight: 1.74, marginBottom: 22 }}>{s.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {s.tags.map(tag => (
                    <span key={tag} style={{
                      fontSize: 10.5, fontWeight: 600, padding: '3px 11px', borderRadius: 999,
                      background: ac_fn(0.07), border: `1px solid ${ac_fn(0.24)}`, color: ac,
                    }}>{tag}</span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ── Experience Timeline ───────────────────────────────────────────

function EraLabel({ label }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '8px 0 4px' }}>
      <div style={{ flex: 1, height: 1, background: `linear-gradient(to right, ${gold(0.4)}, transparent)` }} />
      <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.28em', color: gold(0.7) }}>{label}</span>
      <div style={{ flex: 1, height: 1, background: `linear-gradient(to left, ${gold(0.4)}, transparent)` }} />
    </div>
  )
}

function ExperienceTimeline() {
  return (
    <section id="experience" style={{ position: 'relative', zIndex: 1, padding: '96px 24px' }}>
      <div style={{ maxWidth: 880, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <p style={{ color: GOLD, fontSize: 11, letterSpacing: '0.32em', fontWeight: 600, marginBottom: 12 }}>CAREER HISTORY</p>
          <h2 style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 800, color: '#fff' }}>
            Work <span className="text-grad-blue">Experience</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 13.5, marginTop: 12, maxWidth: 560, margin: '14px auto 0' }}>
            18 years — from A-share listed companies to virtual asset unicorns. Every chapter compounds into Web3 leadership.
          </p>
        </div>

        <div style={{ position: 'relative' }}>
          {/* Timeline line */}
          <div style={{
            position: 'absolute', left: 3, top: 0, bottom: 0, width: 1,
            background: `linear-gradient(to bottom, transparent, ${gold(0.4)}, ${blue(0.4)}, ${gold(0.3)}, transparent)`,
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, paddingLeft: '2.2rem' }}>
            {EXPERIENCES.map((exp, i) => {
              const isGold = exp.accent === 'gold'
              const ac = isGold ? GOLD : BLUE
              const ac_fn = isGold ? gold : blue
              return (
                <div key={i}>
                  {exp.era && <EraLabel label={exp.era} />}
                  <div
                    style={{
                      position: 'relative',
                      background: 'rgba(255,255,255,0.022)',
                      backdropFilter: 'blur(18px) saturate(150%)',
                      WebkitBackdropFilter: 'blur(18px) saturate(150%)',
                      border: `1px solid ${ac_fn(0.12)}`,
                      borderRadius: 18, padding: '22px 24px',
                      transition: 'border-color .25s, background .25s',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = ac_fn(0.35)
                      e.currentTarget.style.background = ac_fn(0.04)
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = ac_fn(0.12)
                      e.currentTarget.style.background = 'rgba(255,255,255,0.022)'
                    }}
                  >
                    {/* Timeline dot */}
                    <div style={{
                      position: 'absolute', left: -34, top: 22,
                      width: 10, height: 10, borderRadius: '50%',
                      background: ac, boxShadow: `0 0 12px ${ac_fn(0.7)}`,
                    }} />

                    {/* Header */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: 10, marginBottom: 12 }}>
                      <div>
                        <span style={{ color: ac, fontSize: 11.5, fontWeight: 600, letterSpacing: '0.03em' }}>{exp.period}</span>
                        <h3 style={{ color: '#fff', fontWeight: 700, fontSize: 15.5, marginTop: 3, marginBottom: 3 }}>{exp.company}</h3>
                        <p style={{ color: 'rgba(255,255,255,0.48)', fontSize: 13 }}>{exp.role} · {exp.location}</p>
                      </div>
                      <span style={{
                        fontSize: 10.5, fontWeight: 600, padding: '4px 12px', borderRadius: 999,
                        background: ac_fn(0.07), border: `1px solid ${ac_fn(0.24)}`,
                        color: ac, whiteSpace: 'nowrap', alignSelf: 'flex-start',
                      }}>{exp.badge}</span>
                    </div>

                    {/* Highlights */}
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                      {exp.highlights.map((h, j) => (
                        <li key={j} style={{ display: 'flex', gap: 10, fontSize: 13.5, color: 'rgba(255,255,255,0.46)', lineHeight: 1.58 }}>
                          <span style={{ color: ac, flexShrink: 0, fontWeight: 700 }}>›</span>
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* Bridge Strategy callout */}
                    {exp.bridge && (
                      <div style={{
                        marginTop: 14, padding: '8px 14px', borderRadius: 10,
                        background: gold(0.06), border: `1px solid ${gold(0.18)}`,
                        display: 'flex', gap: 8, alignItems: 'flex-start',
                      }}>
                        <span style={{ color: GOLD, fontSize: 13, flexShrink: 0 }}>⟳</span>
                        <p style={{ color: gold(0.85), fontSize: 12, lineHeight: 1.55, fontStyle: 'italic' }}>
                          <strong style={{ fontStyle: 'normal', color: GOLD }}>Bridge to Web3: </strong>
                          {exp.bridge}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Credentials ───────────────────────────────────────────────────

function CredentialsSection() {
  return (
    <section id="credentials" style={{ position: 'relative', zIndex: 1, padding: '96px 24px' }}>
      <div style={{ maxWidth: 880, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <p style={{ color: GOLD, fontSize: 11, letterSpacing: '0.32em', fontWeight: 600, marginBottom: 12 }}>CREDENTIALS</p>
          <h2 style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 800, color: '#fff' }}>
            Education & <span className="text-grad-gold">Certifications</span>
          </h2>
        </div>

        {/* Cert cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20, marginBottom: 20 }}>
          {[
            { label: 'CICPA', name: 'Chinese Institute of Certified Public Accountants', year: '2010', ac: GOLD, ac_fn: gold },
            { label: 'CFA', name: 'Chartered Financial Analyst', year: '2019', ac: BLUE, ac_fn: blue },
          ].map(c => (
            <div key={c.label} style={{
              padding: 24, display: 'flex', alignItems: 'center', gap: 20,
              background: c.ac_fn(0.04), backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
              border: `1px solid ${c.ac_fn(0.18)}`, borderRadius: 18,
            }}>
              <div style={{
                width: 58, height: 58, borderRadius: '50%', flexShrink: 0,
                background: c.ac_fn(0.08), border: `1px solid ${c.ac_fn(0.30)}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 11, fontWeight: 900, color: c.ac, letterSpacing: 1,
              }}>{c.label}</div>
              <div>
                <p style={{ color: '#fff', fontWeight: 700, fontSize: 15 }}>{c.label}</p>
                <p style={{ color: 'rgba(255,255,255,0.44)', fontSize: 12, marginTop: 3, lineHeight: 1.4 }}>{c.name}</p>
                <p style={{ color: c.ac, fontSize: 11, marginTop: 6, fontWeight: 600 }}>Awarded {c.year}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Education + Languages */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
          <div className="glass" style={{ padding: 26 }}>
            <p style={{ color: GOLD, fontSize: 10.5, letterSpacing: '0.28em', fontWeight: 600, marginBottom: 14 }}>EDUCATION</p>
            <h3 style={{ color: '#fff', fontWeight: 700, fontSize: 15, marginBottom: 6 }}>Zhongnan University of Economics and Law</h3>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13 }}>Bachelor of Management · Major in Accounting</p>
            <p style={{ color: 'rgba(255,255,255,0.26)', fontSize: 12, marginTop: 8 }}>2002 – 2006 · Wuhan, China</p>
          </div>

          <div className="glass" style={{ padding: 26 }}>
            <p style={{ color: BLUE, fontSize: 10.5, letterSpacing: '0.28em', fontWeight: 600, marginBottom: 20 }}>LANGUAGES</p>
            {[
              { lang: 'English', level: 'Fluent', pct: '90%', ac: BLUE, ac_fn: blue },
              { lang: 'Mandarin', level: 'Native', pct: '100%', ac: GOLD, ac_fn: gold },
            ].map(({ lang, level, pct, ac, ac_fn }) => (
              <div key={lang} style={{ marginBottom: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span style={{ color: '#fff', fontWeight: 600, fontSize: 14 }}>{lang}</span>
                  <span style={{ color: ac, fontSize: 12, fontWeight: 600 }}>{level}</span>
                </div>
                <div style={{ height: 2, background: 'rgba(255,255,255,0.06)', borderRadius: 2 }}>
                  <div style={{ width: pct, height: '100%', background: `linear-gradient(90deg, ${ac}, ${ac_fn(0.5)})`, borderRadius: 2 }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Footer ────────────────────────────────────────────────────────

function FooterSection() {
  return (
    <footer style={{ position: 'relative', zIndex: 1, padding: '40px 24px', borderTop: `1px solid ${gold(0.10)}` }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <div>
          <span style={{ fontWeight: 900, fontSize: 13, letterSpacing: '0.18em' }}>
            <span style={{ color: GOLD }}>BRAIN</span>
            <span style={{ color: '#fff' }}>SIGHT</span>
            <span style={{ color: BLUE }}>.PRO</span>
          </span>
          <p style={{ color: 'rgba(255,255,255,0.22)', fontSize: 12, marginTop: 5 }}>
            Connecting Finance Intelligence with Web3 Future
          </p>
        </div>
        <p style={{ color: 'rgba(255,255,255,0.18)', fontSize: 12 }}>
          © 2025 Bill Shu · CICPA · CFA · Hong Kong
        </p>
      </div>
    </footer>
  )
}

// ── App Root ──────────────────────────────────────────────────────

export default function App() {
  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh', color: '#fff' }}>
      <ParticleBackground />
      <NavBar />
      <HeroSection />
      <CoreStrengths />
      <ExperienceTimeline />
      <CredentialsSection />
      <FooterSection />
    </div>
  )
}
