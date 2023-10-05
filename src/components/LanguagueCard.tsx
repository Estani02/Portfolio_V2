'use client'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

function LanguagueCard() {
  const [english, setEnglish] = useState(false)
  // const [t, i18n] = useTranslation('global')

  // function handleLanguage() {
  //   setEnglish(!english)
  //   if (english) {
  //     void i18n.changeLanguage('es')
  //   }
  //   if (!english) {
  //     i18n.changeLanguage('en')
  //   }
  //   console.log(english)
  // }

  return (
    <button
      className="relative flex flex-col items-center justify-center gap-3 rounded-lg bg-gradient-to-tl from-[#cc2b5e]/30 to-[#753a88]/30 p-5 text-4xl font-bold uppercase shadow-2xl shadow-[#cc2b5e]/30"
      type="button"
      // onClick={handleLanguage}
    >
      <span className="">ES</span>
      <span className="">EN</span>
    </button>
  )
}

export default LanguagueCard
