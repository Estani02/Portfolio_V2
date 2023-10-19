import React from 'react'

import s from './ScrollArrow.module.css'

function ScrollArrow() {
  return (
    <a className={s.container} href="#about">
      <div className={s.chevron} />
      <div className={s.chevron} />
      <div className={s.chevron} />
    </a>
  )
}

export default ScrollArrow
