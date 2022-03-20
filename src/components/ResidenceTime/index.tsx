import { FC } from 'react'
import styled from 'styled-components'
import { RESIDENCE_TIMEZONE } from '../../constants'
import useDateFormatted from '../../hooks/useDateFormatted'
import useGetCurrentDate from '../../hooks/useGetCurrentDate'

const TimeWrapper = styled.div`
  display: flex;
  width: auto;
  flex-direction: column;
  text-align: center;
  margin-bottom: 24px;

  .name {
    font-size: 20px;
  }

  .time {
    font-size: 40px;
  }
`

const ResidenceTime: FC = () => {
  const { date } = useGetCurrentDate()
  const time = useDateFormatted(date, RESIDENCE_TIMEZONE)
  const residence = RESIDENCE_TIMEZONE.split('/')[1]
  return (
    <TimeWrapper>
      <div className="name">{residence}</div>
      <div className="time">{time}</div>
    </TimeWrapper>
  )
}

export default ResidenceTime
