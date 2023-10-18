import { useTranslations } from 'next-intl'
import React from 'react'

function ExperienceCard() {
  const t = useTranslations('exp')

  return (
    <div className="row-start-[8] flex flex-col items-center justify-center rounded-2xl bg-gradient-to-tl from-[#a81cb4]/80 to-[#5d1563]/30 p-2 text-center text-[4rem] font-bold uppercase shadow-2xl shadow-[#5d1563]/30 dark:text-white sm:col-start-2 sm:row-start-4 xl:col-start-2 xl:row-start-4 xl:text-[6rem]">
      <p>+2</p>
      <p className="text-[0.8rem] md:text-[1rem] xl:text-[1.25rem]">{t('title')}</p>
    </div>
  )
}

export default ExperienceCard
