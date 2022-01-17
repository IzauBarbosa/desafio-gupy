import styled from 'styled-components'
import { convertPxToRem } from '../../../helpers'
import { colors } from '../../../theme'

export const Styles = styled.div``

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${convertPxToRem(24)};
  margin-bottom: ${convertPxToRem(24)};

  > a {
    display: block;
    color: ${colors.primary};
  }
`

export const Body = styled.div``
