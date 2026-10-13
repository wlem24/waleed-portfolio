import { useState } from 'react'
import { PROFILE } from '../data/site.js'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || 'a visitor'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact">
      <div className="container">
        <div className="contact-wrap glass reveal">
          <div className="eyebrow" style={{ justifyContent: 'center' }}>Contact</div>
          <h2>Let’s build something together.</h2>
          <p>Open to full-stack and AI engineering roles. Based in {PROFILE.location} — happy to work on-site or remote.</p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" required autoComplete="name" value={form.name} onChange={handleChange} placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required autoComplete="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
            </div>
            <div className="full">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required value={form.message} onChange={handleChange} placeholder="What are you working on?"></textarea>
            </div>
            <div className="submit-row">
              <button type="submit" className="btn btn-primary">
                <i className="fa-regular fa-paper-plane"></i>Send message
              </button>
            </div>
          </form>

          <div className="contact-methods">
            <a href={`mailto:${PROFILE.email}`} className="btn btn-ghost"><i className="fa-regular fa-envelope"></i>{PROFILE.email}</a>
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost"><i className="fa-brands fa-linkedin-in"></i>LinkedIn</a>
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost"><i className="fa-brands fa-github"></i>GitHub</a>
          </div>
        </div>
      </div>
    </section>
  )
}
