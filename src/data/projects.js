// Case studies. Set `links.live` / `links.github` to a URL to turn a placeholder into a real link.
export const CASE_STUDIES = [
  {
    name: 'RFPilot',
    subtitle: 'AI-Powered RFP Management Platform',
    badge: 'Bootcamp Graduation Project · 2026',
    problem:
      'Reviewing RFPs is slow and manual: teams re-read long documents to decide whether to bid, then hunt through past proposals for reusable language. The process does not scale as RFP volume grows.',
    role:
      'Full-stack contributor in a 4-person team. Built the FastAPI backend and the pgvector / ChromaDB RAG pipeline, owned frontend–backend integration, and set up the GCP infrastructure.',
    solution:
      'Uploading an RFP triggers an AI pipeline: text extraction, chunked embeddings for semantic search, and structured LLM extraction of requirements, deadlines and bid-fit signals — surfaced in a dashboard with an AI chatbot and an approval workflow.',
    challenge:
      'Integration bugs only surfaced once the layers met: a win rate stuck at 0%, wrong chatbot counts and empty requirement extraction. Each was traced to its root cause across the API, data and UI layers — the 0% win rate, for example, was a missing UI control for recording outcomes, not a faulty formula.',
    stack: ['FastAPI', 'React', 'PostgreSQL + pgvector', 'ChromaDB', 'RAG pipeline', 'JWT auth', 'Docker', 'CI/CD', 'GCP'],
    links: { live: null, github: 'https://github.com/wlem24/project-RF-Pilot' },
  },
  {
    name: 'Ruya Tech — AI Legal Assistant',
    subtitle: 'Haqooq AI',
    badge: '3rd Place · National AI Hackathon, 2026',
    problem:
      'Employees and HR teams routinely have to interpret dense Saudi Labor Law text, contracts, and leave or benefit policies — usually without legal training and under time pressure.',
    role:
      'Co-built the platform as part of a team under hackathon time limits. Contributed to the RAG pipeline, the backend, and the semantic-search layer that connects legal source documents to the LLM assistant.',
    solution:
      'A RAG-based assistant retrieves the relevant statutes and policy clauses from a PostgreSQL vector database, then generates plain-language answers grounded in that text. It includes an AI contract-negotiation assistant that improves transparency between employees and HR.',
    challenge: null,
    stack: ['Python', 'FastAPI', 'React', 'PostgreSQL vector DB', 'Semantic search', 'LLM integration'],
    links: { live: null, github: null },
  },
  {
    name: 'Dallah Hospital IoT Project',
    subtitle: 'Infant Safety & Tracking System · SaudiEx',
    badge: 'Aug 2024 – Feb 2026',
    problem:
      'A hospital-grade infant safety and tracking system needs dependable real-time monitoring across roughly 300 connected devices, including tracking bracelets — where a stale or missing device state is not an option.',
    role:
      'Joined mid-project (a ~2-year build) as IoT Developer: developed and tested real-time monitoring and device-integration features. Then, as Solutions Support Specialist, supported final delivery — keeping devices reliable and resolving on-site issues with the hospital IT department.',
    solution:
      'Real-time monitoring and device-integration features for the connected devices, backed by structured root-cause analysis of recurring faults during rollout and after go-live.',
    challenge:
      'Keeping ~300 devices dependable in a live hospital. Close coordination with the hospital IT team and systematic fault analysis contributed to an overall ~80% reduction in fault and incident rates across the project lifecycle.',
    stack: ['IoT platform', 'Device integration', 'Real-time monitoring', 'Telematics', 'Incident management', 'Root-cause analysis'],
    links: { live: null, github: null },
  },
]

export const MORE_WORK = [
  {
    icon: 'fa-solid fa-file-circle-check',
    title: 'AI Resume Evaluator',
    text: 'FastAPI + React app with JWT auth that extracts a PDF resume and returns a structured, AI-generated match assessment against a job description.',
    href: 'https://github.com/wlem24/resume',
  },
  {
    icon: 'fa-solid fa-mobile-screen',
    title: 'AI-Powered Tourism App',
    text: 'Junior developer on a Flutter/Dart mobile app: backend work in Python, FastAPI and Django, and integration of AI agents.',
    href: null,
  },
  {
    icon: 'fa-brands fa-meta',
    title: 'Little Lemon — Booking UI & API',
    text: 'Table-reservation UI (HTML/CSS/JS) with a Django REST Framework backend, built during the Meta Front-End coursework.',
    href: 'https://github.com/wlem24/app-littel-lemon',
  },
]
