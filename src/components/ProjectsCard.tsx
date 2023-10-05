import React from 'react'
import Image from 'next/image'
import EastIcon from '@mui/icons-material/East'

import bg_gif from '@/assets/images/proyect.gif'

function ProjectsCard() {
  return (
    <div className="relative col-start-4 row-span-2 row-start-1 h-full w-full cursor-pointer rounded-2xl object-cover text-white  shadow-2xl shadow-white/30 transition duration-300 ease-in-out hover:scale-[103%] hover:shadow-white/50">
      <Image
        alt="Espacio de trabajo de programador"
        className="absolute h-full rounded-2xl object-cover brightness-[0.42]"
        src={bg_gif}
      />
      <div className="relative flex h-full flex-col p-5">
        <div className="flex-1" />
        <div className="flex flex-1 flex-col justify-end gap-4">
          <div className="flex w-full justify-between">
            <p className="text-3xl font-bold capitalize">Proyectos</p>
            <EastIcon className="h-4 w-4 text-[#ffffff77] md:h-6 md:w-6" />
          </div>
          <div>
            <p>Te invito a que eches un vistazo a los trabajos que he realizado.</p>
            <p>Vas a encontrar proyectos de diversas complejidades.</p>
          </div>
          <p />
        </div>
      </div>
    </div>
  )
}

export default ProjectsCard
