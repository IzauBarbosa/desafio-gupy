import styled from 'styled-components'
import { convertPxToRem } from '../../../helpers'
import { colors } from '../../../theme'

export const Styles = styled.span`
  display: block;
  width: ${convertPxToRem(8)};
  height: ${convertPxToRem(8)};
  border-radius: 100%;
  overflow: hidden;
  text-indent: -9999px;
  background: ${({ status }) => {
    switch (status) {
      case 'success':
        return '#28a745'
      case 'warning':
        return '#ffc107'
      case 'danger':
        return '#dc3545'
      default:
        return colors.primary
    }
  }};
`
