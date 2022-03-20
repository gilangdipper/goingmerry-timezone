import styled from 'styled-components'
import { Card } from '../_common/styles'

export const TimeCardWrapper = styled(Card)`
  .city-name {
    font-size: 20px;
    margin-bottom: 4px;
    &.margin-bottom-18 {
      margin-bottom: 18px;
    }
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
