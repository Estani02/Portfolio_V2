import React from 'react'
import { useTranslations } from 'next-intl'

import Reveal from './Reveal/Reveal'

function AboutMe() {
  const t = useTranslations('about')

  return (
    <div className="col-span-3 col-start-1 row-start-2 flex h-fit flex-col gap-8 md:text-xl lg:text-2xl">
      <Reveal content={t('experienced')} />
      <Reveal content={t('enthusiastic')} />
      <Reveal content={t('capable')} />
      <Reveal content={t('group_projects')} />
      <Reveal content={t('search')} />
    </div>
  )
}

export default AboutMe
