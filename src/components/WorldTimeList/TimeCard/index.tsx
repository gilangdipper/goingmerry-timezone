import { FC } from 'react'

import useGetTimeZoneDetails from '../../../hooks/useGetTimeZoneDetails'
import useDateFormatted from '../../../hooks/useDateFormatted'
import useGetCurrentDate from '../../../hooks/useGetCurrentDate'

import { getCityNameFromTimeZone } from '../../../helpers'

import { RESIDENCE_TIMEZONE } from '../../../constants'

import { TimeCardWrapper } from './styles'

const getDiffTimeText = (time1: string, time2: string) => {
  const time1Number = Number(time1.split(':')[0])
  const time2Number = Number(time2.split(':')[0])
  const diff = time1Number - time2Number
  const text = diff > 0 ? 'hours behind' : 'hours ahead'
  return `${Math.abs(diff)} ${text}`
}

interface ITimeCard {
  time: { timeZone: string; label: string }
}

const TimeCard: FC<ITimeCard> = ({ time }) => {
  const { data, isLoading } = useGetTimeZoneDetails({
    timeZone: time.timeZone,
  })
  const date = useGetCurrentDate()
  const timeFormatted = useDateFormatted(date, data?.timezone)
  const residenceTime = useDateFormatted(date, RESIDENCE_TIMEZONE)
  const diffTimeText = getDiffTimeText(residenceTime, timeFormatted)
  const residence = getCityNameFromTimeZone(RESIDENCE_TIMEZONE)
  const cityName = getCityNameFromTimeZone(data?.timezone || '')

  if (isLoading) {
    return <p>Loading TimeZone...</p>
  }
  if (!data) return null

  return (
    <TimeCardWrapper>
      <div className={`city-name ${!time.label && 'margin-bottom-18'}`}>
        {cityName}
      </div>
      <div className="label">{time.label}</div>
      <div className="time">{timeFormatted}</div>
      <div className="timezone">{data.abbreviation}</div>
      <div className="time-diff">
        {diffTimeText} {residence}
      </div>
    </TimeCardWrapper>
  )
}

export default TimeCard
