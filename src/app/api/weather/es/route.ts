import axios from 'axios'

export async function GET() {
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=cordoba,argentina&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&units=metric&&lang=es`,
  )

  return Response.json(res.data)
}
