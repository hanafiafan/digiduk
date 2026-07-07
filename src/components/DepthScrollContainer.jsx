import { useEffect, useRef, useState, Children } from 'react'

const themeColors = [
  { bg: '#F2F0E9', text: '#111111' }, // 0: Hero
  { bg: '#111111', text: '#F2F0E9' }, // 1: Statement
  { bg: '#F2F0E9', text: '#111111' }, // 2: Services
  { bg: '#F2F0E9', text: '#111111' }, // 3: Pricing (Landing)
  { bg: '#111111', text: '#F2F0E9' }, // 4: Pricing (Portfolio)
  { bg: '#F2F0E9', text: '#111111' }, // 5: Pricing (E-Commerce)
  { bg: '#F2F0E9', text: '#111111' }, // 6: Cost Breakdown
  { bg: '#0d0d0d', text: '#F2F0E9' }, // 7: Meta Ads
  { bg: '#111111', text: '#F2F0E9' }, // 8: Pixel
  { bg: '#0d0d0d', text: '#F2F0E9' }, // 9: Bundles
  { bg: '#F2F0E9', text: '#111111' }, // 10: Addons
  { bg: '#F2F0E9', text: '#111111' }, // 11: Third Party
  { bg: '#111111', text: '#F2F0E9' }, // 12: Process
  { bg: '#F2F0E9', text: '#111111' }, // 13: Scope Guard
  { bg: '#F2F0E9', text: '#111111' }, // 14: Terms
  { bg: '#111111', text: '#F2F0E9' }, // 15: Inquiry
  { bg: '#0d0d0d', text: '#F2F0E9' }  // 16: Footer
]

function interpolateColor(color1, color2, factor) {
  const r1 = parseInt(color1.substring(1, 3), 16)
  const g1 = parseInt(color1.substring(3, 5), 16)
  const b1 = parseInt(color1.substring(5, 7), 16)

  const r2 = parseInt(color2.substring(1, 3), 16)
  const g2 = parseInt(color2.substring(3, 5), 16)
  const b2 = parseInt(color2.substring(5, 7), 16)

  const r = Math.round(r1 + factor * (r2 - r1))
  const g = Math.round(g1 + factor * (g2 - g1))
  const b = Math.round(b1 + factor * (b2 - b1))

  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`
}

export default function DepthScrollContainer({ children }) {
  const containerRef = useRef(null)
  const listRef = useRef([])
  const gridRef = useRef(null)

  // Flatten nested children arrays so nested loops (like map) register correctly as separate sections
  const flatChildren = Children.toArray(children)

  useEffect(() => {
    let ticking = false
    let lastActiveIdx = -1

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateTransforms)
        ticking = true
      }
    }

    const updateTransforms = () => {
      const scrollY = window.scrollY
      const viewportHeight = window.innerHeight
      const scrollCenter = scrollY + viewportHeight * 0.5
      const numSections = flatChildren.length

      // 1. Determine active index and factor based on getBoundingClientRect
      let activeIdx = 0
      let factor = 0

      const elements = listRef.current
      for (let i = 0; i < elements.length; i++) {
        const el = elements[i]
        if (!el) continue

        const rect = el.getBoundingClientRect()
        const top = rect.top + scrollY
        const height = rect.height
        const bottom = top + height

        if (scrollCenter >= top && scrollCenter <= bottom) {
          activeIdx = i
          factor = (scrollCenter - top) / height
          break
        } else if (scrollCenter < top && i === 0) {
          activeIdx = 0
          factor = 0
          break
        } else if (scrollCenter > bottom && i === elements.length - 1) {
          activeIdx = elements.length - 1
          factor = 1
          break
        }
      }

      // 2. Interpolate dynamic CSS variables based on active scroll section
      let currentBg = themeColors[0].bg
      let currentText = themeColors[0].text

      if (activeIdx < numSections - 1) {
        const nextIdx = activeIdx + 1
        const c1 = themeColors[activeIdx] || themeColors[0]
        const c2 = themeColors[nextIdx] || themeColors[0]
        currentBg = interpolateColor(c1.bg, c2.bg, factor)
        currentText = interpolateColor(c1.text, c2.text, factor)
      } else {
        const c = themeColors[numSections - 1] || themeColors[0]
        currentBg = c.bg
        currentText = c.text
      }

      // Update root CSS properties
      document.documentElement.style.setProperty('--color-bg', currentBg)
      document.documentElement.style.setProperty('--color-text', currentText)

      // Derive matching translucent navbar background and border variables dynamically
      const bgR = parseInt(currentBg.substring(1, 3), 16)
      const bgG = parseInt(currentBg.substring(3, 5), 16)
      const bgB = parseInt(currentBg.substring(5, 7), 16)
      document.documentElement.style.setProperty('--color-navbar-bg', `rgba(${bgR}, ${bgG}, ${bgB}, 0.95)`)

      const textR = parseInt(currentText.substring(1, 3), 16)
      const textG = parseInt(currentText.substring(3, 5), 16)
      const textB = parseInt(currentText.substring(5, 7), 16)
      document.documentElement.style.setProperty('--color-border', `rgba(${textR}, ${textG}, ${textB}, 0.1)`)

      // Notify Navbar about the active section index change
      if (activeIdx !== lastActiveIdx) {
        lastActiveIdx = activeIdx
        window.dispatchEvent(new CustomEvent('activeSectionChanged', { detail: activeIdx }))
      }

      // 3. Animate 3D Parallax grid background vertically
      if (gridRef.current) {
        const gridTranslateY = (scrollY * -0.2) % 80
        gridRef.current.style.transform = `translate(-50%, -50%) translate3d(0, ${gridTranslateY}px, -200px) rotateX(65deg)`
      }

      ticking = false
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)
    // Initial run
    updateTransforms()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [flatChildren])

  return (
    <div className="scroll-color-container" ref={containerRef}>
      {/* Tilting Parallax Grid Backplane */}
      <div className="depth-grid-bg" ref={gridRef} />

      {flatChildren.map((child, index) => (
        <div
          key={index}
          className="scroll-section"
          ref={(el) => (listRef.current[index] = el)}
        >
          {child}
        </div>
      ))}
    </div>
  )
}
