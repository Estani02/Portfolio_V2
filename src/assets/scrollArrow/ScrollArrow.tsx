import React from 'react'

import s from './ScrollArrow.module.css'

function ScrollArrow() {
  return (
    <div className={s.container}>
      <a className={s.link} href="#about">
        <div className={s.chevron} />
        <div className={s.chevron} />
        <div className={s.chevron} />
      </a>
    </div>
  )
}

export default ScrollArrow
