/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from 'react'

function AbotMe() {
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
    <div className="flex h-[50vh] items-center justify-center text-center text-[2.5rem] font-bold md:text-[5rem]">
      <div className="capitalize">
        <h1>Hola.Soy Estanislao.</h1>
        <span>Un desarrollador Full Stack</span>
      </div>
    </div>
  )
}

export default AbotMe
