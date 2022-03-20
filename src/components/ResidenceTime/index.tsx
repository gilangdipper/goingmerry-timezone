import { FC } from 'react'

import { RESIDENCE_TIMEZONE } from '../../constants'

import { getCityNameFromTimeZone } from '../../helpers'

import useDateFormatted from '../../hooks/useDateFormatted'
import useGetCurrentDate from '../../hooks/useGetCurrentDate'

import { TimeWrapper } from './styles'

const ResidenceTime: FC = () => {
  const date = useGetCurrentDate()
  const time = useDateFormatted(date, RESIDENCE_TIMEZONE)
  const residence = getCityNameFromTimeZone(RESIDENCE_TIMEZONE)
  return (
    <TimeWrapper>
      <div className="name">{residence}</div>
      <div className="time">{time}</div>
    </TimeWrapper>
  )
}

export default ResidenceTime
