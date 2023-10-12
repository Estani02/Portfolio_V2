/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use client'

import axios from 'axios'
import React from 'react'
import useSWR from 'swr'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import Link from 'next/link'

function Page() {
  const { data, isLoading } = useSWR('/api/projects', (url) =>
    axios.get(url).then((res) => res.data),
  )

  return (
    <div className="m-[50px] flex flex-col items-center justify-center gap-[80px]">
      <header className="relative flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-tl from-[#cc2b5e]/30 to-[#753a88]/30 p-5 text-4xl font-bold uppercase shadow-2xl shadow-[#cc2b5e]/30">
        <Link href="/">
          <KeyboardBackspaceIcon className="h-[100px] w-[100px] text-[#ffffff77]" />
        </Link>
        <h3>Proyectos</h3>
      </header>
    </div>
  )
}

export default Page
