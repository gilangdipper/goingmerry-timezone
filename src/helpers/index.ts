export const getCityNameFromTimeZone = (timeZone: string) => {
  try {
    return timeZone.split('/')[1].replace('_', ' ')
  } catch (e) {
    return ''
  }
}
