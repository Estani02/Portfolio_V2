export function updateCountdown(matchData: string) {
  const matchDataT = new Date(matchData).getTime()
  const currentDate = new Date().getTime()

  const difference = matchDataT - currentDate

  if (difference >= 0) {
    return difference
  }
}
