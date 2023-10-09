'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

function LanguagueCard() {
  const initialLanguage = localStorage.getItem('language') || 'es'
  const [languague, setLanguague] = useState(initialLanguage)

  useEffect(() => {
    localStorage.setItem('language', languague)
  }, [languague])

  const handleLanguague = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLanguague(e.target.name)
  }

  return (
    <div className="relative col-start-4 row-start-1 flex flex-col items-center justify-center gap-3 rounded-2xl bg-gradient-to-tl from-[#cc2b5e]/30 to-[#753a88]/30 p-5 text-4xl font-bold uppercase shadow-2xl shadow-[#cc2b5e]/30">
      <div className="flex w-full flex-col gap-5">
        <Link legacyBehavior passHref href="/es" scroll={false}>
          <button
            className={`${
              languague === 'es' ? 'scale-[105%] bg-white/20' : ''
            } w-full rounded-full py-2 text-center transition duration-300 hover:scale-[105%] hover:bg-white/20`}
            name="es"
            type="button"
            onClick={(e) => handleLanguague(e)}
          >
            Español
          </button>
        </Link>
        <Link href="/en" scroll={false}>
          <button
            className={`${
              languague === 'en' ? 'scale-[105%] bg-white/20' : ''
            } w-full rounded-full py-2 text-center transition duration-300 hover:scale-[105%] hover:bg-white/20`}
            name="en"
            type="button"
            onClick={(e) => handleLanguague(e)}
          >
            English
          </button>
        </Link>
        <Link href="/pt" scroll={false}>
          <button
            className={`${
              languague === 'pt' ? 'scale-[105%] bg-white/20' : ''
            } w-full rounded-full py-2 text-center transition duration-300 hover:scale-[105%] hover:bg-white/20`}
            name="pt"
            type="button"
            onClick={(e) => handleLanguague(e)}
          >
            Português
          </button>
        </Link>
      </div>
    </div>
  )
}

export default LanguagueCard
