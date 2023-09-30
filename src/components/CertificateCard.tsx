/* eslint-disable @next/next/no-img-element */
/* eslint-disable tailwindcss/no-contradicting-classname */
import Image from 'next/image'
import React from 'react'

import dev from '@/assets/images/certificado_dev.png'

function CertificateCard() {
  return (
    <div className="flex w-full max-w-md items-center rounded-2xl bg-[#0B0D0F] p-5 shadow-2xl shadow-[#04D361] md:max-w-lg">
      <div className="h-40 w-40 rounded-[50%]">
        <Image alt="Programador" className="h-full w-full rounded-[50%] object-cover" src={dev} />
      </div>
      <p>Programador Full Stack</p>
    </div>
  )
}

export default CertificateCard
