import { FEATURED_CERTS, OTHER_CERTS, EDUCATION } from '../data/certifications.js'

export default function Certifications() {
  return (
    <section id="certifications" className="alt">
      <div className="container">
        <h2 className="section-title">Certifications</h2>

        <div className="cert-featured">
          {FEATURED_CERTS.map((c) => (
            <div className="cert-hero reveal" key={c.title}>
              <div className="icon"><i className={c.icon}></i></div>
              <div className="cert-issuer">{c.issuer}</div>
              <h3>{c.title}</h3>
              <div className="cert-meta">{c.meta}</div>
              <p>{c.text}</p>
            </div>
          ))}
        </div>

        <div className="cert-grid">
          {OTHER_CERTS.map((c) => (
            <div className="cert-card reveal" key={`${c.issuer}-${c.name}`}>
              <i className={c.icon}></i>
              <div>
                <span>{c.name}</span>
                <small>{c.issuer}</small>
              </div>
            </div>
          ))}
        </div>

        <h3 className="subhead">Education &amp; training</h3>
        <div className="edu-list">
          {EDUCATION.map((e) => (
            <div className="edu-item reveal" key={e.title}>
              <div className="tl-head">
                <h4>{e.title}</h4>
                <span className="tl-date">{e.date}</span>
              </div>
              <p className="edu-org">{e.org}</p>
              {e.text && <p>{e.text}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
