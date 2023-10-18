'use client'

import { useLocale } from 'next-intl'
import Link from 'next-intl/link'

function LanguagueCard() {
  const locale = useLocale()

  return (
    <div className="relative flex flex-col items-center justify-center gap-3 rounded-2xl bg-gradient-to-tl from-[#cc2b5e]/30 to-[#753a88]/30 px-2 font-bold uppercase shadow-2xl shadow-[#cc2b5e]/30 md:text-3xl xl:col-start-4 xl:row-start-1 xl:p-5 xl:text-4xl">
      <div className="flex w-full flex-col items-center gap-3 capitalize xl:gap-5">
        <Link
          className={`${
            locale === 'es' ? 'scale-[105%] bg-white/20' : ''
          } w-fit rounded-full px-2 py-1 text-center transition duration-300 hover:scale-[105%] hover:bg-white/20 md:px-8 xl:w-full xl:py-2`}
          href="/"
          locale="es"
          scroll={false}
        >
          Español
        </Link>
        <Link
          className={`${
            locale === 'en' ? 'scale-[105%] bg-white/20' : ''
          } w-fit rounded-full px-2 py-1 text-center transition duration-300 hover:scale-[105%] hover:bg-white/20 md:px-8 xl:w-full xl:py-2`}
          href="/"
          locale="en"
          scroll={false}
        >
          English
        </Link>
        <Link
          className={`${
            locale === 'pt' ? 'scale-[105%] bg-white/20' : ''
          } w-fit rounded-full px-2 py-1 text-center transition duration-300 hover:scale-[105%] hover:bg-white/20 md:px-8 xl:w-full xl:py-2`}
          href="/"
          locale="pt"
          scroll={false}
        >
          Português
        </Link>
      </div>
    </div>
  )
}

export default LanguagueCard
