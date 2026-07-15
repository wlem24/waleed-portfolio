import VectorField from './VectorField.jsx'

export default function Hero() {
  return (
    <header className="hero" id="top">
      <VectorField />
      <div className="container hero-inner">
        <div>
          <div className="hero-tag"><span className="pulse"></span>Available for full-stack &amp; AI engineering roles</div>
          <h1>Building software that <span>retrieves, reasons,</span> and ships.</h1>
          <p className="lede">
            Full-stack software engineer based in Riyadh, Saudi Arabia, focused on AI-powered applications —
            from RAG pipelines and semantic search to the FastAPI + React platforms that put them in front of real users.
          </p>
          <div className="btn-row">
            <a href={`${import.meta.env.BASE_URL}Waleed_Albarakati_CV.pdf`} download className="btn btn-primary">
              <i className="fa-solid fa-arrow-down"></i>Download CV
            </a>
            <a href="#contact" className="btn btn-ghost">
              <i className="fa-regular fa-paper-plane"></i>Get in touch
            </a>
          </div>
          <div className="social-row">
            <a href="https://github.com/wlem24" target="_blank" rel="noopener" aria-label="GitHub"><i className="fa-brands fa-github"></i></a>
            <a href="https://linkedin.com/in/waleed-albarakati" target="_blank" rel="noopener" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="mailto:albrkati9@gmail.com" aria-label="Email"><i className="fa-regular fa-envelope"></i></a>
          </div>
        </div>
        <div className="hero-card glass">
          <div className="hero-photo"><i className="fa-solid fa-user"></i></div>
          <div className="hero-stats">
            <div className="stat"><div className="num">3<span>rd</span></div><div className="label">Hackathon Place</div></div>
            <div className="stat"><div className="num">18<span>+</span></div><div className="label">Months in Production</div></div>
            <div className="stat"><div className="num"><span>9</span></div><div className="label">Certifications</div></div>
            <div className="stat"><div className="num"><span>2</span></div><div className="label">AI Platforms Built</div></div>
          </div>
        </div>
      </div>
    </header>
  )
}
