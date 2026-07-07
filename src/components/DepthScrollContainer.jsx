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
  const [spacerHeight, setSpacerHeight] = useState(0)

  // Flatten nested children arrays so nested loops (like map) register correctly as separate sections
  const flatChildren = Children.toArray(children)

  useEffect(() => {
    // Spacer height is determined by the number of sections
    // 1000px height allocated per section transitions
    setSpacerHeight(flatChildren.length * 1000)
  }, [flatChildren])

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateTransforms)
        ticking = true
      }
    }

    const updateTransforms = () => {
      const scrollY = window.scrollY
      const numSections = flatChildren.length

      // 1. Calculate color interpolation
      const exactIndex = scrollY / 1000
      const activeIdx = Math.floor(exactIndex)
      const factor = exactIndex - activeIdx

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

      // Update root variables
      document.documentElement.style.setProperty('--color-bg', currentBg)
      document.documentElement.style.setProperty('--color-text', currentText)

      // 2. Calculate 3D transforms for each child section
      listRef.current.forEach((el, index) => {
        if (!el) return

        const relativeOffset = scrollY - index * 1000

        let scale = 1
        let translateZ = 0
        let opacity = 1
        let pointerEvents = 'auto'
        let visibility = 'visible'

        if (relativeOffset > 0) {
          // Foreground (passed / zooming out)
          scale = 1 + relativeOffset / 400
          translateZ = relativeOffset * 1.5
          opacity = Math.max(0, 1 - relativeOffset / 350)
          pointerEvents = opacity > 0.05 ? 'auto' : 'none'
          visibility = opacity > 0 ? 'visible' : 'hidden'
        } else if (relativeOffset < 0) {
          // Background (approaching / zooming in)
          scale = Math.max(0.3, 1 + relativeOffset / 1200)
          translateZ = relativeOffset * 0.8
          opacity = Math.max(0, 1 + relativeOffset / 400)
          pointerEvents = relativeOffset > -150 ? 'auto' : 'none'
          visibility = opacity > 0 ? 'visible' : 'hidden'
        }

        // Apply transforms directly via style
        el.style.transform = `translate3d(0, 0, ${translateZ}px) scale(${scale})`
        el.style.opacity = opacity
        el.style.pointerEvents = pointerEvents
        el.style.visibility = visibility
      })

      ticking = false
    }

    window.addEventListener('scroll', handleScroll)
    // Initial run
    updateTransforms()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [flatChildren])

  return (
    <>
      <div className="depth-container" ref={containerRef}>
        {flatChildren.map((child, index) => (
          <div
            key={index}
            className="depth-section"
            ref={(el) => (listRef.current[index] = el)}
          >
            <div className="depth-section__content">
              {child}
            </div>
          </div>
        ))}
      </div>
      {/* Dummy scroll area */}
      <div
        className="depth-spacer"
        style={{ height: `${spacerHeight}px` }}
      />
    </>
  )
}
