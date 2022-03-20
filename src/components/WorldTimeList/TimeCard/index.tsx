import { FC } from 'react'
import styled from 'styled-components'

import useGetTimeZoneDetails from '../../../hooks/useGetTimeZoneDetails'
import useDateFormatted from '../../../hooks/useDateFormatted'
import useGetCurrentDate from '../../../hooks/useGetCurrentDate'

import { Card } from '../_common/style'
import { RESIDENCE_TIMEZONE } from '../../../constants'

const TimeCardWrapper = styled(Card)`
  .city-name {
    font-size: 20px;
    &.margin-bottom-14 {
      margin-bottom: 14px;
    }
  }
  .label {
    font-size: 12px;
  }
  .time {
    font-size: 40px;
    margin: 40px 0;
  }
  .timezone {
    font-size: 16px;
  }
  .time-diff {
    font-size: 12px;
  }
`

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
  const { data, isLoading, isError } = useGetTimeZoneDetails({
    timeZone: time.timeZone,
  })
  const cityName = data?.timezone.split('/')[1].replace('_', ' ')
  const { date } = useGetCurrentDate()
  const timeFormatted = useDateFormatted(date, data?.timezone)
  const residenceTime = useDateFormatted(date, RESIDENCE_TIMEZONE)
  const diffTimeText = getDiffTimeText(residenceTime, timeFormatted)
  const residence = RESIDENCE_TIMEZONE.split('/')[1]

  if (isLoading) {
    return <p>Loading TimeZone...</p>
  }
  if (!data || isError) return null

  return (
    <TimeCardWrapper>
      <div className={`city-name ${!time.label && 'margin-bottom-14'}`}>
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
