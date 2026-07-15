export default function Projects() {
  return (
    <section id="projects" style={{ background: 'var(--surface)' }}>
      <div className="container">
        <div className="eyebrow">Featured Projects</div>
        <h2 className="section-title">Selected Work</h2>
        <p className="section-lead">Three platforms, each pairing a real backend and a working AI integration — not just a UI mockup.</p>

        <div className="project glass reveal">
          <div className="project-head">
            <h3>RFPilot</h3>
            <span className="project-badge">In progress · Bootcamp Graduation Project</span>
          </div>
          <p className="project-sub">An AI-driven RFP management platform that automates the request-for-proposal lifecycle — upload, AI analysis, bid/no-bid decisioning, and team collaboration.</p>
          <div className="project-body">
            <div className="pb-block">
              <h5>Business Problem</h5>
              <p>Reviewing RFPs is slow and manual — teams re-read lengthy documents to decide whether to bid, then re-search past proposals for relevant language. That process doesn't scale as volume grows.</p>
            </div>
            <div className="pb-block">
              <h5>Solution</h5>
              <p>A full-stack platform where uploading a PDF triggers an AI pipeline: text extraction, chunked embeddings for semantic search, and a structured GPT extraction pass that populates requirements, evaluation criteria, deadlines, and bid-fit scores automatically.</p>
            </div>
            <div className="pb-block">
              <h5>Architecture</h5>
              <ul>
                <li>Dual vector-store design: pgvector (<code>document_chunks</code>, HNSW-indexed) alongside PostgreSQL as the authoritative store — 20 SQLAlchemy models across users, RFPs, AI analysis, workflow, and drafting.</li>
                <li>OpenAI GPT-4o for chat/tool-calling, GPT-3.5-turbo for structured extraction, <code>text-embedding-ada-002</code> for 1536-dim vectors.</li>
                <li>11 Alembic migrations tracking schema evolution from core tables through RAG, collaboration, and draft-generation features.</li>
              </ul>
            </div>
            <div className="pb-block">
              <h5>Key Features</h5>
              <ul>
                <li>Live dashboard: KPI cards, pipeline-value trends, and win-rate tracking computed from real status transitions.</li>
                <li>AI chatbot with OpenAI tool-calling (3 tools: RFP count, filtered listing, pgvector semantic search) instead of a single-document RAG shortcut.</li>
                <li>Role-based team invitations with token-based email onboarding and admin-only management routes.</li>
                <li>Approval workflow that auto-advances RFP status once every step is signed off, with notifications dispatched automatically.</li>
              </ul>
            </div>
            <div className="pb-block">
              <h5>Responsibilities</h5>
              <p>Sole architect and developer — schema design, RAG pipeline, FastAPI + Node/Express API layer, React/Next.js frontend, Alembic migrations, and documentation.</p>
            </div>
            <div className="pb-block">
              <h5>Challenges Solved</h5>
              <p>An early version truncated the AI extraction prompt at 5,000 characters, silently dropping legal/commercial sections that appear later in most RFPs — fixed by extending to 15,000 characters with explicit category definitions. Also diagnosed a "0% win rate" bug that turned out to be a missing UI affordance, not a backend formula error — added the outcome controls needed to set it.</p>
            </div>
          </div>
          <div className="project-stack tag-list">
            {['FastAPI', 'React 18 + Vite', 'React Router', 'Node.js / Express', 'PostgreSQL + pgvector', 'SQLAlchemy 2.0', 'Alembic', 'JWT + bcrypt', 'OpenAI GPT-4o', 'Docker'].map((t) => (
              <span className="tag" key={t}>{t}</span>
            ))}
          </div>
          <div className="project-links">
            <a href="https://github.com/wlem24/project-RF-Pilot" target="_blank" rel="noopener">
              <i className="fa-brands fa-github"></i>github.com/wlem24/project-RF-Pilot
            </a>
          </div>
        </div>

        <div className="project glass reveal">
          <div className="project-head">
            <h3>Haqooq AI <span style={{ color: 'var(--text-dim)', fontWeight: 400, fontSize: '1rem' }}>— Ruya Tech</span></h3>
            <span className="project-badge">🏆 3rd Place · National AI Hackathon</span>
          </div>
          <p className="project-sub">A RAG-based legal assistant that turns Saudi Labor Law into plain-language, actionable answers for employees and HR teams.</p>
          <div className="project-body">
            <div className="pb-block">
              <h5>Business Problem</h5>
              <p>Employees and HR teams routinely need to interpret dense labor-law text, contracts, and leave/benefit policy — usually without legal training and under time pressure.</p>
            </div>
            <div className="pb-block">
              <h5>Solution</h5>
              <p>Co-built with a team under hackathon time constraints: a RAG pipeline over a PostgreSQL vector database retrieves relevant statutes and policy clauses, then an LLM generates plain-language answers grounded in that retrieved text.</p>
            </div>
            <div className="pb-block">
              <h5>Features</h5>
              <ul>
                <li>Saudi Labor Law Q&amp;A assistant grounded in retrieved source text.</li>
                <li>HR assistant for interpreting internal policy and benefits questions.</li>
                <li>An AI contract-negotiation assistant to improve transparency between employees and HR.</li>
              </ul>
            </div>
            <div className="pb-block">
              <h5>Responsibilities</h5>
              <p>Contributed to the RAG pipeline and backend, and to the semantic search layer connecting legal source documents to the LLM-facing assistant.</p>
            </div>
          </div>
          <div className="project-stack tag-list">
            {['Python', 'FastAPI', 'React', 'PostgreSQL Vector DB', 'Semantic Search', 'LLM Integration'].map((t) => (
              <span className="tag" key={t}>{t}</span>
            ))}
          </div>
        </div>

        <div className="project glass reveal">
          <div className="project-head">
            <h3>AI Resume Evaluator</h3>
            <span className="project-badge">FastAPI + React Starter</span>
          </div>
          <p className="project-sub">A full-stack auth starter extended with an AI resume-evaluation feature — upload a PDF resume and a job description, get a structured match assessment back.</p>
          <div className="project-body">
            <div className="pb-block">
              <h5>Solution</h5>
              <p>JWT-authenticated FastAPI backend (SQLAlchemy + SQLite) paired with a React/Vite frontend. The evaluator route extracts resume text with <code>pypdf</code>, sends it with the job description to the OpenAI API, and returns a six-section structured evaluation.</p>
            </div>
            <div className="pb-block">
              <h5>Features</h5>
              <ul>
                <li>Register/login/logout with bcrypt-hashed passwords and JWT tokens; Axios interceptor auto-logs-out on 401.</li>
                <li>AI evaluation output: match score, strengths, skill gaps, missing requirements, hire/maybe/pass recommendation, interview readiness.</li>
                <li>Defensive error handling for corrupted PDFs, image-only PDFs, and missing API keys — distinct HTTP codes per failure mode.</li>
              </ul>
            </div>
            <div className="pb-block">
              <h5>Quality</h5>
              <p>Ships with a smoke-test suite — the project's own test run reports 48/48 passing.</p>
            </div>
          </div>
          <div className="project-stack tag-list">
            {['FastAPI', 'React 18 + Vite', 'SQLAlchemy', 'JWT + bcrypt', 'OpenAI API', 'pypdf'].map((t) => (
              <span className="tag" key={t}>{t}</span>
            ))}
          </div>
          <div className="project-links">
            <a href="https://github.com/wlem24/resume" target="_blank" rel="noopener">
              <i className="fa-brands fa-github"></i>github.com/wlem24/resume
            </a>
          </div>
        </div>

        <div className="mini-projects">
          <div className="mini-card glass reveal">
            <h4><i className="fa-solid fa-utensils"></i>Little Lemon — Booking UI</h4>
            <p>Table-reservation interface built in vanilla HTML, CSS, and JavaScript, from the Meta Front-End Developer coursework.</p>
          </div>
          <div className="mini-card glass reveal">
            <h4><i className="fa-brands fa-python"></i>Little Lemon — REST API</h4>
            <p>Django REST Framework backend (serializers, views, routing) built alongside the booking UI as the matching Meta coursework backend.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
