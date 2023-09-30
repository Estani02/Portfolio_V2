import React from 'react'

import s from '../weatherSun/sun.module.css'

function Sun() {
  return (
    <div className={s.container}>
      <div className={`${s.cloud} ${s.front}`}>
        <span className={s.leftFrontLeft} />
        <span className={s.rightFrontLeft} />
      </div>
      <span className={`${s.sun} ${s.sunshine}`} />
      <span className={s.sun} />
      <div className={`${s.cloud} ${s.back}`}>
        <span className={s.leftBackLeftRight} />
        <span className={s.rightBackLeftRight} />
      </div>
    </div>
  )
}

export default Sun
