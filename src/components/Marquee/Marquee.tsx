/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useEffect, useState } from 'react'

import { LoaderSpotify } from '@/assets/LoaderSpotify'

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
    <div ref={containerRef} className={s.marqueeContainer}>
      <div
        className={`${
          isTextExtraOverflowing
            ? s.extraMarque
            : isTextOverflowing
            ? s.marquee
            : `m-auto w-fit whitespace-nowrap md:m-0`
        }`}
      >
        <a
          className={`${
            loading ? 'w-full text-center md:text-start' : 'link w-full text-center md:text-start'
          }`}
          href={loading ? undefined : link}
          rel="noopener"
          target="_blank"
        >
          {loading ? <LoaderSpotify /> : text}
        </a>
      </div>
    </div>
  )
}
