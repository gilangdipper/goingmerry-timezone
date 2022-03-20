import { FC } from 'react'
import styled from 'styled-components'
import useGetTimeZoneDetails from '../../../hooks/useGetTimeZoneDetails'
import { Card } from '../_common/style'

const TimeCardWrapper = styled(Card)`
  .city-name {
    font-size: 20px;
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

interface ITimeCard {
  time: { timeZone: string; label: string }
}

const TimeCard: FC<ITimeCard> = ({ time }) => {
  const { data, isLoading, isError } = useGetTimeZoneDetails({
    timeZone: time.timeZone,
  })
  if (isLoading) {
    return <p>Loading TimeZone Data</p>
  }
  if (!data || isError) return null
  const cityName = data.timezone.split('/')[1].replace('_', ' ')
  return (
    <TimeCardWrapper>
      <div className="city-name">{cityName}</div>
      <div className="label">{time.label}</div>
      <div className="time">23:37</div>
      <div className="timezone">{data.abbreviation}</div>
      <div className="time-diff">6 hours behind Jakarta</div>
    </TimeCardWrapper>
  )
}

export default TimeCard
