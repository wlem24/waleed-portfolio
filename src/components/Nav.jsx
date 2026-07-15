import { useEffect, useState } from 'react'

const LINKS = [
  ['about', 'About'],
  ['skills', 'Skills'],
  ['experience', 'Experience'],
  ['projects', 'Projects'],
  ['github', 'GitHub'],
  ['certifications', 'Certifications'],
  ['education', 'Education'],
  ['contact', 'Contact'],
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="container">
        <a href="#top" className="logo">
          <span className="dot"></span>Waleed Albarakati
        </a>
        <ul className={`nav-links${open ? ' open' : ''}`}>
          {LINKS.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="nav-cta">Let's talk</a>
        <button className="nav-toggle" aria-label="Toggle menu" onClick={() => setOpen((o) => !o)}>
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
    </nav>
  )
}
