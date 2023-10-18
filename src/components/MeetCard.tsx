/* eslint-disable react/jsx-sort-props */
import React from 'react'
import Link from 'next/link'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'

import MeetIcon from '@/assets/svgs/MeetIcon'

function MeetCard() {
  return (
    <Link
      aria-label="Meet"
      rel="noopener noreferrer"
      target="_blank"
      href="https://calendly.com/estaniolmedo/45min?month=2023-10"
      className="relative flex flex-col items-center justify-center gap-3 rounded-2xl bg-gradient-to-br from-[#00AC47]/80 to-[#00832D]/40 p-2 shadow-2xl shadow-[#00AC47]/30 transition duration-300 ease-in-out hover:scale-[103%] hover:shadow-[#00AC47]/50 md:p-5"
    >
      <OpenInNewIcon className="absolute right-2 top-2 h-4 w-4 text-[#ffffff77] md:right-5 md:top-5 md:h-6 md:w-6" />
      <MeetIcon className="h-[293px] w-full max-w-[293px]" />
    </Link>
  )
}

export default MeetCard
