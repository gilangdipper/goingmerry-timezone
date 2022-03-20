import styled from 'styled-components'
import TimeCard from './TimeCard'

const TimeListWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;

  .time {
    flex: 0 0 calc(25% - 20px);
    padding: 0 10px;
  }
`

const WorldTimeList = () => {
  return (
    <TimeListWrapper>
      {[1, 2, 3, 4].map((item) => (
        <div key={item} className="time">
          <TimeCard />
        </div>
      ))}
    </TimeListWrapper>
  )
}

export default WorldTimeList
