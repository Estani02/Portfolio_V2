import Link from 'next/link'
import React from 'react'
import { MdOpenInNew } from 'react-icons/md'

import GmailIcon from '@/assets/svgs/GmailIcon'

function EmailCard() {
  return (
    <Link
      aria-label="Linkedin"
      className="relative flex flex-col items-center justify-center gap-3 rounded-2xl bg-gradient-to-br from-[#C62828]/80 to-[#C62828]/30 p-2 shadow-2xl shadow-[#C62828]/30 transition duration-300 ease-in-out hover:scale-[103%] hover:shadow-[#C62828]/50 md:p-5"
      href="mailto:estaniolmedo@gmail.com"
      rel="noopener noreferrer"
      target="_blank"
      title="estaniolmedo@gmail.com"
    >
      <GmailIcon className="h-[293px] w-full max-w-[293px]" />
      <MdOpenInNew className="absolute right-2 top-2 h-4 w-4 text-[#ffffff77] md:right-5 md:top-5 md:h-6 md:w-6" />
    </Link>
  )
}

export default EmailCard
