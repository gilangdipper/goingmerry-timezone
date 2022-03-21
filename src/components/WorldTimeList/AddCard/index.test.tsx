import { render, fireEvent } from '@testing-library/react'
import AddCard from '.'

describe('Add Card', () => {
  const addTimeList = jest.fn()
  const component = <AddCard addTimeList={addTimeList} timeList={[]} />

  test('render add card wrapper properly', () => {
    const { getByTestId } = render(component)
    expect(getByTestId('add-card-wrapper')).toBeInTheDocument()
  })

  test('render show add form properly', () => {
    const { queryByTestId, getByTestId, getByLabelText } = render(component)
    expect(queryByTestId('section-select-city')).toBeNull()

    fireEvent.click(getByTestId('button-show-form'))
    expect(getByTestId('section-select-city')).toBeInTheDocument()

    fireEvent.change(getByLabelText('label-input'), {
      target: {
        value: 'gilang al khansa',
      },
    })
    expect(getByLabelText('label-input')).toHaveValue('gilang al khansa')
  })
})
