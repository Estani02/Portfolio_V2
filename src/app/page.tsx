'use client'

import AbotMe from '@/components/AbotMe'
import CertificateCard from '@/components/CertificateCard'
import SpotifyCard from '@/components/Spotify/SpotifyCard'
import WeatherCard from '@/components/Weather/WeatherCard'

export default function Home() {
  return (
    <main className="flex flex-col gap-[80px] bg-black px-7 py-[50px] text-white">
      <AbotMe />
      <CertificateCard />
      <SpotifyCard />
      <WeatherCard />
    </main>
  )
}
