import React from 'react'

import Reveal from './Reveal/Reveal'

function AboutMe() {
  return (
    <div className="col-span-3 flex h-fit flex-col gap-8 md:text-xl lg:text-2xl">
      <Reveal content="Experimentado en la creacion de soluciones de software perzonalisada según las necesidases" />
      <Reveal content="Me entusiasma el aprendizaje y la exploración de nuevas tecnologías" />
      <Reveal content="Capacitado en el diseño y desarrollo de aplicaciones" />
      <Reveal content="Habilidad de trabajar en proyectos grupales, cumpliéndolos en tiempo y forma" />
      <Reveal content="En busca de oportunidades desafiantes para seguir creciendo en mi carrera como programador" />
    </div>
  )
}

export default AboutMe
