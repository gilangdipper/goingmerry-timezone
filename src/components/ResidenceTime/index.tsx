import { FC } from 'react'

import { RESIDENCE_TIMEZONE } from '../../constants'

import { formatLocalTimeString, getCityNameFromTimeZone } from '../../helpers'

import useGetCurrentDate from '../../hooks/useGetCurrentDate'

import { TimeWrapper } from './styles'

const ResidenceTime: FC = () => {
  const date = useGetCurrentDate()
  const time = formatLocalTimeString(date, RESIDENCE_TIMEZONE)
  const residence = getCityNameFromTimeZone(RESIDENCE_TIMEZONE)
  return (
    <TimeWrapper>
      <div className="name">{residence}</div>
      <div className="time">{time}</div>
    </TimeWrapper>
  )
}

export default ResidenceTime
