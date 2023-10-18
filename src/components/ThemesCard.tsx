import React from 'react'

import ButtonThemes from './ButtonThemes/ButtonThemes'

function ThemesCard() {
  return (
    <div className="relative flex flex-col items-center justify-center gap-3 rounded-2xl bg-gradient-to-tl from-[#cc2b5e]/30 to-[#753a88]/30 p-5 shadow-2xl shadow-[#cc2b5e]/30 xl:col-start-1 xl:row-start-1">
      <ButtonThemes />
    </div>
  )
}

export default ThemesCard
