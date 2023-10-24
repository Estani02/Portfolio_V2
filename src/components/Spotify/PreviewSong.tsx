/* eslint-disable jsx-a11y/media-has-caption */
import React, { useRef, useState } from 'react'
import { BsPauseFill } from 'react-icons/bs'
import { BsPlayFill } from 'react-icons/bs'

import { SongWaves } from './SongWaves/SongWaves'

export function PreviewSong({ song }: { song: string | undefined }) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = () => {
    if (audioRef.current) {
      void (isPlaying ? audioRef.current.pause() : audioRef.current.play())
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="flex w-fit flex-row items-center md:py-4">
      <audio ref={audioRef} src={song} onEnded={() => setIsPlaying(false)} />
      <button
        className="flex h-[30px] w-[30px] items-center justify-center rounded-[50%] bg-[#1ed760] active:scale-90 md:h-[40px] md:w-[40px]"
        disabled={!song}
        type="button"
        onClick={togglePlay}
      >
        {isPlaying ? (
          <BsPauseFill className="h-4 w-4 text-black md:h-[24px] md:w-[24px]" />
        ) : (
          <BsPlayFill className="h-4 w-4 text-black md:h-[24px] md:w-[24px]" />
        )}
      </button>
      <SongWaves pause={isPlaying} />
    </div>
  )
}
