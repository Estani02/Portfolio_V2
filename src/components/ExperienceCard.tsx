import { useTranslations } from 'next-intl'
import React from 'react'

function ExperienceCard() {
  const t = useTranslations('exp')

  return (
    <div className="col-start-2 row-start-4 flex flex-col items-center justify-center rounded-2xl bg-gradient-to-tl from-[#a81cb4]/80 to-[#5d1563]/30 text-center text-[6rem]  font-bold uppercase shadow-2xl shadow-[#5d1563]/30 dark:text-white">
      <p>+2</p>
      <p className="text-[1.25rem]">{t('title')}</p>
    </div>
  )
}

export default ExperienceCard
