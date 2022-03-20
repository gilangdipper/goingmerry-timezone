import { useQuery, UseQueryOptions } from 'react-query'
import axios, { AxiosError, AxiosResponse } from 'axios'

interface ITimeZoneResponse {
  abbreviation: string
  client_ip: string
  datetime: string
  day_of_week: number
  day_of_year: number
  dst: boolean
  dst_from: number | null
  dst_offset: number
  dst_until: number | null
  raw_offset: number
  timezone: string
  unixtime: number
  utc_datetime: string
  utc_offset: string
  week_number: number
}

interface IErrorResponse {
  error: string
}

export const fetchTimeZone = async (
  timeZone?: string,
): Promise<ITimeZoneResponse> => {
  const res: AxiosResponse<ITimeZoneResponse, IErrorResponse> = await axios.get(
    `https://worldtimeapi.org/api/timezone/${timeZone}`,
  )
  return res.data
}

export default function useGetTimeZoneDetails(params?: {
  timeZone: string
  options?: Omit<
    UseQueryOptions<ITimeZoneResponse, AxiosError, ITimeZoneResponse>,
    'queryKey' | 'queryFn'
  >
}) {
  return useQuery(
    `timeZone-${params?.timeZone}`,
    () => fetchTimeZone(params?.timeZone),
    params?.options,
  )
}
