import Image from 'next/image'
import { useTranslations } from 'next-intl'

import logo from '@/assets/images/Logo_Roots.png'

function PositionCard() {
  const t = useTranslations('position')

  return (
    <div className="relative col-start-3 row-start-[8] flex flex-col items-center justify-center gap-3 rounded-2xl bg-gradient-to-tl from-[#2D9CF6]/30 to-[#2D9CF6]/30 p-5 shadow-2xl shadow-[#2D9CF6]/30 md:col-start-auto md:row-start-auto xl:row-start-5">
      <div className="text-center">
        <p className="hidden font-bold capitalize md:block md:text-2xl">{t('title')}</p>
        <p className="text-xs text-[#ffffff77] md:text-lg">{t('subtitle')}</p>
      </div>
      <Image alt="Tecnologías Informáticas Roots" src={logo} />
    </div>
  )
}

export default PositionCard
