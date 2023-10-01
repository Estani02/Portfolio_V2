'use client'

import axios from 'axios'
import useSWR from 'swr'

import AbotMe from '@/components/AbotMe'
import CertificateCard from '@/components/CertificateCard'
import SpotifyCard from '@/components/Spotify/SpotifyCard'
import WeatherCard from '@/components/Weather/WeatherCard'

export default function Home() {
  const { data, isLoading } = useSWR('/api/random', (url) => axios.get(url).then((res) => res.data))

  console.log(data)

  return (
    <main className="flex flex-col gap-[80px] bg-black px-7 py-[50px] text-white">
      <AbotMe />
      <CertificateCard />
      <SpotifyCard />
      <WeatherCard />
    </main>
  )
}
