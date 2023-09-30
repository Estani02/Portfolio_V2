import React from 'react'

import s from '../weatherMoon/moon.module.css'

function Moon() {
  return (
    <div className={s.container}>
      <div className={`${s.cloud} ${s.front}`}>
        <span className={s.leftFrontMoon} />
        <span className={s.rightFrontMoon} />
      </div>
      <span className={`${s.moon} ${s.sunshine}`} />
      <span className={s.moon} />
      <ul>
        <li />
        <li />
        <li />
        <li />
        <li />
      </ul>
    </div>
  )
}

export default Moon
