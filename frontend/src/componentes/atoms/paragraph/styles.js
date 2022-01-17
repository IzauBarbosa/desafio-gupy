import styled from 'styled-components'
import { convertPxToRem } from '../../../helpers'

export const Styles = styled.p`
  font-size: ${({ size }) => {
    switch (size) {
      case 'big':
        return convertPxToRem(24);
      case 'large':
        return convertPxToRem(22);
      case 'medium':
        return convertPxToRem(18);
      case 'small':
        return convertPxToRem(14);
      default:
        return convertPxToRem(16);
    }
  }}
`
