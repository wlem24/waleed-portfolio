import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    // In production this is where an error-tracking service (Sentry, etc.)
    // would be wired in. Logged here so failures are never silent.
    console.error('Portfolio crashed:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          role="alert"
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            padding: '24px',
            textAlign: 'center',
            background: '#0d0f12',
            color: '#e9eaec',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          <h1 style={{ fontSize: '1.4rem' }}>Something went wrong.</h1>
          <p style={{ color: '#9aa1ab', maxWidth: '420px' }}>
            The page hit an unexpected error. Refreshing usually fixes it — if it
            keeps happening, please reach out at{' '}
            <a href="mailto:albrkati9@gmail.com" style={{ color: '#3b82f6' }}>
              albrkati9@gmail.com
            </a>
            .
          </p>
        </div>
      )
    }
    return this.props.children
  }
}
