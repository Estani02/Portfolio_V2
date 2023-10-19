import React from 'react'

import s from './Background.module.css'

function Background() {
  return (
    <div
      className={`${s.area} bg-gradient-to-bl from-[#8f94fb] to-[#4e54c8] dark:from-[#cc2b5e]/25 dark:to-[#753a88]/25`}
    >
      <ul className={s.circles}>
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
      </ul>
    </div>
  )
}

export default Background
