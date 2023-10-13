'use client'

import { useLocale } from 'next-intl'
import Link from 'next-intl/link'
import { useEffect, useState } from 'react'

function LanguagueCard() {
  const locale = useLocale()

  return (
    <div className="relative col-start-4 row-start-1 flex flex-col items-center justify-center gap-3 rounded-2xl bg-gradient-to-tl from-[#cc2b5e]/30 to-[#753a88]/30 p-5 text-4xl font-bold uppercase shadow-2xl shadow-[#cc2b5e]/30">
      <div className="flex w-full flex-col gap-5 capitalize">
        <Link
          className={`${
            locale === 'es' ? 'scale-[105%] bg-white/20' : ''
          } w-full rounded-full py-2 text-center transition duration-300 hover:scale-[105%] hover:bg-white/20`}
          href="/"
          locale="es"
          scroll={false}
        >
          Español
        </Link>
        <Link
          className={`${
            locale === 'en' ? 'scale-[105%] bg-white/20' : ''
          } w-full rounded-full py-2 text-center transition duration-300 hover:scale-[105%] hover:bg-white/20`}
          href="/"
          locale="en"
          scroll={false}
        >
          English
        </Link>
        <Link
          className={`${
            locale === 'pt' ? 'scale-[105%] bg-white/20' : ''
          } w-full rounded-full py-2 text-center transition duration-300 hover:scale-[105%] hover:bg-white/20`}
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
