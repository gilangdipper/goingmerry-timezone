import styled from 'styled-components'

export const TimeListWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  justify-content: center;

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
      background: #ff4b1f;
      background: linear-gradient(to right, #ff9068, #ff4b1f);
      border-radius: 50%;
      color: #fff;
      border: 0;
      font-size: 16px;
      padding: 2px 8px;
    }

    &:hover {
      .delete-time {
        display: block;
      }
    }
  }
`
