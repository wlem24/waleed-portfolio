const STEPS = [
  { icon: 'fa-solid fa-lightbulb', title: 'Planning', text: 'Scope the problem, define architecture and data flow before writing code.' },
  { icon: 'fa-brands fa-git-alt', title: 'Git', text: 'Feature branches, focused commits, pull requests for review.' },
  { icon: 'fa-solid fa-code', title: 'Development', text: 'Build iteratively, backend and frontend in parallel where possible.' },
  { icon: 'fa-solid fa-vial', title: 'Testing', text: 'Validate against real scenarios drawn from a production-support mindset.' },
  { icon: 'fa-solid fa-rocket', title: 'Deployment', text: 'Docker-based, CI/CD-aware, documented for the next person.' },
  { icon: 'fa-solid fa-arrows-spin', title: 'Improvement', text: 'Monitor, gather feedback, and iterate — the loop never really closes.' },
]

export default function Process() {
  return (
    <section id="process">
      <div className="container">
        <div className="eyebrow">Workflow</div>
        <h2 className="section-title">My Development Process</h2>
        <p className="section-lead">A consistent loop, whether it's a support incident or a new feature in RFPilot.</p>
        <div className="process-row">
          {STEPS.map((s) => (
            <div className="process-step glass reveal" key={s.title}>
              <i className={s.icon}></i>
              <h4>{s.title}</h4>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
