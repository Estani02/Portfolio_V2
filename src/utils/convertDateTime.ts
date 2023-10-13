export function convertDateTime(inputDateTime: string) {
  const dateTime = new Date(inputDateTime)

  const day = dateTime.getDate()

  const monthNamesEs = [
    'ene',
    'feb',
    'mar',
    'abr',
    'may',
    'jun',
    'jul',
    'ago',
    'sep',
    'oct',
    'nov',
    'dic',
  ]
  const monthEs = monthNamesEs[dateTime.getMonth()]

  const monthNamesEn = [
    'jan',
    'feb',
    'mar',
    'apr',
    'may',
    'jun',
    'jul',
    'aug',
    'sep',
    'oct',
    'nov',
    'dec',
  ]
  const monthEn = monthNamesEn[dateTime.getMonth()]

  const hours = dateTime.getHours().toString().padStart(2, '0')
  const minutes = dateTime.getMinutes().toString().padStart(2, '0')

  const result = {
    day: {
      es: `${day} ${monthEs}`,
      en: `${day} ${monthEn}`,
    },
    time: `${hours}:${minutes}`,
  }

  return result
}
