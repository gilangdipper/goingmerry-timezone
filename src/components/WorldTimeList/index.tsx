import { FC, useCallback, useState } from 'react'

import AddCard from './AddCard'
import TimeCard from './TimeCard'

import { TimeListWrapper } from './styles'

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
