import { FC, useMemo, useState } from 'react'

import Select from './Select'

import { AddCardWrapper } from './styles'

const CITY_LIST = [
  { name: 'Singapore', value: 'Asia/Singapore' },
  { name: 'Tokyo', value: 'Asia/Tokyo' },
  { name: 'Seoul', value: 'Asia/Seoul' },
  { name: 'Melbourne', value: 'Australia/Melbourne' },
  { name: 'Sydney', value: 'Australia/Sydney' },
  { name: 'London', value: 'Europe/London' },
  { name: 'Paris', value: 'Europe/Paris' },
  { name: 'Berlin', value: 'Europe/Berlin' },
  { name: 'New York', value: 'America/New_York' },
  { name: 'Los Angeles', value: 'America/Los_Angeles' },
]

interface IAddCard {
  addTimeList: (time: string, label: string) => void
  timeList: { timeZone: string; label: string }[]
}

const AddCard: FC<IAddCard> = ({ addTimeList, timeList }) => {
  const [showAddForm, setShowAddForm] = useState(false)
  const [city, setCity] = useState('')
  const [label, setLabel] = useState('')
  const options = useMemo(() => {
    const timeZoneList = timeList.map((time) => time.timeZone)
    const cityListFiltered = CITY_LIST.filter(
      (cityConfig) => !timeZoneList.includes(cityConfig.value),
    )
    return cityListFiltered
  }, [timeList])
  const handleSubmit = () => {
    addTimeList(city, label)
    setShowAddForm(false)
  }

  return (
    <AddCardWrapper>
      {showAddForm ? (
        <>
          <div className="section">
            <div className="label">Select City</div>
            <Select
              options={options}
              value={city}
              onChange={(item) => setCity(item.value)}
              placeholder="Select city"
            />
          </div>
          <div className="section">
            <div className="label">Label</div>
            <input
              type="text"
              placeholder="Input label"
              onChange={(e) => setLabel(e.target.value)}
            />
          </div>
          <div className="section">
            <button type="button" onClick={handleSubmit} disabled={!city}>
              Add time
            </button>
          </div>
        </>
      ) : (
        <div className="section">
          <button
            type="button"
            className="show-form"
            onClick={() => setShowAddForm(true)}
          >
            +
          </button>
        </div>
      )}
    </AddCardWrapper>
  )
}

export default AddCard
