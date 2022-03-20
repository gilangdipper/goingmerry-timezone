import { FC, useCallback, useState } from 'react'
import styled from 'styled-components'
import AddCard from './AddCard'
import TimeCard from './TimeCard'

const TimeListWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;

  .time {
    flex: 0 0 calc(25% - 20px);
    padding: 0 10px;
    position: relative;

    .delete-time {
      display: none;
      position: absolute;
      top: -8px;
      right: 2px;
      cursor: pointer;
    }

    &:hover {
      .delete-time {
        display: block;
      }
    }
  }
`

const WorldTimeList: FC = () => {
  const [timeList, setTimeList] = useState([
    { timeZone: 'Asia/Seoul', label: '' },
    { timeZone: 'Europe/Berlin', label: '' },
  ])
  const showAddCard = timeList.length < 4
  const addTimeList = (timeZone: string, label: string) =>
    setTimeList((prev) => [...prev, { timeZone, label }])
  const deleteTimeList = useCallback(
    (timeZone: string) =>
      setTimeList(timeList.filter((time) => time.timeZone !== timeZone)),
    [timeList],
  )

  return (
    <TimeListWrapper>
      {timeList.map((item) => (
        <div key={item.timeZone} className="time">
          <TimeCard time={item} />
          <button
            type="button"
            className="delete-time"
            onClick={() => deleteTimeList(item.timeZone)}
          >
            x
          </button>
        </div>
      ))}
      {showAddCard && (
        <div className="time">
          <AddCard addTimeList={addTimeList} timeList={timeList} />
        </div>
      )}
    </TimeListWrapper>
  )
}

export default WorldTimeList
