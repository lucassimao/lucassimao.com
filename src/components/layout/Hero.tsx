'use client'

import { useEffect, useRef } from 'react'

const CELL_SIZE = 16
const STEP_MS = 160
const technologies = ['TypeScript', 'React', 'Node.js', 'Go', 'PostgreSQL', 'AWS', 'Cloudflare']
const LABEL_STEPS = 16
const LABEL_COOLDOWN = 24
const initialCells = [[1, 0], [2, 1], [0, 2], [1, 2], [2, 2]]

function nextGeneration(cells: number[][]): number[][] {
  const alive = new Set(cells.map(([x, y]) => `${x},${y}`))
  const neighbors = new Map<string, number>()

  for (const [x, y] of cells) {
    for (let dx = -1; dx <= 1; dx++) {
      for (let dy = -1; dy <= 1; dy++) {
        if (dx === 0 && dy === 0) continue
        const key = `${x + dx},${y + dy}`
        neighbors.set(key, (neighbors.get(key) ?? 0) + 1)
      }
    }
  }

  return [...neighbors]
    .filter(([key, count]) => count === 3 || (count === 2 && alive.has(key)))
    .map(([key]) => key.split(',').map(Number))
}

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const labelRef = useRef<HTMLSpanElement>(null)
  const greetingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const label = labelRef.current
    const context = canvas?.getContext('2d')
    if (!canvas || !context || !label) return

    let cells = initialCells.map(([x, y]) => [x + 5, y + 10])
    let generation = 0
    let lastLabelGeneration = -LABEL_COOLDOWN
    let labelUntil = -1
    let technologyIndex = 0
    let width = 0
    let height = 0
    let timer: ReturnType<typeof setInterval> | undefined
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    function draw() {
      if (!context || !label) return
      context.clearRect(0, 0, width, height)
      context.fillStyle = '#202020'
      const columns = Math.max(4, Math.floor(width / CELL_SIZE))
      const rows = Math.max(4, Math.floor(height / CELL_SIZE))
      const points = cells.map(([x, y]) => [(x % columns) * CELL_SIZE, (y % rows) * CELL_SIZE])
      for (const [x, y] of cells) {
        context.fillRect((x % columns) * CELL_SIZE, (y % rows) * CELL_SIZE, CELL_SIZE - 2, CELL_SIZE - 2)
      }
      const xs = points.map(([x]) => x)
      const ys = points.map(([, y]) => y)
      const left = Math.min(...xs)
      const top = Math.min(...ys)
      const right = Math.max(...xs) + CELL_SIZE - 2
      const bottom = Math.max(...ys) + CELL_SIZE - 2
      // Hide while the glider straddles opposite edges of the viewport.
      const intact = right - left <= CELL_SIZE * 3 && bottom - top <= CELL_SIZE * 3
      const labelWidth = label.offsetWidth
      const labelHeight = label.offsetHeight
      const x = right + 16 + labelWidth <= width - 16 ? right + 16 : left - labelWidth - 16
      const labelX = Math.max(16, Math.min(x, width - labelWidth - 16))
      let labelY = Math.max(16, Math.min((top + bottom - labelHeight) / 2, height - labelHeight - 16))
      const greeting = greetingRef.current
      // Move the label below the greeting only when their bounds overlap.
      // Do not hide labels across the entire top of the viewport after wrapping.
      if (greeting && labelX < greeting.offsetWidth + 12 && labelY < greeting.offsetHeight + 12) {
        labelY = greeting.offsetHeight + 12
      }
      label.style.transform = `translate(${labelX}px, ${labelY}px)`
      label.dataset.visible = String(intact && (reducedMotion.matches || generation < labelUntil))
    }

    function resize() {
      if (!canvas || !context || !label) return
      width = canvas.clientWidth
      height = canvas.clientHeight
      const ratio = window.devicePixelRatio || 1
      canvas.width = Math.round(width * ratio)
      canvas.height = Math.round(height * ratio)
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
      draw()
    }

    function updatePlayback() {
      clearInterval(timer)
      draw()
      if (reducedMotion.matches || document.hidden) return
      timer = setInterval(() => {
        cells = nextGeneration(cells)
        generation++
        const minX = Math.min(...cells.map(([x]) => x))
        const minY = Math.min(...cells.map(([, y]) => y))
        const shape = cells.map(([x, y]) => `${x - minX},${y - minY}`).sort().join(';')
        if (shape === '0,0;0,2;1,1;1,2;2,1' && generation - lastLabelGeneration >= LABEL_COOLDOWN) {
          if (label) label.textContent = technologies[technologyIndex++ % technologies.length]
          lastLabelGeneration = generation
          labelUntil = generation + LABEL_STEPS
        }
        draw()
      }, STEP_MS)
    }

    const observer = new ResizeObserver(resize)
    observer.observe(canvas)
    resize()
    updatePlayback()
    reducedMotion.addEventListener('change', updatePlayback)
    document.addEventListener('visibilitychange', updatePlayback)

    return () => {
      clearInterval(timer)
      observer.disconnect()
      reducedMotion.removeEventListener('change', updatePlayback)
      document.removeEventListener('visibilitychange', updatePlayback)
    }
  }, [])

  return (
    <div className="minimal-home" lang="en">
      <h1 ref={greetingRef}>Hi</h1>
      <p className="sr-only">Experience with {technologies.join(', ')}.</p>
      <span ref={labelRef} className="glider-label" aria-hidden="true">{technologies[0]}</span>
      <canvas ref={canvasRef} className="glider-canvas" aria-hidden="true" />
    </div>
  )
}
