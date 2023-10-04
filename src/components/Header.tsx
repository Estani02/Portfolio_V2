/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from 'react'

import DeskAnimation from '@/assets/DeskAnimation/DeskAnimation'

import Reveal from './Reveal/Reveal'

function Header() {
  // const [confettiPaused, setConfettiPaused] = useState(false)

  // function hove() {
  //   if (!confettiPaused) {
  //     confetti({
  //       particleCount: 150,
  //       spread: 150,
  //       origin: {
  //         x: 0.5,
  //         y: 0,
  //       },
  //       angle: 180,
  //     })
  //     setConfettiPaused(true)

  //     // Establece un tiempo de pausa antes de permitir que el confeti se active nuevamente
  //     setTimeout(() => {
  //       setConfettiPaused(false)
  //     }, 1000) // 2000 milisegundos (2 segundos) de pausa
  //   }
  // }

  return (
    <header className="flex h-[100vh] items-center justify-between font-bold">
      <div className="flex flex-col gap-4 text-[2.5rem] capitalize lg:text-[5rem]">
        <Reveal content="Estanislao Olmedo" />
        <Reveal content="Desarrollador Full Stack" />
      </div>
      <DeskAnimation />
    </header>
  )
}

export default Header
