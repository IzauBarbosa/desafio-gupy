import styled from 'styled-components'
import { convertPxToRem } from '../../../helpers'

export const Styles = styled.div`
  width: 100%;
  max-width: ${({ size }) => {
    switch (size) {
      case 'big':
        return convertPxToRem(1200)
      case 'large':
        return convertPxToRem(920)
      case 'small':
        return convertPxToRem(480)
      default:
        return convertPxToRem(640)
    }
  }};
  margin: 0 auto;
  padding: 0 ${convertPxToRem(24)};
`
