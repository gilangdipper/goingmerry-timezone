import { FC, useEffect, useMemo, useRef, useState } from 'react'

import { SelectWrapper } from './styles'

type TOptions = {
  name: string
  value: string
}

interface ISelect {
  onChange: (optionValue: TOptions) => void
  options: TOptions[]
  placeholder?: string
  value: string
}

const Select: FC<ISelect> = ({ options, placeholder, onChange, value }) => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [optionsVisible, setOptionsVisible] = useState<boolean>(false)
  const optionActive = useMemo(
    () => options.filter((option) => option.value === value)[0],
    [value, options],
  )

  const handleClickOutside = (event: MouseEvent) => {
    if (wrapperRef && wrapperRef.current) {
      if (
        event.target instanceof Node &&
        !wrapperRef.current.contains(event.target)
      ) {
        setOptionsVisible(false)
      }
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <SelectWrapper
      className="select-component"
      ref={wrapperRef}
      hasPlaceholder={!!placeholder && !optionActive?.name}
    >
      <button
        type="button"
        className="placeholder"
        onClick={() => setOptionsVisible(true)}
      >
        {optionActive?.name || placeholder || '-'}
      </button>
      <div className="options-wrapper">
        <div className={`options ${optionsVisible && 'show'}`}>
          {options.map((option) => (
            <button
              type="button"
              className={`option-item ${
                option.value === optionActive?.value && 'active'
              }`}
              key={`${option.value}`}
              onClick={() => {
                setOptionsVisible(false)
                onChange(option)
              }}
            >
              {option.name}
            </button>
          ))}
        </div>
      </div>
    </SelectWrapper>
  )
}

export default Select
