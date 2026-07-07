import { useRef } from 'react'

export default function MagneticButton({ children, className = '', onClick, ...props }) {
  const buttonRef = useRef(null)

  const handleMouseMove = (e) => {
    const button = buttonRef.current
    if (!button) return
    const rect = button.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`
  }

  const handleMouseLeave = () => {
    if (buttonRef.current) {
      buttonRef.current.style.transform = 'translate(0, 0)'
    }
  }

  return (
    <button
      ref={buttonRef}
      className={className}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </button>
  )
}
