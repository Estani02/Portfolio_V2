import React from 'react'

import s from './ScrollArrow.module.css'

function ScrollArrow() {
  return (
    <div className={s.container}>
      <div className={s.chevron} />
      <div className={s.chevron} />
      <div className={s.chevron} />
    </div>
  )
}

export default ScrollArrow
