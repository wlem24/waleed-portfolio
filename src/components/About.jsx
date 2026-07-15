const PILLARS = [
  { icon: 'fa-solid fa-diagram-project', title: 'Full-Stack Delivery', text: 'FastAPI and Node/Express backends, React/Next.js frontends, shipped as complete features — not isolated services.' },
  { icon: 'fa-solid fa-brain', title: 'AI-Native Thinking', text: 'RAG pipelines, pgvector and ChromaDB, prompt engineering — treated as core architecture, not a bolt-on.' },
  { icon: 'fa-solid fa-magnifying-glass-chart', title: 'Root-Cause Problem Solving', text: 'A support background that trained him to diagnose systems under real load, not just in a sandbox.' },
  { icon: 'fa-solid fa-arrow-trend-up', title: 'Continuous Learning', text: 'Nine professional certifications across cloud, security, data, and AI engineering — and counting.' },
]

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="eyebrow">About</div>
        <h2 className="section-title">From keeping systems running<br />to building the ones that reason.</h2>
        <div className="about-grid">
          <div className="reveal">
            <p>Waleed's path into software engineering started on the support side — <strong>18+ months inside a live IoT and telematics platform</strong>, resolving production incidents and translating messy real-world issues into fixes engineering teams could act on. That environment taught him what "production-ready" actually means before he ever shipped a line of it himself.</p>
            <p>He has since moved fully into building: a <strong>Software Development Bootcamp</strong> with Saudi Digital Academy × WeCloudData sharpened his full-stack fundamentals, and a growing focus on <strong>Retrieval-Augmented Generation, vector search, and LLM integration</strong> now anchors his work. Placing 3rd nationally with Haqooq AI — a legal-tech RAG assistant — confirmed that AI application development is where he wants to spend his career.</p>
            <p>He's currently building <strong>RFPilot</strong>, a full end-to-end platform that pairs FastAPI and React with a dual vector-store architecture, applying the same discipline for root-cause thinking and system reliability he built in production support.</p>
          </div>
          <div className="pillars reveal">
            {PILLARS.map((p) => (
              <div className="pillar" key={p.title}>
                <i className={p.icon}></i>
                <div>
                  <h4>{p.title}</h4>
                  <p>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
