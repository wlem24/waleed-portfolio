import { SKILL_GROUPS, SYSTEMS_SUPPORT } from '../data/skills.js'

export default function TechStack() {
  return (
    <section id="tech-stack" className="alt">
      <div className="container">
        <div className="eyebrow">Tech Stack</div>
        <h2 className="section-title">A stack built for AI-powered products.</h2>
        <p className="section-lead">Full-stack fundamentals, extended into the retrieval and reasoning layer.</p>
        <div className="skills-grid">
          {SKILL_GROUPS.map((g) => (
            <div className="skill-card glass reveal" key={g.title}>
              <div className="icon"><i className={g.icon}></i></div>
              <h3>{g.title}</h3>
              <div className="tag-list">
                {g.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
        <p className="systems-line reveal">
          <span>Also</span>
          {SYSTEMS_SUPPORT.join(' · ')}
        </p>
      </div>
    </section>
  )
}
