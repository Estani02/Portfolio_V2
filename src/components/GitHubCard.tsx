import Link from 'next/link'
import React from 'react'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'

import GitHubIcon from '@/assets/svgs/GitHubIcon'

function GitHubCard() {
  return (
    <Link
      aria-label="Linkedin"
      className="relative col-start-3 row-start-2 flex flex-col items-center justify-center gap-3 rounded-2xl bg-gradient-to-br from-[#1A1E22]/80 to-[#0D1117]/30 p-5 shadow-2xl shadow-[#ffff]/30 transition duration-300 ease-in-out hover:scale-[103%] hover:shadow-[#ffff]/50 xl:col-start-3 xl:row-start-3"
      href="https://github.com/Estani02"
      rel="noopener noreferrer"
      target="_blank"
    >
      <GitHubIcon className="h-full w-full" />
      <OpenInNewIcon className="absolute right-5 top-5 h-4 w-4 text-[#ffffff77] md:h-6 md:w-6" />
    </Link>
  )
}

export default GitHubCard
