import styled from 'styled-components'

const TimeCardWrapper = styled.div`
  box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%),
    0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);
  display: flex;
  width: 100%;
  flex-direction: column;
  border-radius: 4px;
  text-align: center;
  padding: 10px 0;

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
