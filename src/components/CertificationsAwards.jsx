const CERTS = [
  { icon: 'fa-solid fa-certificate', name: 'AI Engineering Certificate' },
  { icon: 'fa-solid fa-shield-halved', name: 'Cisco Ethical Hacker' },
  { icon: 'fa-brands fa-google', name: 'Google Cybersecurity Professional Certificate' },
  { icon: 'fa-brands fa-google', name: 'Google IT Support Professional Certificate' },
  { icon: 'fa-solid fa-server', name: 'IBM IT Support Professional Certificate' },
  { icon: 'fa-brands fa-google', name: 'Google Data Analytics Professional Certificate' },
  { icon: 'fa-brands fa-meta', name: 'Meta Front-End Developer Professional Certificate' },
  { icon: 'fa-solid fa-network-wired', name: 'CompTIA A+ (Preparation)' },
  { icon: 'fa-brands fa-python', name: 'Software Development using Python Bootcamp Certificate' },
]

const AWARDS = [
  { icon: 'fa-solid fa-star', title: 'Champion of the Week', sub: 'Saudi Digital Academy × WeCloudData Bootcamp' },
  { icon: 'fa-solid fa-medal', title: 'Hackathon — 3rd Place', sub: 'Haqooq AI, National AI Hackathon' },
  { icon: 'fa-solid fa-calendar-check', title: 'Perfect Attendance', sub: 'Bootcamp program' },
  { icon: 'fa-solid fa-people-group', title: 'Strong Team Contribution', sub: 'Recognized by peers and instructors' },
]

export default function CertificationsAwards() {
  return (
    <section id="certifications">
      <div className="container">
        <div className="two-col">
          <div>
            <div className="eyebrow">Certifications</div>
            <h2 className="section-title">Continuous Learning</h2>
            <p className="section-lead">Nine professional certifications spanning AI engineering, cloud, security, data, and front-end development.</p>
            <div className="cert-grid">
              {CERTS.map((c) => (
                <div className="cert-card glass reveal" key={c.name}>
                  <i className={c.icon}></i>
                  <span>{c.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="eyebrow">Awards</div>
            <h2 className="section-title" style={{ fontSize: '1.6rem' }}>Recognition</h2>
            <div className="award-list">
              {AWARDS.map((a) => (
                <div className="award-item glass reveal" key={a.title}>
                  <div className="icon"><i className={a.icon}></i></div>
                  <div>
                    <h4>{a.title}</h4>
                    <p>{a.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
