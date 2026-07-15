export default function Education() {
  return (
    <section id="education" style={{ background: 'var(--surface)' }}>
      <div className="container">
        <div className="eyebrow">Education</div>
        <h2 className="section-title">Education &amp; Training</h2>

        <div className="edu-item glass reveal">
          <div className="tl-head">
            <h3>Software Development Bootcamp (Python)</h3>
            <span className="tl-date">2026 · 7 weeks</span>
          </div>
          <p style={{ color: 'var(--blue)', fontSize: '.88rem', marginTop: '-4px' }}>Saudi Digital Academy × WeCloudData</p>
          <p>Covered backend, frontend, and full-stack engineering, software architecture, Agile/Scrum, Git workflows, Docker, and CI/CD fundamentals. Awarded "Champion of the Week" for outstanding participation and team contribution.</p>
        </div>

        <div className="edu-item glass reveal">
          <div className="tl-head">
            <h3>Diploma, Computer Programming and Web Development</h3>
            <span className="tl-date">Nov 2023</span>
          </div>
          <p style={{ color: 'var(--blue)', fontSize: '.88rem', marginTop: '-4px' }}>College of Communications and Information, Riyadh</p>
        </div>
      </div>
    </section>
  )
}
