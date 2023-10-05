/* eslint-disable @typescript-eslint/restrict-plus-operands */
'use client'
import type { WeatherRoot } from '@/interfaces'

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useSWR from 'swr'
import Image from 'next/image'

import Clock from '@/components/Weather/Clock'
import Sun from '@/assets/weatherSun/Sun'
import Moon from '@/assets/weatherMoon/Moon'

function WeatherCard() {
  const { data, isLoading } = useSWR('/api/weather/es', (url) =>
    axios.post(url).then((res) => res.data as WeatherRoot),
  )
  
  const [isDaytime, setIsDaytime] = useState(true)
  const [tempInt, setTempInt] = useState(0)

  useEffect(() => {
    if (data) {
      setTempInt(Math.floor(data.main.temp))
      const sunriseTimestamp = data.sys.sunrise * 1000 // Convertimos el timestamp a milisegundos
      const sunsetTimestamp = data.sys.sunset * 1000 // Convertimos el timestamp a milisegundos
      const currentTime = new Date().getTime()

      setIsDaytime(currentTime >= sunriseTimestamp && currentTime < sunsetTimestamp)
    }
  }, [data])

  return (
    <>
      {isLoading ? (
        <div className="col-span-2 row-start-3 w-full rounded-2xl bg-yellow-400 md:h-[245px]">
          <p>Loading...</p>
        </div>
      ) : (
        <div className={`${isDaytime ? 'bg-gradient-to-tr from-[#66aee2] to-[#039be5]/40 shadow-2xl shadow-[#66aee2]' : 'bg-gradient-to-tr from-[#374387] to-[#040f2d] shadow-2xl shadow-[#374387]'} 
        col-span-2 row-start-3 flex h-fit w-full justify-around overflow-hidden rounded-2xl bg-clip-padding p-6 text-white backdrop-blur-sm flex-row-reverse items-center`}>
        {/* <div> */}
          {isDaytime ? <Sun /> : <Moon />}
          <div className="flex flex-col">
            <div className="flex text-sm flex-col md:text-base">
              <p className='text-xl md:text-3xl font-bold'>{data?.name + ', ' + data?.sys.country}</p>
              <Clock />
            </div>
            <div className="flex">
              <p className="text-center text-[50px] font-semibold md:text-[80px]">
                {tempInt + '°'}
              </p>
              <Image
                alt="Tiempo en Argentina"
                className="hidden h-20 w-20 lg:block"
                draggable="false"
                height={100}
                src={`https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`}
                width={100}
              />
            </div>
              <p className="capitalize text-sm md:text-base">{data?.weather[0].description}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default WeatherCard
