/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable jsx-a11y/media-has-caption */
'use client'
import type { Track } from '@/interfaces'

import axios from 'axios'
import Image from 'next/image'
import useSWR from 'swr'

import noise from '@/assets/images/loading.gif'

import { Marquee } from '../Marquee/Marquee'

import { PreviewSong } from './PreviewSong'

export default function SpotifyCard() {
  const { data, isLoading } = useSWR('/api/nowplaying', (url) =>
    axios.post(url).then((res) => res.data as Track),
  )

  return (
    <section className="col-start-3 row-start-3 flex h-fit w-full max-w-md justify-center overflow-hidden rounded-2xl bg-gradient-to-tl from-[#cc2b5e]/30 to-[#753a88]/30 px-2 py-3 text-[#ffffff77] shadow-2xl shadow-white/30 backdrop-blur-sm md:max-w-lg md:flex-col md:p-4 md:pb-6">
      <div className="flex gap-2">
        <Image
          alt={data?.name || 'Song coverpage'}
          className="h-[100px] w-[100px] object-cover md:h-[150px] md:w-[150px]"
          draggable="false"
          height={150}
          loading="lazy"
          src={data?.album.images[0].url || noise}
          width={150}
        />
        <div className="flex flex-col">
          <p className="text-base font-bold md:text-lg">Recently listened</p>
          <Marquee link={data?.external_urls.spotify} loading={isLoading} text={data?.name} />
          <p className={`text-xs md:text-sm ${isLoading && 'text-transparent'}`}>
            {isLoading ? 'Loading..' : data?.artists[0].name}
          </p>
          <PreviewSong song={data?.preview_url} />
        </div>
      </div>
    </section>
  )
}
