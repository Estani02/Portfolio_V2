/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use client'

import axios from 'axios'
import React, { useState } from 'react'
import useSWR from 'swr'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import GitHub from '@mui/icons-material/GitHub'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useLocale } from 'next-intl'

import LoaderProjects from '@/assets/LoaderProjects/LoaderProjects'

export interface ProjectsApi {
  id: string
  es: string
  en: string
  pt: string
  img: string
  url: string
  name: string
  github: string
  technologies: string[]
}

function Page() {
  const { data, isLoading } = useSWR('/api/projects', (url) =>
    axios.get(url).then((res) => res.data),
  )

  const local = useLocale()

  const [hoveredCards, setHoveredCards] = useState(data?.map(() => false) || [])

  const handleMouseEnter = (index: number) => {
    const updatedHoveredCards = [...hoveredCards]

    updatedHoveredCards[index] = true
    setHoveredCards(updatedHoveredCards)
  }

  const handleMouseLeave = (index: number) => {
    const updatedHoveredCards = [...hoveredCards]

    updatedHoveredCards[index] = false
    setHoveredCards(updatedHoveredCards)
  }

  return (
    <motion.div
      animate={{ opacity: 1 }}
      className="m-[50px] flex flex-col items-center justify-center gap-[80px] text-white"
      exit={{ opacity: 0.5, y: 100, dur: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <header className="relative flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-tl from-[#cc2b5e]/30 to-[#753a88]/30 p-10 shadow-2xl shadow-[#cc2b5e]/30">
        <Link className="absolute left-1" href="/">
          <KeyboardBackspaceIcon className="inline-block h-[2rem] w-[4rem] text-[#ffffff77] md:h-[4rem] md:w-[6.4rem]" />
        </Link>
        <h3 className="text-2xl font-bold uppercase md:text-4xl">
          {local === 'es' ? 'Proyectos' : local === 'en' ? 'Projects' : 'Projetos'}
        </h3>
      </header>
      <div className="grid h-[70vh] w-full grid-cols-1 justify-items-center gap-10 md:h-auto md:grid-cols-2 xl:grid-cols-3">
        {isLoading ? (
          <>
            <div className="relative flex aspect-square items-center justify-center xl:col-span-1">
              <LoaderProjects />
            </div>
            <div className="relative flex aspect-square items-center justify-center xl:col-span-1">
              <LoaderProjects />
            </div>
            <div className="relative flex aspect-square items-center justify-center xl:col-span-1">
              <LoaderProjects />
            </div>
            <div className="relative flex aspect-square items-center justify-center xl:col-span-1 xl:mt-[300px]">
              <LoaderProjects />
            </div>
          </>
        ) : (
          data?.map((e: ProjectsApi, index: number) => (
            <motion.div
              key={e.id}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col rounded-2xl"
              exit={{ opacity: 0 }}
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <div className="relative z-10 h-[250px] w-full overflow-hidden">
                <div
                  className={`absolute -bottom-full h-full w-full rounded-2xl bg-black/70 p-5 transition-all duration-300 ${
                    hoveredCards[index] ? 'bottom-[0%]' : ''
                  }`}
                >
                  <div className="flex flex-col gap-2">
                    <p className="text-xs">
                      {local === 'es' ? e.es : local === 'en' ? e.en : e.pt}
                    </p>
                    <div className="grid grid-cols-3 justify-items-center gap-5 text-sm">
                      {e.technologies.map((t) => (
                        <p
                          key={index}
                          className="rounded-3xl bg-[#818181] p-1 text-xs xl:px-4 xl:py-2"
                        >
                          {t}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
                <Image
                  alt={e.name}
                  className="h-full w-full rounded-2xl object-cover"
                  height={400}
                  src={e.img}
                  width={400}
                />
              </div>
              <div className="mt-4 flex w-full justify-between text-center font-bold capitalize">
                <Link
                  className="text-[#ffffff77] transition-transform duration-300 hover:scale-125"
                  href={e.github}
                >
                  <GitHub className="inline-block h-[2rem] w-[2rem] text-[#ffffff77]" />
                </Link>
                <h5>{e.name}</h5>
                <Link
                  className="text-[#ffffff77] transition-transform duration-300 hover:scale-125"
                  href={e.url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <OpenInNewIcon className="inline-block h-[2rem] w-[2rem] text-[#ffffff77]" />
                </Link>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </motion.div>
  )
}

export default Page
