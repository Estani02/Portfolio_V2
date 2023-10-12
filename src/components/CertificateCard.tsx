'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import confetti from 'canvas-confetti'

import henry from '@/assets/images/mockups_henry.png'

function CertificateCard() {
  const [confettiPaused, setConfettiPaused] = useState(false)

  function hove() {
    if (!confettiPaused) {
      void confetti({
        particleCount: 150,
        spread: 150,
        origin: {
          x: 0.85,
          y: 0.8,
        },
        // angle: 180,
      })
      setConfettiPaused(true)

      // Establece un tiempo de pausa antes de permitir que el confeti se active nuevamente
      setTimeout(() => {
        setConfettiPaused(false)
      }, 3000) // 2000 milisegundos (2 segundos) de pausa
    }
  }
  const [hoverCard, setHoverCard] = useState(false)

  const handleMouseEnter = () => {
    setHoverCard(true)
    hove()
  }

  const handleMouseLeave = () => {
    setHoverCard(false)
  }

  return (
    <Link
      aria-label="Certificado"
      className="relative col-start-4 row-start-5 flex w-full max-w-md justify-center overflow-hidden rounded-2xl bg-[#0B0D0F] p-5 text-white shadow-2xl shadow-[#FFFF01]/30 transition duration-300 ease-in-out hover:scale-[103%] hover:shadow-[#FFFF01]/50 md:max-w-lg"
      href="https://certificates.soyhenry.com/new-cert?id=5e82bb1f0e32c3860281fabc7393aa0fea2aa5a4e528ee7ca697fb838b5126b8"
      rel="noopener noreferrer"
      target="_blank"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        alt="Programador Certificado"
        className={`${
          hoverCard && 'bottom-[-90px] md:bottom-[-65px]'
        } absolute -bottom-24 transition-all duration-300`}
        src={henry}
      />
      <div className="mt-14">
        <p className="relative z-50 text-xl font-bold md:text-2xl">Full Stack Developer</p>
        <p className="text-center text-[#ffffff77] md:text-lg">Soy Henry - 2023</p>
      </div>
      <OpenInNewIcon className="absolute right-5 top-5 h-4 w-4 text-[#ffffff77] md:h-6 md:w-6" />
    </Link>
  )
}

export default CertificateCard
