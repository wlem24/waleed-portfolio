import { PROFILE } from '../data/site.js'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <p>© 2026 {PROFILE.name} · {PROFILE.role} · {PROFILE.location}</p>
        <div className="social-row">
          <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fa-brands fa-github"></i></a>
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
          <a href={PROFILE.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><i className="fa-brands fa-whatsapp"></i></a>
          <a href={`mailto:${PROFILE.email}`} aria-label="Email"><i className="fa-regular fa-envelope"></i></a>
        </div>
      </div>
    </footer>
  )
}
