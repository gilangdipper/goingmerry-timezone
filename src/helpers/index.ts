import { RESIDENCE_TIMEZONE } from '../constants'

export const getCityNameFromTimeZone = (timeZone: string) => {
  try {
    return timeZone.split('/')[1].replace('_', ' ')
  } catch (e) {
    return ''
  }
}

export const formatLocalTimeString = (
  date: Date,
  timeZone: string = RESIDENCE_TIMEZONE,
) => {
  return date.toLocaleTimeString('en-GB', {
    timeZone,
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })
}
