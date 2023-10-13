/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import type { ResponseFixture } from '@/interfaces'

async function getInfo() {
  try {
    const commonHeaders = {
      'x-rapidapi-host': 'v3.football.api-sports.io',
      'x-rapidapi-key': process.env.NEXT_PUBLIC_FOOTBALL_KEY!,
    }

    const fetchData = async (query: string) => {
      const url = `https://v3.football.api-sports.io/fixtures?team=456&${query}&timezone=America/Argentina/Cordoba`
      const response = await fetch(url, {
        headers: commonHeaders,
        // next: { revalidate: 12 * 60 * 60 * 1000 },
      })

      // Verifica si la respuesta fue exitosa
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.status}`)
      }

      // Convierte la respuesta a JSON
      const data = await response.json()

      // Devuelve el primer resultado
      return data.response[0] as ResponseFixture
    }

    const [lastMatchData, nextMatchData] = await Promise.all([
      fetchData('last=1'),
      fetchData('next=1'),
    ])

    const transformMatchData = (matchData: ResponseFixture) => {
      return {
        teams: {
          home: {
            name: matchData.teams.home.name,
            logo: matchData.teams.home.logo,
            winner: matchData.teams.home.winner,
          },
          away: {
            name: matchData.teams.away.name,
            logo: matchData.teams.away.logo,
            winner: matchData.teams.away.winner,
          },
        },
        fixture: {
          timezone: matchData.fixture.timezone,
          date: matchData.fixture.date,
          timestamp: matchData.fixture.timestamp,
        },
        status: {
          long: matchData.fixture.status.long,
          short: matchData.fixture.status.short,
          elapsed: matchData.fixture.status.elapsed,
        },
        league: {
          name: matchData.league.name,
          country: matchData.league.country,
          logo: matchData.league.logo,
          flag: matchData.league.flag,
          season: matchData.league.season,
          round: matchData.league.round,
        },
        goals: {
          home: matchData.goals.home,
          away: matchData.goals.away,
        },
        score: {
          halftime: {
            home: matchData.score.halftime.home,
            away: matchData.score.halftime.away,
          },
          fulltime: {
            home: matchData.score.fulltime.home,
            away: matchData.score.fulltime.away,
          },
          extratime: {
            home: matchData.score.extratime.home,
            away: matchData.score.extratime.away,
          },
          penalty: {
            home: matchData.score.penalty.home,
            away: matchData.score.penalty.away,
          },
        },
      }
    }

    const lastMatch = transformMatchData(lastMatchData)
    const nextMatch = transformMatchData(nextMatchData)

    const jsonResponse = {
      last_match: lastMatch,
      next_match: nextMatch,
    }

    return jsonResponse
  } catch (error) {
    console.error('Error:', error)

    return { error: error }
  }
}

export async function POST() {
  const matches = await getInfo()

  console.log('+1 peticion')

  return Response.json(matches)
}
