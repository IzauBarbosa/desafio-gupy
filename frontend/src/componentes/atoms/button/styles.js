import styled from 'styled-components'
import { convertPxToRem } from '../../../helpers'
import { colors } from '../../../theme'

export const Styles = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${convertPxToRem(12)} ${convertPxToRem(24)};
  font-size: ${convertPxToRem(12)};
  text-transform: uppercase;
  border: ${convertPxToRem(2)} solid;
  border-radius: ${convertPxToRem(8)};
  cursor: pointer;
  transition: background 0.35s linear, border 0.35s linear;
  overflow: hidden;

  > .span {
    position: relative;
  }

  &.primary {
    color: ${colors.neutralWhiteLight};
    background: ${colors.primary};
    border-color: ${colors.primaryDark};
    
    &:hover {
      background: ${colors.primaryDark};
      border-color: ${colors.primary};
    }
  }

  &.default {
    color: ${colors.neutralBlackLight};
    background: ${colors.neutralWhiteLight};
    border-color: ${colors.neutralWhiteBase};
    
    &:hover {
      background: ${colors.neutralWhiteBase};
    }
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &.loading {
    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      bottom: 0;
      background: rgba(0,0,0,.25);
      animation: loading 1s infinite alternate;

      @keyframes loading {
        from {
          width: 0;
        }
        to {
          width: 100%;
        }
      }
    }

    &:disabled {
      opacity: 1;
    }
  }
`
