import styled from 'styled-components'

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

const ResidenceTime = () => {
  return (
    <TimeWrapper>
      <div className="name">Jakarta</div>
      <div className="time">09:00</div>
    </TimeWrapper>
  )
}

export default ResidenceTime
