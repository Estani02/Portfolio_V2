/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, { useEffect, useState } from 'react'

function Clock() {
  const [time, setTime] = useState('')

  const formatter = new Intl.DateTimeFormat('es-AR', {
    timeZone: 'America/Argentina/Cordoba',
    hour12: false,
    hour: 'numeric',
    minute: 'numeric',
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(formatter.format(new Date()))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return <p className="text-xl font-semibold md:text-3xl">{time}</p>
}

export default Clock
