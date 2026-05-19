import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Lucas Simão — Staff Software Engineer (Remote, Brazil)'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          background: '#0a0a0a',
          color: '#f5f5f5',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div style={{ fontSize: 28, color: '#888', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
          lucassimao.com
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ fontSize: 92, fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em' }}>
            Lucas Simão
          </div>
          <div style={{ fontSize: 44, color: '#9aa0a6', fontWeight: 500, lineHeight: 1.2 }}>
            Staff Software Engineer · Remote · Brazil
          </div>
        </div>

        <div style={{ display: 'flex', gap: 24, fontSize: 26, color: '#9aa0a6' }}>
          <span>React</span>
          <span>·</span>
          <span>Next.js</span>
          <span>·</span>
          <span>React Native</span>
          <span>·</span>
          <span>Node.js</span>
          <span>·</span>
          <span>Go</span>
          <span>·</span>
          <span>PostgreSQL</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
