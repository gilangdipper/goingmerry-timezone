import { render } from '@testing-library/react'
import ResidenceTime from '.'

jest.mock('../../helpers', () => {
  return {
    getCityNameFromTimeZone: () => 'Jakarta',
    formatLocalTimeString: () => '23:37',
  }
})

describe('Residence Time', () => {
  test('render time wrapper properly', () => {
    const { getByTestId } = render(<ResidenceTime />)
    expect(getByTestId('time-wrapper')).toBeInTheDocument()
  })
  test('render time name properly', () => {
    const { getByTestId } = render(<ResidenceTime />)
    expect(getByTestId('time-name').textContent).toBe('Jakarta')
  })
  test('render time properly', () => {
    const { getByTestId } = render(<ResidenceTime />)
    expect(getByTestId('time').textContent).toBe('23:37')
  })
})
