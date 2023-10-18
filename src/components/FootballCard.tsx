/* eslint-disable @typescript-eslint/no-unnecessary-condition */
'use client'
import type { RootFootball } from '@/interfaces/football_api'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import useSWR from 'swr'
import axios from 'axios'

import '@/assets/LiveIcon.css'

import { useLocale } from 'next-intl'

import players from '@/assets/images/Talleres-min.png'
import bg from '@/assets/images/bg_talleres.jpg'
import { updateCountdown } from '@/utils/updateCountdown'
import { convertDateTime } from '@/utils/convertDateTime'

function FootballCard({
  translated_text,
}: {
  translated_text: { last_match: string; next_match: string }
}) {
  const locale = useLocale()
  const [countdown, setCountdown] = useState(1000000)
  const [hoverCard, setHoverCard] = useState(false)
  const [date, setDate] = useState({
    day: {
      es: '',
      en: '',
    },
    time: '',
  })

  const { data } = useSWR(
    '/api/football',
    (url) => axios.post(url).then((res) => res.data as RootFootball),
    {
      focusThrottleInterval: countdown === 0 ? 600000 : countdown,
      revalidateOnFocus: false,
      refreshInterval: countdown === 0 ? 600000 : countdown,
    },
  )

  useEffect(() => {
    if (data) {
      setCountdown(updateCountdown(data.next_match.fixture.date)!)
      setDate(convertDateTime(data.next_match.fixture.date))
    }
  }, [data])

  const handleMouseEnter = () => {
    setHoverCard(true)
  }

  const handleMouseLeave = () => {
    setHoverCard(false)
  }

  return (
    <div
      className={`relative col-span-2 row-start-6 h-full w-full cursor-pointer overflow-hidden rounded-2xl text-white shadow-2xl shadow-[#040d2d]/30 transition-transform duration-200 xl:row-start-5 ${
        hoverCard && 'scale-[103%]'
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        alt="Escudo de Talleres, equipo de Estanislao"
        className="absolute -z-20 h-full w-full object-cover brightness-[.32]"
        src={bg}
      />
      {data ? (
        <>
          <Image
            alt="Talleres, equipo de Estanislao"
            className={`absolute -right-28 bottom-0 -z-10 h-[60%] w-[60%] object-cover brightness-[.77] transition-transform duration-200 ${
              hoverCard && 'z-50 scale-110'
            }`}
            src={players}
          />
          <div className="relative flex h-full flex-col items-center gap-4 p-5">
            <p className="font-bold md:text-lg xl:text-3xl">{translated_text.next_match}</p>
            <div className="flex gap-4 border-b border-[#b0b0b0] pb-1">
              <Image
                alt={data.next_match.league.name}
                height={20}
                src={data.next_match.league.logo}
                width={30}
              />
              <p className="text-xs md:text-sm xl:text-base">
                {data.next_match.league.name}
                {/* - {data.next_match.league.round} */}
              </p>
            </div>
            <div className="flex h-fit gap-4 text-xs md:text-sm xl:gap-14 xl:text-base">
              <Image
                alt={data.next_match.teams.home.name}
                className="h-fit w-full max-w-[40px] md:max-w-[80px]"
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
                  <p className="text-lg xl:text-3xl">{date.time}</p>
                  <span className="text-[10px] text-[#b0b0b0]">(GMT-3)</span>
                  <p className="text-[#b0b0b0] xl:text-lg">
                    {locale === 'en' ? date.day.en : date.day.es}
                  </p>
                </div>
              )}
              <Image
                alt={data.next_match.teams.away.name}
                className="h-fit w-full max-w-[40px] md:max-w-[80px]"
                height={150}
                src={data.next_match.teams.away.logo}
                width={80}
              />
            </div>
            <div className="absolute bottom-0 left-0 hidden flex-col items-center gap-2 p-5 xl:flex">
              <div className="flex flex-col items-center gap-1">
                <p className="text-sm font-semibold">{translated_text.last_match}</p>
                <div className="flex gap-1">
                  <Image
                    alt={data.last_match.league.name}
                    height={10}
                    src={data.last_match.league.logo}
                    width={20}
                  />
                  <p className="text-sm text-[#b0b0b0]">{data.last_match.league.name}</p>
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
                {data.last_match.status.long !== 'Match Finished' ? (
                  <div className="flex flex-col items-center justify-center gap-1">
                    <p className="text-lg">
                      {data.last_match.goals.home}-{data.last_match.goals.away}
                    </p>
                    <div className="flex items-center justify-center gap-1">
                      <div className="circle" />
                      <p className="mb-5">EN VIVO</p>
                    </div>
                  </div>
                ) : (
                  <div className="text-center">
                    <p className="text-lg">
                      {data.last_match.score.fulltime.home}-{data.last_match.score.fulltime.away}
                    </p>
                    {data.last_match.status.short === 'PEN' ? (
                      <p className="text-[12px] text-[#b0b0b0]">
                        ({data.last_match.score.penalty.away}-{data.last_match.score.penalty.home})
                      </p>
                    ) : null}
                  </div>
                )}
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
