import React from 'react'
import Image from 'next/image'
import { BsArrowRightShort } from 'react-icons/bs'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

import bg_gif from '@/assets/images/proyect.gif'

function ProjectsCard() {
  const t = useTranslations('projects')

  return (
    <Link
      className="relative col-start-3 row-start-4 h-full w-full cursor-pointer rounded-2xl object-cover text-white shadow-2xl shadow-white/30 transition duration-300 ease-in-out hover:scale-[103%] hover:shadow-white/50 xl:col-span-1 xl:col-start-4 xl:row-span-2 xl:row-start-2"
      href="/projects"
    >
      <Image
        alt="Espacio de trabajo de programador"
        className="absolute h-full rounded-2xl object-cover brightness-[0.42]"
        src={bg_gif}
      />
      <div className="relative flex h-full flex-col p-2 md:p-3 xl:p-5">
        <div className="flex-1" />
        <div className="flex flex-1 flex-col justify-end gap-4">
          <div className="flex w-full items-center justify-between">
            <p className="text-lg font-bold capitalize xl:text-3xl">{t('title')}</p>
            <BsArrowRightShort className="h-4 w-4 text-[#ffffff77] md:h-6 md:w-6" />
          </div>
          <div className="text-xs md:text-sm xl:text-base">
            <p>{t('p_1')}</p>
            <p>{t('p_2')}</p>
          </div>
          <p />
        </div>
      </div>
    </Link>
  )
}

export default ProjectsCard
