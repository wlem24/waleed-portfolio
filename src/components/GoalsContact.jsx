import { useState } from 'react'

export function Goals() {
  return (
    <section id="goals">
      <div className="container">
        <div className="goals-wrap glass reveal">
          <div className="eyebrow" style={{ justifyContent: 'center' }}>Career Goals</div>
          <blockquote>
            To keep building AI-powered products at the intersection of{' '}
            <span>retrieval, reasoning, and real-world usability</span> — joining a team where
            production-grade engineering and applied AI meet, and growing into a full-stack AI engineer
            who ships systems people actually rely on.
          </blockquote>
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || 'a visitor'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:albrkati9@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" style={{ background: 'var(--surface)' }}>
      <div className="container">
        <div className="contact-wrap glass reveal">
          <div className="eyebrow" style={{ justifyContent: 'center' }}>Contact</div>
          <h2>Let's build something together.</h2>
          <p>Open to full-stack and AI engineering opportunities. Based in Riyadh, Saudi Arabia — happy to work remote or on-site.</p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@example.com" />
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
            <a href="mailto:albrkati9@gmail.com" className="btn btn-ghost"><i className="fa-regular fa-envelope"></i>albrkati9@gmail.com</a>
            <a href="tel:+966597055755" className="btn btn-ghost"><i className="fa-solid fa-phone"></i>+966 59 705 5755</a>
            <a href="https://linkedin.com/in/waleed-albarakati" target="_blank" rel="noopener" className="btn btn-ghost"><i className="fa-brands fa-linkedin-in"></i>LinkedIn</a>
            <a href="https://github.com/wlem24" target="_blank" rel="noopener" className="btn btn-ghost"><i className="fa-brands fa-github"></i>GitHub</a>
          </div>
        </div>
      </div>
    </section>
  )
}
