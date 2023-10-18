import axios from 'axios'

export async function POST() {
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=cordoba,argentina&appid=${process.env.WEATHER_KEY}&units=metric`,
  )

  return Response.json(res.data)
}
