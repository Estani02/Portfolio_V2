import Link from 'next/link'
import React from 'react'
import { MdOpenInNew } from 'react-icons/md'

import LinkedinIcon from '@/assets/svgs/LinkedinIcon'

function LinkedinCard() {
  return (
    <Link
      aria-label="Linkedin"
      className="relative col-start-2 row-start-2 flex flex-col items-center justify-center gap-3 rounded-2xl bg-gradient-to-br from-[#0288D1]/80 to-[#0288D1]/40 p-2 shadow-2xl shadow-[#0288D1]/30 transition duration-300 ease-in-out hover:scale-[103%] hover:shadow-[#0288D1]/50 md:p-5 xl:col-start-1 xl:row-start-3"
      href="https://www.linkedin.com/in/estanislao-olmedo-208510247/"
      rel="noopener noreferrer"
      target="_blank"
    >
      <LinkedinIcon className="h-full w-full" />
      <MdOpenInNew className="absolute right-2 top-2 h-4 w-4 text-[#ffffff77] md:right-5 md:top-5 md:h-6 md:w-6" />
    </Link>
  )
}

export default LinkedinCard
