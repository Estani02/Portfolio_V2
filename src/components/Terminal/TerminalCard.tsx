import React from 'react'
import { Inconsolata } from 'next/font/google'
import { useTranslations } from 'next-intl'

import s from './TerminalCard.module.css'

const inco = Inconsolata({
  subsets: ['latin'],
  display: 'swap',
})

function TerminalCard() {
  const t = useTranslations('terminal')

  return (
    <div
      className={`${s.container} ${inco.className} col-start-2 row-start-[8] hidden xl:col-start-auto xl:row-start-auto xl:block`}
    >
      <div className={s.container_terminal} />
      <div className={s.terminal_toolbar}>
        <div className={s.butt}>
          <button className={`${s.btn} ${s.btn_color}`} type="button" />
          <button className={s.btn} type="button" />
          <button className={s.btn} type="button" />
        </div>
        <p className={s.user}>estaniolmedo@admin: ~</p>
      </div>
      <div className={`${s.terminal_body} flex flex-col gap-3`}>
        <div className={s.terminal_promt}>
          <span className={s.terminal_user}>estaniolmedo@admin:</span>
          <span className={s.terminal_location}>~</span>
          <span className={s.terminal_bling}>$</span>
          <p className="ml-1">npm install {t('attitude')}</p>
          {/* <span className={s.terminal_cursor} /> */}
        </div>
        <div className="ml-1 flex flex-col gap-4">
          <p>added 1 package and audited 1 package in 1s</p>
          <div>
            <p>1 package is looking for funding</p>
            <p className="ml-2">run `npm fund` for details</p>
          </div>
          <p>
            found <span className="text-[#96EC8E]">0</span> vulnerabilities
          </p>
        </div>
        <div className={`${s.terminal_promt} flex items-center`}>
          <span className={s.terminal_user}>estaniolmedo@admin:</span>
          <span className={s.terminal_location}>~</span>
          <span className={s.terminal_bling}>$</span>
          {/* <p className="ml-1">npm install actitud</p> */}
          <span className={s.terminal_cursor} />
        </div>
      </div>
    </div>
  )
}

export default TerminalCard
