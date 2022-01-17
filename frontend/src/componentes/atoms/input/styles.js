import styled from 'styled-components'
import { convertPxToRem } from '../../../helpers'
import { colors } from '../../../theme'

export const Styles = styled.input`
  outline: none;

  &[type='text'],
  &[type='email'],
  &[type='password'] {
    display: block;
    width: 100%;
    padding: ${convertPxToRem(16)} ${convertPxToRem(24)};
    color: ${colors.neutralBlackBase};
    background: ${colors.neutralWhiteBase};
    border: 0;
    border-radius: ${convertPxToRem(8)};
  }

  &[type='radio'],
  &[type='checkbox'] {
    display: none;
  }

  &:focus {
    box-shadow: 0 0 ${convertPxToRem(4)} ${colors.secondary};

    &:invalid {
      box-shadow: 0 0 ${convertPxToRem(4)} red;
    }
  }
`
