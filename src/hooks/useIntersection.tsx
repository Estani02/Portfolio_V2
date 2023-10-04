import { useEffect, useRef, useState } from 'react'

export default function useIntersection(options = {}, executeOnce = false) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const elementRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const element = elementRef.current

    const observer = new IntersectionObserver((entries) => {
      if (executeOnce && isIntersecting) {
        return
      }

      entries.forEach((entry) => {
        setIsIntersecting(entry.isIntersecting)
      })
    }, options)

    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [options, executeOnce, isIntersecting])

  return { elementRef, isIntersecting }
}
