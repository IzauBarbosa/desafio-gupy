import styled from 'styled-components'
import { convertPxToRem } from '../../../helpers'

export const Styles = styled.h1`
  font-size: ${({ size }) => {
    switch (size) {
      case 'big':
        return convertPxToRem(48)
      case 'large':
        return convertPxToRem(36)
      case 'medium':
        return convertPxToRem(24)
      case 'small':
        return convertPxToRem(18)
      default:
        return convertPxToRem(22)
    }
  }};
`
