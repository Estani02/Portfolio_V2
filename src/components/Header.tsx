/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from 'react'
import { useTranslations } from 'next-intl'

import DeskAnimation from '@/assets/DeskAnimation/DeskAnimation'
import ScrollArrow from '@/assets/scrollArrow/ScrollArrow'

import Reveal from './Reveal/Reveal'

function Header() {
  const t = useTranslations('header')

  return (
    <header className="flex h-[100vh] flex-col justify-center font-bold">
      <div className="flex flex-col items-center justify-between md:flex-row">
        <div className="flex flex-col items-center gap-4 text-[2rem] capitalize md:items-start md:text-[2.5rem] lg:text-[5rem]">
          <Reveal content="Estanislao Olmedo" />
          <Reveal content={t('positon')} />
        </div>
        <DeskAnimation />
      </div>
      <ScrollArrow />
    </header>
  )
}

export default Header
