import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const cursorRef = useRef(null)
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    // Detect touch device
    const checkTouch = () => {
      setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0)
    }
    checkTouch()

    if (isTouch) return

    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0

    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`
      }
    }

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15
      ringY += (mouseY - ringY) * 0.15

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`
      }

      requestAnimationFrame(animate)
    }

    const handleMouseEnterInteractive = () => {
      cursorRef.current?.classList.add('cursor--hover')
    }

    const handleMouseLeaveInteractive = () => {
      cursorRef.current?.classList.remove('cursor--hover')
    }

    window.addEventListener('mousemove', handleMouseMove)
    const animFrame = requestAnimationFrame(animate)

    // Add hover listeners to interactive elements
    const interactives = document.querySelectorAll('a, button, .service-card, .pricing-card, .addon-row__header, .inquiry__option')
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnterInteractive)
      el.addEventListener('mouseleave', handleMouseLeaveInteractive)
    })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animFrame)
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnterInteractive)
        el.removeEventListener('mouseleave', handleMouseLeaveInteractive)
      })
    }
  }, [isTouch])

  if (isTouch) return null

  return (
    <div className="custom-cursor" ref={cursorRef}>
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />
    </div>
  )
}
