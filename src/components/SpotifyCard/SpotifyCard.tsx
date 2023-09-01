/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable jsx-a11y/media-has-caption */
'use client'
import type { Track } from '@/interfaces'

import axios from 'axios'
import Image from 'next/image'
import { useEffect } from 'react'
import useSWR from 'swr'

import noise from '@/assets/images/loading.gif'

import { Marquee } from '../Marquee/Marquee'

import { PreviewSong } from './PreviewSong'

export default function SpotifyCard() {
  const { data, isLoading } = useSWR('/api/nowplaying', (url) =>
    axios.get(url).then((res) => res.data.result as Track),
  )

  useEffect(() => {
    // console.log(isLoading)
  }, [data, isLoading])

  return (
    <section className="flex w-full max-w-md flex-col items-center overflow-hidden rounded-2xl bg-white/30 p-4 pb-6 backdrop-blur-sm md:max-w-lg md:flex-col md:items-start">
      <div className="flex flex-col items-center gap-2 md:flex-row md:items-start">
        <Image
          alt={data?.name || 'Song coverpage'}
          className="h-[200px] w-[200px] object-cover"
          height={200}
          loading="lazy"
          src={data?.album.images[0].url || noise}
          width={200}
        />
        <div className="flex flex-col items-center md:items-start">
          <p className="text-lg font-bold text-[#0000005a]">Recently listened</p>
          <Marquee link={data?.external_urls.spotify} loading={isLoading} text={data?.name} />
          <p
            className={`text-sm font-semibold text-[#0000005a] ${isLoading && 'text-transparent'}`}
          >
            {isLoading ? 'Loading...' : data?.artists[0].name}
          </p>
          <PreviewSong song={data?.preview_url} />
        </div>
      </div>
    </section>
  )
}
