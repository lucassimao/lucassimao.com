'use client'

import { useEffect, useRef } from 'react'

const CELL_SIZE = 16
const STEP_MS = 160
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

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    if (!canvas || !context) return

    let cells = initialCells.map(([x, y]) => [x + 5, y + 10])
    let width = 0
    let height = 0
    let timer: ReturnType<typeof setInterval> | undefined
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    function draw() {
      if (!context) return
      context.clearRect(0, 0, width, height)
      context.fillStyle = '#202020'
      const columns = Math.max(4, Math.floor(width / CELL_SIZE))
      const rows = Math.max(4, Math.floor(height / CELL_SIZE))
      for (const [x, y] of cells) {
        context.fillRect((x % columns) * CELL_SIZE, (y % rows) * CELL_SIZE, CELL_SIZE - 2, CELL_SIZE - 2)
      }
    }

    function resize() {
      if (!canvas || !context) return
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
      if (reducedMotion.matches || document.hidden) return
      timer = setInterval(() => {
        cells = nextGeneration(cells)
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
      <h1>Hi</h1>
      <canvas ref={canvasRef} className="glider-canvas" aria-hidden="true" />
    </div>
  )
}
