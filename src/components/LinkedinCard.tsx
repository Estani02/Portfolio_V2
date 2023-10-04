import Link from 'next/link'
import React from 'react'
import { LinkedIn } from '@mui/icons-material'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'

function LinkedinCard() {
  return (
    <Link
      aria-label="Linkedin"
      className="relative row-start-2 flex flex-col items-center justify-center gap-3 rounded-lg bg-gradient-to-br from-[#0288D1]/80 to-[#0288D1]/40 p-5 shadow-2xl shadow-[#0288D1]/30 transition duration-300 ease-in-out hover:scale-[103%] hover:shadow-[#0288D1]/50"
      href="https://www.linkedin.com/in/estanislao-olmedo-208510247/"
      rel="noopener noreferrer"
      target="_blank"
    >
      <LinkedIn className="h-[293px] w-full max-w-[293px]" />
      <OpenInNewIcon className="absolute right-5 top-5 h-4 w-4 text-[#ffffff77] md:h-6 md:w-6" />
    </Link>
  )
}

export default LinkedinCard
