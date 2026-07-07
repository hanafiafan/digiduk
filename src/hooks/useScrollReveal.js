import { useEffect, useRef } from 'react'

export function useScrollReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -60px 0px'
      }
    )

    // Observe the element itself and any children with reveal classes
    const revealElements = element.querySelectorAll(
      '.reveal, .reveal-left, .reveal-right, .reveal-scale'
    )

    if (
      element.classList.contains('reveal') ||
      element.classList.contains('reveal-left') ||
      element.classList.contains('reveal-right') ||
      element.classList.contains('reveal-scale')
    ) {
      observer.observe(element)
    }

    revealElements.forEach((el) => observer.observe(el))

    return () => {
      observer.disconnect()
    }
  }, [options.threshold, options.rootMargin])

  return ref
}
