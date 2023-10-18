/* eslint-disable no-console */
import type { Root } from '@/interfaces'

import SpotifyWebApi from 'spotify-web-api-node'

const api = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT,
  clientSecret: process.env.SPOTIFY_SECRET,
  redirectUri: process.env.SPOTIFY_REDIRECT,
})

export async function POST() {
  try {
    api.setRefreshToken(process.env.SPOTIFY_REFRESH_TOKEN!)

    const data = await api.refreshAccessToken()

    api.setAccessToken(data.body.access_token)
    const recentTracks = await api.getMyRecentlyPlayedTracks({ limit: 1 })
    const idTracks = recentTracks.body.items[0].track.id

    if (recentTracks.body.items[0].track.preview_url === null) {
      console.log('RapiApi')
      try {
        const response = await fetch(`https://spotify23.p.rapidapi.com/tracks/?ids=${idTracks}`, {
          headers: {
            'X-RapidAPI-Key': process.env.RAPIDAPI_KEY!,
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
          },
        })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const dataRapidAPI = (await response.json()) as Promise<Root>

        return Response.json((await dataRapidAPI).tracks[0])
      } catch (error) {
        console.log('Something went wrong in RapiApi!', error)
      }
    }
    console.log('Api')

    return Response.json(recentTracks.body.items[0].track)
  } catch (error) {
    console.log('Something went wrong!', error)

    return Response.json({ error: error }, { status: 500 })
  }
}
