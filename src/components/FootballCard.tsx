'use client'
import type { RootFootball } from '@/interfaces'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import useSWR from 'swr'
import axios from 'axios'

import '@/assets/LiveIcon.css'

import players from '@/assets/images/Talleres-min.png'
import bg from '@/assets/images/bg_talleres.jpg'
import { updateCountdown } from '@/utils/updateCountdown'

function FootballCard() {
  const [countdown, setCountdown] = useState(0)

  const { data } = useSWR(
    '/api/football',
    (url) => axios.get(url).then((res) => res.data as RootFootball),
    { focusThrottleInterval: countdown, revalidateOnFocus: false, refreshInterval: countdown },
  )

  useEffect(() => {
    if (data) {
      setCountdown(updateCountdown(data.next_match.fixture.date_format)!)
    }
  }, [data])

  return (
    <div className="relative -z-20 col-span-2 row-start-5 overflow-hidden rounded-2xl bg-gradient-to-br from-[#fffd2d]/80 to-[#fffd2d]/30 shadow-2xl shadow-[#040d2d]/30">
      <Image
        alt="Escudo de Talleres, equipo de Estanislao"
        className="absolute -z-20 h-full w-full object-cover brightness-[.32]"
        src={bg}
      />
      {data ? (
        <>
          <Image
            alt="Talleres, equipo de Estanislao"
            className="absolute -right-28 bottom-0 -z-10 h-[60%] w-[60%] object-cover brightness-[.77] transition-transform duration-200 hover:scale-110"
            src={players}
          />
          <div className="relative flex h-full flex-col items-center gap-4 p-5">
            <p className="text-3xl font-bold">Próximo partido de Talleres</p>
            <div className="flex gap-4 border-b border-[#b0b0b0] pb-1">
              <Image
                alt={data.next_match.league.name}
                height={20}
                src={data.next_match.league.logo}
                width={30}
              />
              <p>
                {data.next_match.league.name} - {data.next_match.league.round}
              </p>
            </div>
            <div className="flex h-fit gap-14">
              <Image
                alt={data.next_match.teams.home.name}
                className="h-fit"
                height={150}
                src={data.next_match.teams.home.logo}
                width={80}
              />
              {data.next_match.status.short === 'LIVE' ? (
                <div className="flex items-center justify-center gap-1">
                  <div className="circle" />
                  <p className="mb-5">EN VIVO</p>
                </div>
              ) : (
                <div className="flex flex-col text-center font-bold">
                  <p className="text-3xl">{data.next_match.fixture.time}</p>
                  <span className="text-[10px] text-[#b0b0b0]">(GMT-3)</span>
                  <p className="text-lg text-[#b0b0b0]">{data.next_match.fixture.date.es}</p>
                </div>
              )}
              <Image
                alt={data.next_match.teams.away.name}
                className="h-fit"
                height={150}
                src={data.next_match.teams.away.logo}
                width={80}
              />
            </div>
            <div className="absolute bottom-0 left-0 flex flex-col items-center gap-2 p-5">
              <div className="flex flex-col items-center gap-1">
                <p className="text-sm font-semibold">Ultimo partido</p>
                <div className="flex gap-1">
                  <Image
                    alt={data.last_match.league.name}
                    height={10}
                    src={data.last_match.league.logo}
                    width={20}
                  />
                  <p className="text-sm text-[#b0b0b0]">
                    {data.last_match.league.name}
                    {/* &nbsp; {data.last_match.league.round} */}
                  </p>
                </div>
              </div>
              <div className="flex h-fit gap-8">
                <Image
                  alt={data.last_match.teams.home.name}
                  className="h-fit"
                  height={150}
                  src={data.last_match.teams.home.logo}
                  width={30}
                />
                <p className="text-lg">
                  {data.last_match.score.fulltime.home}-{data.last_match.score.fulltime.away}
                </p>
                <Image
                  alt={data.last_match.teams.away.name}
                  className="h-fit"
                  height={150}
                  src={data.last_match.teams.away.logo}
                  width={30}
                />
              </div>
            </div>
          </div>
        </>
      ) : (
        <div />
      )}
    </div>
  )
}

export default FootballCard
