import styled from 'styled-components'

import ResidenceTime from './components/ResidenceTime'
import WorldTimeList from './components/WorldTimeList'

const AppWrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  background: #355c7d;
  background: linear-gradient(to right, #c06c84, #6c5b7b, #355c7d);
  color: #fff;

  .time-wrapper {
    display: flex;
    width: 100%;
    max-width: 768px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export default function App() {
  return (
    <AppWrapper>
      <div className="time-wrapper">
        <ResidenceTime />
        <WorldTimeList />
      </div>
    </AppWrapper>
  )
}
