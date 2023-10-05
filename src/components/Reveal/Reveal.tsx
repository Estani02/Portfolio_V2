/* eslint-disable @typescript-eslint/restrict-plus-operands */
'use client'

import useIntersection from '@/hooks/useIntersection'

import styles from './Reveal.module.css'

const COLOR_LIST = ['#7f00ff', '#ff00ff', '#0000ff', '#007fff', '#00ffff']

function Reveal({ content }: { content: string }) {
  const { elementRef, isIntersecting } = useIntersection(
    {
      threshold: 0.5,
    },
    true,
  )

  function getRandomNumber() {
    return Math.floor(Math.random() * 5)
  }

  return (
    <span ref={elementRef} className={styles.reveal + ' ' + (isIntersecting ? styles.loaded : '')}>
      <div className={styles.cover} style={{ backgroundColor: COLOR_LIST[getRandomNumber()] }} />
      <p className={`${styles.text} text-black dark:text-white`}>{content}</p>
    </span>
  )
}

export default Reveal
