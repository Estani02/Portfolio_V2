/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use client'

import axios from 'axios'
import React, { useState } from 'react'
import useSWR from 'swr'
import { MdOpenInNew } from 'react-icons/md'
import { BsArrowLeft } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'
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
  const [isLoaded, setIsLoaded] = useState(false)

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
          <BsArrowLeft className="inline-block h-[2rem] w-[4rem] text-[#ffffff77] md:h-[4rem] md:w-[6.4rem]" />
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
            <div className="relative flex aspect-square items-center justify-center xl:col-span-1 xl:mt-[300px]">
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
                {isLoaded ? null : (
                  <div className="absolute flex h-full w-[400px] items-center justify-center bg-black/60">
                    <div role="status">
                      <svg
                        aria-hidden="true"
                        className="mr-2 h-8 w-8 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600"
                        fill="none"
                        viewBox="0 0 100 101"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div>
                )}
                <Image
                  alt={e.name}
                  className="h-full w-full rounded-2xl object-cover"
                  height={400}
                  src={e.img}
                  width={400}
                  onLoad={() => setIsLoaded(true)}
                />
              </div>
              <div className="mt-4 flex w-full justify-between text-center font-bold capitalize">
                <Link
                  className="text-[#ffffff77] transition-transform duration-300 hover:scale-125"
                  href={e.github}
                >
                  <AiFillGithub className="inline-block h-[2rem] w-[2rem] text-[#ffffff77]" />
                </Link>
                <h5>{e.name}</h5>
                <Link
                  className="text-[#ffffff77] transition-transform duration-300 hover:scale-125"
                  href={e.url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <MdOpenInNew className="inline-block h-[2rem] w-[2rem] text-[#ffffff77]" />
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
