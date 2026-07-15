import { useEffect, useState } from 'react'

// Verified against https://github.com/wlem24 — used if the live GitHub API
// call fails or is rate-limited, so the section never shows nothing.
const FALLBACK_REPOS = [
  { name: 'project-RF-Pilot', description: 'AI-powered RFP management platform — FastAPI, React, PostgreSQL + pgvector, RAG pipeline, JWT auth.', language: 'Python', html_url: 'https://github.com/wlem24/project-RF-Pilot', stargazers_count: 0, forks_count: 0, updated_at: null },
  { name: 'resume', description: 'FastAPI + React starter with JWT auth and an AI-powered resume evaluator (OpenAI API).', language: 'JavaScript', html_url: 'https://github.com/wlem24/resume', stargazers_count: 0, forks_count: 0, updated_at: null },
  { name: 'app-littel-lemon', description: 'Django REST Framework backend for the Little Lemon restaurant app (Meta Front-End Developer coursework).', language: 'Python', html_url: 'https://github.com/wlem24/app-littel-lemon', stargazers_count: 0, forks_count: 0, updated_at: null },
  { name: 'booking-table', description: 'Table-reservation UI built with vanilla HTML, CSS, and JavaScript.', language: 'HTML', html_url: 'https://github.com/wlem24/booking-table', stargazers_count: 0, forks_count: 0, updated_at: null },
  { name: 'Trendmap', description: 'Collaborative team project built with fellow bootcamp classmates.', language: null, html_url: 'https://github.com/wlem24/Trendmap', stargazers_count: 0, forks_count: 0, updated_at: null },
  { name: 'app_tester', description: 'Coursera coursework and exercises.', language: null, html_url: 'https://github.com/wlem24/app_tester', stargazers_count: 0, forks_count: 0, updated_at: null },
]

const LANGUAGE_COLORS = {
  Python: '#3572A5',
  JavaScript: '#f1e05a',
  HTML: '#e34c26',
  CSS: '#563d7c',
  TypeScript: '#3178c6',
}

function timeAgo(iso) {
  if (!iso) return null
  const d = new Date(iso)
  const days = Math.floor((Date.now() - d.getTime()) / (1000 * 60 * 60 * 24))
  if (days < 1) return 'today'
  if (days < 30) return `${days}d ago`
  const months = Math.floor(days / 30)
  if (months < 12) return `${months}mo ago`
  return `${Math.floor(months / 12)}y ago`
}

export default function GitHubSection() {
  const [repos, setRepos] = useState(null)
  const [source, setSource] = useState('loading') // loading | live | fallback

  useEffect(() => {
    let cancelled = false
    fetch('https://api.github.com/users/wlem24/repos?per_page=100&sort=updated')
      .then((res) => {
        if (!res.ok) throw new Error('GitHub API error')
        return res.json()
      })
      .then((data) => {
        if (cancelled) return
        if (Array.isArray(data) && data.length) {
          setRepos(data)
          setSource('live')
        } else {
          throw new Error('empty response')
        }
      })
      .catch(() => {
        if (cancelled) return
        setRepos(FALLBACK_REPOS)
        setSource('fallback')
      })
    return () => {
      cancelled = true
    }
  }, [])

  const totalStars = repos ? repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0) : 0
  const languages = repos
    ? [...new Set(repos.map((r) => r.language).filter(Boolean))]
    : []

  return (
    <section id="github" style={{ background: 'var(--surface)' }}>
      <div className="container">
        <div className="eyebrow">GitHub</div>
        <h2 className="section-title">Live from github.com/wlem24</h2>
        <p className="section-lead">
          Pulled directly from the GitHub API at page load — always reflects the current
          state of the public repositories, not a static snapshot.
          {source === 'fallback' && ' (Showing a cached snapshot — the live GitHub API request didn\'t come back in time.)'}
        </p>

        {repos && (
          <div className="gh-stats-row reveal">
            <div className="gh-stat"><span className="num">{repos.length}</span><span className="label">Public Repos</span></div>
            <div className="gh-stat"><span className="num">{totalStars}</span><span className="label">Stars</span></div>
            <div className="gh-stat"><span className="num">{languages.length}</span><span className="label">Languages</span></div>
          </div>
        )}

        <div className="gh-grid">
          {(repos || Array.from({ length: 6 })).map((repo, i) =>
            repo ? (
              <a
                className="gh-card glass reveal"
                href={repo.html_url}
                target="_blank"
                rel="noopener"
                key={repo.name}
              >
                <div className="gh-card-head">
                  <i className="fa-solid fa-code-branch"></i>
                  <span className="gh-name">{repo.name}</span>
                </div>
                <p className="gh-desc">{repo.description || 'No description provided.'}</p>
                <div className="gh-card-foot">
                  {repo.language && (
                    <span className="gh-lang">
                      <span
                        className="dot"
                        style={{ background: LANGUAGE_COLORS[repo.language] || 'var(--text-faint)' }}
                      ></span>
                      {repo.language}
                    </span>
                  )}
                  <span><i className="fa-regular fa-star"></i> {repo.stargazers_count ?? 0}</span>
                  <span><i className="fa-solid fa-code-fork"></i> {repo.forks_count ?? 0}</span>
                  {timeAgo(repo.updated_at) && <span className="gh-updated">{timeAgo(repo.updated_at)}</span>}
                </div>
              </a>
            ) : (
              <div className="gh-card glass reveal gh-skeleton" key={i}></div>
            )
          )}
        </div>

        <div className="gh-cta reveal">
          <a href="https://github.com/wlem24" target="_blank" rel="noopener" className="btn btn-ghost">
            <i className="fa-brands fa-github"></i>View full GitHub profile
          </a>
        </div>
      </div>
    </section>
  )
}
