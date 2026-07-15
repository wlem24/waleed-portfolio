const CATEGORIES = [
  { icon: 'fa-solid fa-code', title: 'Programming', tags: ['Python', 'JavaScript', 'SQL', 'HTML', 'CSS'] },
  { icon: 'fa-solid fa-server', title: 'Backend', tags: ['FastAPI', 'Django REST Framework', 'REST APIs', 'JWT Auth', 'SQLAlchemy'] },
  { icon: 'fa-brands fa-react', title: 'Frontend', tags: ['React', 'Next.js', 'Vite', 'React Router', 'Responsive Design'] },
  { icon: 'fa-solid fa-database', title: 'Databases', tags: ['PostgreSQL', 'SQLite', 'pgvector', 'ChromaDB', 'Alembic'] },
  { icon: 'fa-solid fa-wand-magic-sparkles', title: 'Artificial Intelligence', tags: ['RAG', 'OpenAI API', 'Semantic Search', 'Prompt Engineering', 'Tool Calling'] },
  { icon: 'fa-brands fa-git-alt', title: 'DevOps & Tooling', tags: ['Docker', 'CI/CD', 'Git', 'GitHub'] },
  { icon: 'fa-solid fa-people-group', title: 'Methodologies', tags: ['Agile', 'Scrum', 'Code Review'] },
  { icon: 'fa-solid fa-microchip', title: 'IoT & Systems', tags: ['Telematics', 'Device Integration', 'Incident Management'] },
  { icon: 'fa-solid fa-comments', title: 'Professional Skills', tags: ['Client Communication', 'SLA Management', 'Cross-team Collaboration'] },
]

export default function Skills() {
  return (
    <section id="skills" style={{ background: 'var(--surface)' }}>
      <div className="container">
        <div className="eyebrow">Technical Skills</div>
        <h2 className="section-title">A stack built for AI-powered products.</h2>
        <p className="section-lead">Grounded in full-stack fundamentals, extended into the retrieval and reasoning layer.</p>
        <div className="skills-grid">
          {CATEGORIES.map((c) => (
            <div className="skill-card glass reveal" key={c.title}>
              <div className="icon"><i className={c.icon}></i></div>
              <h4>{c.title}</h4>
              <div className="tag-list">
                {c.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
