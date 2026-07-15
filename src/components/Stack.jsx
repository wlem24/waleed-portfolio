const TECH = [
  ['fa-brands fa-python', 'Python'],
  ['fa-brands fa-js', 'JavaScript'],
  ['fa-solid fa-bolt', 'FastAPI'],
  ['fa-brands fa-react', 'React'],
  ['fa-brands fa-node-js', 'Node.js'],
  ['fa-solid fa-database', 'PostgreSQL'],
  ['fa-solid fa-vector-square', 'pgvector'],
  ['fa-solid fa-circle-nodes', 'ChromaDB'],
  ['fa-brands fa-docker', 'Docker'],
  ['fa-brands fa-github', 'GitHub'],
  ['fa-solid fa-diagram-project', 'CI/CD'],
  ['fa-solid fa-wand-magic-sparkles', 'RAG / LLM'],
]

export default function Stack() {
  return (
    <section id="stack" style={{ background: 'var(--surface)' }}>
      <div className="container">
        <div className="eyebrow">Tech Stack</div>
        <h2 className="section-title">Tools of the Trade</h2>
        <div className="stack-grid">
          {TECH.map(([icon, name]) => (
            <div className="stack-item glass reveal" key={name}>
              <i className={icon}></i>
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
