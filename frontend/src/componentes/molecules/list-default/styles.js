import styled from 'styled-components'
import { convertPxToRem } from '../../../helpers'
import { colors } from '../../../theme'

export const Styles = styled.div`
  > .ul {
    padding-top: ${convertPxToRem(24)};
    border-top: ${convertPxToRem(2)} solid ${colors.primary};
    
    > .li {
      + .li {
        margin-top: ${convertPxToRem(24)};
        padding-top: ${convertPxToRem(24)};
        border-top: ${convertPxToRem(2)} solid ${colors.neutralWhiteBase};
      }
    } 
  }
`
