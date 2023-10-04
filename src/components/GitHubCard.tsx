import Link from 'next/link'
import React from 'react'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import { GitHub } from '@mui/icons-material'

function GitHubCard() {
  return (
    <Link
      aria-label="Linkedin"
      className="relative col-start-3 row-start-2 flex flex-col items-center justify-center gap-3 rounded-lg bg-gradient-to-br from-[#1A1E22]/80 to-[#0D1117]/30 p-5 shadow-2xl shadow-[#ffff]/30 transition duration-300 ease-in-out hover:scale-[103%] hover:shadow-[#ffff]/50"
      href="https://github.com/Estani02"
      rel="noopener noreferrer"
      target="_blank"
      title="Estani02"
    >
      <GitHub className="h-[293px] w-full max-w-[293px]" />
      <OpenInNewIcon className="absolute right-5 top-5 h-4 w-4 text-[#ffffff77] md:h-6 md:w-6" />
    </Link>
  )
}

export default GitHubCard
