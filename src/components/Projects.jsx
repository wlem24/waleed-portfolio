import { CASE_STUDIES, MORE_WORK } from '../data/projects.js'
import { PROFILE } from '../data/site.js'

function LinkChip({ href, icon, label }) {
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="link-chip">
        <i className={icon}></i>{label}
      </a>
    )
  }
  return (
    <span className="link-chip is-placeholder" title="Link coming soon">
      <i className={icon}></i>{label} · coming soon
    </span>
  )
}

function CaseStudy({ p, index }) {
  return (
    <article className="project reveal">
      <div className="project-head">
        <div>
          <div className="cs-index">{String(index + 1).padStart(2, '0')}</div>
          <h3>{p.name}</h3>
          <p className="project-sub">{p.subtitle}</p>
        </div>
        <span className="project-badge">{p.badge}</span>
      </div>
      <div className="project-body">
        <div className="pb-block">
          <h4>The Problem</h4>
          <p>{p.problem}</p>
        </div>
        <div className="pb-block">
          <h4>My Role</h4>
          <p>{p.role}</p>
        </div>
        <div className="pb-block">
          <h4>The Solution</h4>
          <p>{p.solution}</p>
        </div>
        {p.challenge && (
          <div className="pb-block">
            <h4>Challenge &amp; Result</h4>
            <p>{p.challenge}</p>
          </div>
        )}
      </div>
      <div className="project-stack tag-list" aria-label="Tech stack">
        {p.stack.map((t) => <span className="tag" key={t}>{t}</span>)}
      </div>
      <div className="project-links">
        <LinkChip href={p.links.live} icon="fa-solid fa-arrow-up-right-from-square" label="Live demo" />
        <LinkChip href={p.links.github} icon="fa-brands fa-github" label="GitHub" />
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-lead">Three case studies: the problem, my part in it, and the result.</p>

        {CASE_STUDIES.map((p, i) => <CaseStudy p={p} index={i} key={p.name} />)}

        <h3 className="subhead">More work</h3>
        <div className="mini-projects">
          {MORE_WORK.map((m) => (
            <div className="mini-card reveal" key={m.title}>
              <h4><i className={m.icon}></i>{m.title}</h4>
              <p>{m.text}</p>
              {m.href && (
                <a href={m.href} target="_blank" rel="noopener noreferrer" className="mini-link">
                  <i className="fa-brands fa-github"></i>View on GitHub
                </a>
              )}
            </div>
          ))}
        </div>
        <div className="gh-cta">
          <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            <i className="fa-brands fa-github"></i>All repositories on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
