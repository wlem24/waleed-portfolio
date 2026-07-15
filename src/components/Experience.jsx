const ROLES = [
  {
    title: 'Solutions Support Specialist',
    company: 'SaudiEx',
    date: 'Jan 2025 – Jan 2026',
    points: [
      'Supported live IoT and telematics platforms serving enterprise clients, monitoring performance and resolving production incidents in real time.',
      'Led system integration and cross-platform troubleshooting efforts, cutting down recurring issue tickets through structured root-cause analysis.',
      'Served as the technical point of contact between customers and engineering teams, translating field-reported issues into actionable engineering fixes.',
    ],
  },
  {
    title: 'IoT Developer',
    company: 'SaudiEx',
    date: 'Aug 2024 – Jan 2025',
    points: [
      'Developed and supported IoT solutions for a hospital-grade infant safety and tracking system (Dallah Hospital Project).',
      'Built and tested real-time monitoring and device-integration features that improved overall system reliability.',
      'Collaborated with cross-functional teams on debugging and performance optimization for connected devices.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="eyebrow">Experience</div>
        <h2 className="section-title">Professional Experience</h2>
        <p className="section-lead">Two roles at SaudiEx, tracing a shift from building IoT devices to supporting them in production at scale.</p>
        <div className="timeline">
          {ROLES.map((r) => (
            <div className="tl-item reveal" key={r.title}>
              <div className="tl-head">
                <h3>{r.title} <span className="role-co">· {r.company}</span></h3>
                <span className="tl-date">{r.date}</span>
              </div>
              <ul>
                {r.points.map((p, i) => <li key={i}>{p}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
