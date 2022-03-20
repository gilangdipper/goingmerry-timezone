import { RESIDENCE_TIMEZONE } from '../constants'

export default function useDateFormatted(
  date: Date,
  timeZone: string = RESIDENCE_TIMEZONE,
) {
  return date.toLocaleTimeString('en-GB', {
    timeZone,
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })
}
