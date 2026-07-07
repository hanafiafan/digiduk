import { useState, useEffect } from 'react'

const phrases = [
  'BUILDING DIGITAL SYSTEMS',
  'STRATEGY / DESIGN / DEVELOPMENT',
  'LOADING EXPERIENCE'
]

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setHidden(true)
            setTimeout(() => onComplete?.(), 600)
          }, 400)
          return 100
        }
        return prev + Math.random() * 8 + 2
      })
    }, 60)

    return () => clearInterval(interval)
  }, [onComplete])

  useEffect(() => {
    const phraseInterval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % phrases.length)
    }, 800)
    return () => clearInterval(phraseInterval)
  }, [])

  return (
    <div className={`preloader ${hidden ? 'preloader--hidden' : ''}`}>
      <div className="preloader__counter">
        {String(Math.min(Math.floor(progress), 100)).padStart(3, '0')}
      </div>
      <div className="preloader__text">{phrases[phraseIndex]}</div>
      <div className="preloader__bar">
        <div
          className="preloader__bar-fill"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
    </div>
  )
}
