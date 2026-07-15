import { useEffect, useRef } from 'react'

const LABELS = ['RAG', 'LLM', 'pgvector', 'FastAPI', 'React', 'IoT', 'ChromaDB', 'Semantic', 'Docker', 'API']

export default function VectorField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let w, h, nodes, frameId

    const resize = () => {
      w = canvas.width = canvas.offsetWidth
      h = canvas.height = canvas.offsetHeight
    }

    const initNodes = () => {
      const count = w < 700 ? 16 : 28
      nodes = Array.from({ length: count }, (_, i) => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        r: Math.random() * 1.6 + 1,
        label: i < LABELS.length ? LABELS[i] : null,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i]
        a.x += a.vx
        a.y += a.vy
        if (a.x < 0 || a.x > w) a.vx *= -1
        if (a.y < 0 || a.y > h) a.vy *= -1
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j]
          const dx = a.x - b.x, dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 170) {
            ctx.strokeStyle = `rgba(59,130,246,${0.14 * (1 - dist / 170)})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }
      nodes.forEach((n) => {
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(147,197,253,0.65)'
        ctx.fill()
        if (n.label) {
          ctx.font = "10px 'JetBrains Mono', monospace"
          ctx.fillStyle = 'rgba(147,197,253,0.3)'
          ctx.fillText(n.label, n.x + 8, n.y + 3)
        }
      })
      if (!prefersReduced) frameId = requestAnimationFrame(draw)
    }

    resize()
    initNodes()
    draw()

    const onResize = () => {
      resize()
      initNodes()
      if (prefersReduced) draw()
    }
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
      if (frameId) cancelAnimationFrame(frameId)
    }
  }, [])

  return <canvas id="vector-field" ref={canvasRef} aria-hidden="true"></canvas>
}
