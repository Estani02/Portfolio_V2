/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from 'react'
import { useTranslations } from 'next-intl'

import DeskAnimation from '@/assets/DeskAnimation/DeskAnimation'

import Reveal from './Reveal/Reveal'

function Header() {
  const t = useTranslations('header')

  return (
    <header className="flex h-[100vh] items-center justify-between font-bold">
      <div className="flex flex-col gap-4 text-[2.5rem] capitalize lg:text-[5rem]">
        <Reveal content="Estanislao Olmedo" />
        <Reveal content={t('positon')} />
      </div>
      <DeskAnimation />
    </header>
  )
}

export default Header
