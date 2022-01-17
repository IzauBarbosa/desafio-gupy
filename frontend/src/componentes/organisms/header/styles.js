import styled from 'styled-components'
import { convertPxToRem } from '../../../helpers'
import { colors } from '../../../theme'

export const Styles = styled.header`
  margin-bottom: ${convertPxToRem(48)};
  padding: ${convertPxToRem(24)} 0;
  background: ${colors.primary};

  > .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${convertPxToRem(24)};
  }
`
