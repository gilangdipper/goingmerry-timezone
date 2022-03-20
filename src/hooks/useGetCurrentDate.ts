import { useEffect, useState } from 'react'

const ONE_SECOND = 1000

export default function useGetCurrentDate() {
  const [date, setDate] = useState<Date>(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date())
    }, ONE_SECOND)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return { date }
}
