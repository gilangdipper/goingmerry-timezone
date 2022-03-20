import styled from 'styled-components'
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

const TimeCard = () => {
  return (
    <TimeCardWrapper>
      <div className="city-name">London</div>
      <div className="label">My Hometown</div>
      <div className="time">23:37</div>
      <div className="timezone">BST</div>
      <div className="time-diff">6 hours behind Jakarta</div>
    </TimeCardWrapper>
  )
}

export default TimeCard
