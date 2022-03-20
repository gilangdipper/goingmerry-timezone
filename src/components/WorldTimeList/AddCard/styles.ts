import styled from 'styled-components'
import { Card } from '../_common/styles'

export const SelectWrapper = styled.div<{ hasPlaceholder: boolean }>`
  display: block;
  position: relative;
  z-index: 1;
  border-radius: 4px;
  border: 1px solid #fff;

  button {
    border: 0;
    margin: 0;
    background: transparent;
    cursor: pointer;
  }

  button.placeholder {
    width: 100%;
    font-size: 14px;
    padding: 4px;
    font-weight: 500;
    color: #fff;
    text-align: left;

    ${({ hasPlaceholder }) =>
      hasPlaceholder &&
      `
      font-style: italic;
      color: #999;
    `}
  }

  .options-wrapper {
    position: absolute;
    width: 100%;
    margin-top: 2px;

    .options {
      height: 0;
      width: auto;
      max-height: 0;
      overflow: hidden;
      overflow-y: scroll;
      -webkit-transition: max-height 0.5s ease;
      display: flex;
      flex-flow: column;
      background: #fff;

      &.show {
        height: auto;
        max-height: 120px;
        -webkit-transition: max-height 0.5s ease;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
        border-radius: 4px;
      }

      .option-item {
        padding: 8px;
        display: flex;
        font-weight: 500;
        font-size: 12px;
        padding: 6px 18px;
        color: rgba(0, 0, 0, 0.75);
        align-items: center;

        &.active {
          background: #c06c84;
          color: rgba(255, 255, 255, 0.75);
          font-weight: bold;
        }

        &:hover {
          background: #78d3db;
        }

        svg {
          width: 10px;
          margin: 0 4px;
        }
      }
    }
  }
`

export const AddCardWrapper = styled(Card)`
  height: calc(100% - 20px);
  display: flex;
  justify-content: center;

  .section {
    display: flex;
    flex-direction: column;
    padding: 0 8px;
    margin-bottom: 20px;

    &:last-child {
      margin: 0;
    }

    .label {
      font-size: 14px;
      margin-bottom: 4px;
    }

    > input {
      padding: 4px;
      border-radius: 4px;
      border: 1px solid #fff;
      background: transparent;
      font-size: 14px;
      color: #fff;

      &::placeholder {
        font-style: italic;
        color: #999;
      }

      &:focus-visible {
        outline: 0;
      }
    }

    > button {
      width: 100%;
      border-radius: 4px;
      border: 0;
      padding: 6px 4px;
      background: #c06c84;
      color: #fff;
      cursor: pointer;

      &:disabled {
        background-color: #cccccc;
        color: #666666;
      }

      &.show-form {
        width: auto;
        align-self: center;
        padding: 8px 20px;
        border-radius: 50%;
        font-size: 40px;
        background: #355c7d;
      }
    }
  }
`
