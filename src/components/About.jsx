const PILLARS = [
  { icon: 'fa-solid fa-diagram-project', title: 'Full-Stack Delivery', text: 'FastAPI, React and PostgreSQL shipped as complete features — API, UI, data layer and CI/CD together.' },
  { icon: 'fa-solid fa-brain', title: 'AI Application Engineering', text: 'RAG pipelines, pgvector / ChromaDB, semantic search and prompt engineering treated as core architecture.' },
  { icon: 'fa-solid fa-magnifying-glass-chart', title: 'Root-Cause Problem Solving', text: 'Diagnosing live incidents across vehicle and platform systems — resolving them independently or coordinating with platform teams.' },
  { icon: 'fa-solid fa-stopwatch', title: 'SLA Management', text: 'A ~1-hour resolution target, ~15 tickets closed daily and 50%+ resolved the same day.' },
]

const JOURNEY = [
  {
    title: 'Solutions Support Specialist',
    org: 'SaudiEx',
    date: 'Feb 2025 – Feb 2026',
    points: [
      'Resolved platform and vehicle incidents for ~15 client companies weekly.',
      'Closed ~15 tickets a day, with 50%+ resolved the same day.',
      'Supported the Dallah Hospital IoT project through final delivery.',
    ],
  },
  {
    title: 'IoT Developer',
    org: 'SaudiEx',
    date: 'Aug 2024 – Feb 2025',
    points: [
      'Built and tested real-time monitoring and device-integration features for ~300 connected devices.',
      'Debugged and tuned performance with cross-functional teams.',
    ],
  },
]

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">About</h2>
        <div className="about-grid">
          <div className="reveal">
            <p className="lead-p">My engineering path began on the operations side. For <strong>18+ months at SaudiEx</strong> I worked inside live IoT and telematics platforms — first as an IoT Developer on the Dallah Hospital infant-safety project, then as a Solutions Support Specialist resolving incidents for around 15 client companies a week. That taught me what “production-ready” really means: reproducible diagnosis, clear escalation, and fixes that hold up under load.</p>
            <p>The same <strong>SLA discipline</strong> now shapes how I design, test and document software. I moved fully into building through Tuwaiq Academy’s Professional Cloud Software Development program (Google Cloud, GKE, CI/CD, IAM) and a Python bootcamp with Saudi Digital Academy × WeCloudData, where I was named <strong>Champion of the Week</strong>.</p>
            <p>Today I focus on <strong>AI-powered applications</strong>: I built RFPilot with a team of four, and co-built Haqooq AI, a legal-tech RAG assistant that placed <strong>3rd in a national AI hackathon</strong>.</p>

            <h3 className="subhead">Experience</h3>
            <div className="timeline">
              {JOURNEY.map((r) => (
                <div className="tl-item" key={r.title}>
                  <div className="tl-head">
                    <h4>{r.title} <span className="role-co">· {r.org}</span></h4>
                    <span className="tl-date">{r.date}</span>
                  </div>
                  <ul>
                    {r.points.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                </div>
              ))}
            </div>
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
