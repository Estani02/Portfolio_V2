import React from 'react'
import Image from 'next/image'
import EastIcon from '@mui/icons-material/East'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

import bg_gif from '@/assets/images/proyect.gif'

function ProjectsCard() {
  const t = useTranslations('projects')

  return (
    <Link
      className="relative col-start-4 row-span-2 row-start-2 h-full w-full cursor-pointer rounded-2xl object-cover text-white shadow-2xl shadow-white/30 transition duration-300 ease-in-out hover:scale-[103%] hover:shadow-white/50"
      href="/projects"
    >
      <Image
        alt="Espacio de trabajo de programador"
        className="absolute h-full rounded-2xl object-cover brightness-[0.42]"
        src={bg_gif}
      />
      <div className="relative flex h-full flex-col p-5">
        <div className="flex-1" />
        <div className="flex flex-1 flex-col justify-end gap-4">
          <div className="flex w-full justify-between">
            <p className="text-3xl font-bold capitalize">{t('title')}</p>
            <EastIcon className="h-4 w-4 text-[#ffffff77] md:h-6 md:w-6" />
          </div>
          <div>
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
