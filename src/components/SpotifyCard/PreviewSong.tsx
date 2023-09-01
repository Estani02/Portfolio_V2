/* eslint-disable jsx-a11y/media-has-caption */
import React, { useRef, useState } from 'react'
import PauseIcon from '@mui/icons-material/Pause'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'

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
    <div className="flex w-fit flex-row py-4">
      <audio ref={audioRef} src={song} onEnded={() => setIsPlaying(false)} />
      <button
        className="rounded-full bg-[#1ed760] px-3 active:scale-90"
        disabled={!song}
        type="button"
        onClick={togglePlay}
      >
        {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
      </button>
      <SongWaves pause={isPlaying} />
    </div>
  )
}
