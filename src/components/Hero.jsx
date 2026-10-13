import { PROFILE } from '../data/site.js'

const STATS = [
  { num: '3', sup: 'rd', label: 'Place · National AI Hackathon' },
  { num: '18', sup: '+', label: 'Months in live production' },
  { num: '9', sup: '', label: 'Certifications earned' },
  { num: '2', sup: '', label: 'AI platforms built' },
]

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="container hero-inner">
        <div>
          <div className="hero-tag"><span className="pulse"></span>Open to full-stack &amp; AI engineering roles · {PROFILE.location}</div>
          <h1>
            {PROFILE.name}
            <span className="h1-role">{PROFILE.role}</span>
          </h1>
          <p className="lede">
            I build AI-powered applications — RAG pipelines, semantic search and LLM integrations — and ship them
            as production-style FastAPI + React platforms. Before that, 18+ months keeping live IoT and telematics
            systems running at SaudiEx.
          </p>
          <div className="btn-row">
            <a href="#projects" className="btn btn-primary">
              <i className="fa-solid fa-arrow-down"></i>View my projects
            </a>
            <a href={PROFILE.cv} download className="btn btn-ghost">
              <i className="fa-regular fa-file-lines"></i>Download CV
            </a>
            <a href="#contact" className="btn btn-ghost">
              <i className="fa-regular fa-paper-plane"></i>Contact me
            </a>
          </div>
          <div className="social-row">
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fa-brands fa-github"></i></a>
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href={`mailto:${PROFILE.email}`} aria-label="Email"><i className="fa-regular fa-envelope"></i></a>
          </div>
        </div>
        <div className="hero-card glass">
          <div className="hero-photo" aria-hidden="true"><span className="monogram">WA</span></div>
          <div className="hero-stats">
            {STATS.map((s) => (
              <div className="stat" key={s.label}>
                <div className="num">{s.num}<span>{s.sup}</span></div>
                <div className="label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
