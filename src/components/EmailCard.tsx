import Link from 'next/link'
import React from 'react'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'

import GmailIcon from '@/assets/svgs/GmailIcon'

function EmailCard() {
  return (
    <Link
      aria-label="Linkedin"
      className="relative flex flex-col items-center justify-center gap-3 rounded-lg bg-gradient-to-br from-[#C62828]/80 to-[#C62828]/30 p-5 shadow-2xl shadow-[#C62828]/30 transition duration-300 ease-in-out hover:scale-[103%] hover:shadow-[#C62828]/50"
      href="mailto:estaniolmedo@gmail.com"
      rel="noopener noreferrer"
      target="_blank"
      title="estaniolmedo@gmail.com"
    >
      <GmailIcon className="h-[293px] w-full max-w-[293px]" />
      <OpenInNewIcon className="absolute right-5 top-5 h-4 w-4 text-[#ffffff77] md:h-6 md:w-6" />
    </Link>
  )
}

export default EmailCard
