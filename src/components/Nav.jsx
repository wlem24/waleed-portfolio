import { useEffect, useState } from 'react'

import { PROFILE, NAV_LINKS } from '../data/site.js'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight - 140)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="container">
        <a href="#top" className="logo">
          <span className="dot"></span>{PROFILE.name}
        </a>
        <ul className={`nav-links${open ? ' open' : ''}`}>
          {NAV_LINKS.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="nav-cta">Contact</a>
        <button className="nav-toggle" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
          <i className="fa-solid fa-bars" aria-hidden="true" data-on={!open}></i>
          <i className="fa-solid fa-xmark" aria-hidden="true" data-on={open}></i>
        </button>
      </div>
    </nav>
  )
}
