/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useEffect, useState } from 'react'

import s from './Marquee.module.css'

export function Marquee({
  text,
  loading,
  link,
}: {
  text: string | undefined
  loading: boolean
  link: string | undefined
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isTextOverflowing, setIsTextOverflowing] = useState(false)
  const [isTextExtraOverflowing, setIsTextExtraOverflowing] = useState(false)

  useEffect(() => {
    const container = containerRef.current

    if (container) {
      const isOverflowing = container.scrollWidth > container.clientWidth
      const isExtraOverflowing = container.scrollWidth > 400

      setIsTextOverflowing(isOverflowing)
      setIsTextExtraOverflowing(isExtraOverflowing)
    }
  }, [text])

  return (
    <div ref={containerRef} className={`${s.marqueeContainer}`}>
      <div
        className={
          isTextExtraOverflowing ? s.extraMarque : isTextOverflowing ? s.marquee : s.offMarquee
        }
      >
        <a
          className={`${
            loading
              ? 'w-full text-center md:text-start'
              : ' border-b-2 border-transparent hover:border-black'
          }`}
          href={loading ? undefined : link}
        >
          {loading ? 'Loading...' : text}
        </a>
      </div>
    </div>
  )
}
