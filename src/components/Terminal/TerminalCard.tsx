import React from 'react'

import s from './TerminalCard.module.css'

function TerminalCard() {
  return (
    <div className={s.container}>
      <div className={s.container_terminal} />
      <div className={s.terminal_toolbar}>
        <div className={s.butt}>
          <button className={`${s.btn} ${s.btn_color}`} type="button" />
          <button className={s.btn} type="button" />
          <button className={s.btn} type="button" />
        </div>
        <p className={s.user}>estaniolmedo@admin: ~</p>
      </div>
      <div className={s.terminal_body}>
        <div className={s.terminal_promt}>
          <span className={s.terminal_user}>estaniolmedo@admin:</span>
          <span className={s.terminal_location}>~</span>
          <span className={s.terminal_bling}>$</span>
          {/* <p className="ml-2" /> */}
          <span className={s.terminal_cursor} />
        </div>
      </div>
    </div>
  )
}

export default TerminalCard
