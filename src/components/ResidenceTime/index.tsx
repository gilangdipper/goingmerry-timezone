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
    <TimeWrapper data-testid="time-wrapper">
      <div data-testid="time-name" className="name">
        {residence}
      </div>
      <div data-testid="time" className="time">
        {time}
      </div>
    </TimeWrapper>
  )
}

export default ResidenceTime
