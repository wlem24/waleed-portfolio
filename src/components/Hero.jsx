import { PROFILE } from '../data/site.js'

const WIDGETS = [
  { value: '3rd', label: 'National AI Hackathon', sub: 'Haqooq AI, 2026' },
  { value: '18+', label: 'Months on live IoT platforms', sub: 'SaudiEx' },
  { value: '9', label: 'Certifications earned', sub: 'Cloud, AI, security, data' },
  { value: '2', label: 'AI platforms built', sub: 'RFPilot · Haqooq AI' },
]

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="container hero-inner">
        <div className="hero-copy">
          <h1>
            {PROFILE.name}
            <span className="h1-role">{PROFILE.role}</span>
          </h1>
          <p className="lede">
            I build AI-powered applications: RAG pipelines, semantic search and LLM integrations, delivered as
            FastAPI and React platforms. Before that, I spent 18+ months supporting live IoT and telematics
            systems at SaudiEx.
          </p>
          <div className="btn-row">
            <a href="#projects" className="btn btn-primary">View projects</a>
            <a href={PROFILE.cv} download className="btn btn-glass">
              <i className="fa-regular fa-file-lines"></i>Download CV
            </a>
            <a href="#contact" className="btn btn-glass">Contact</a>
          </div>
          <div className="social-row">
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fa-brands fa-github"></i></a>
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href={`mailto:${PROFILE.email}`} aria-label="Email"><i className="fa-regular fa-envelope"></i></a>
          </div>
        </div>
        <div className="widgets">
          <div className="widget wide">
            <span className="status-dot" aria-hidden="true"></span>
            <div>
              <div className="w-title">Open to roles</div>
              <div className="w-sub">Full-stack &amp; AI engineering · {PROFILE.location}</div>
            </div>
          </div>
          {WIDGETS.map((w) => (
            <div className="widget" key={w.label}>
              <div className="w-value">{w.value}</div>
              <div className="w-label">{w.label}</div>
              <div className="w-sub">{w.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}
