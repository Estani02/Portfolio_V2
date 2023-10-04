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
      className="relative flex flex-col items-center justify-center gap-3 rounded-lg bg-gradient-to-br from-[#00AC47]/80 to-[#00832D]/40 p-5 shadow-2xl shadow-[#00AC47]/30 transition duration-300 ease-in-out hover:scale-[103%] hover:shadow-[#00AC47]/50"
    >
      <OpenInNewIcon className="absolute right-5 top-5 h-4 w-4 text-[#ffffff77] md:h-6 md:w-6" />
      <MeetIcon className="h-[293px] w-full max-w-[293px]" />
    </Link>
  )
}

export default MeetCard
