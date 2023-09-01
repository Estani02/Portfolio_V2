import type { Root } from '@/interfaces'

import { NextResponse } from 'next/server'
import SpotifyWebApi from 'spotify-web-api-node'

const api = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT,
  clientSecret: process.env.NEXT_PUBLIC_SPOTIFY_SECRET,
  redirectUri: 'http://localhost:3000/api/nowplaying',
})

export async function GET() {
  try {
    api.setRefreshToken(process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN!)

    const data = await api.refreshAccessToken()

    api.setAccessToken(data.body.access_token)
    const recentTracks = await api.getMyRecentlyPlayedTracks({ limit: 1 })
    const idTracks = recentTracks.body.items[0].track.id

    try {
      const response = await fetch(`https://spotify23.p.rapidapi.com/tracks/?ids=${idTracks}`, {
        headers: {
          'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY!,
          'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
        },
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const dataRapidAPI = (await response.json()) as Promise<Root>

      return NextResponse.json({ success: true, result: (await dataRapidAPI).tracks[0] })
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('Something went wrong!', error)
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Something went wrong!', error)
  }
}
