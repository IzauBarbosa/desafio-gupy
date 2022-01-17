import styled from 'styled-components'
import { convertPxToRem } from '../../../helpers'

export const Styles = styled.div`
  margin: ${convertPxToRem(24)} auto;
`

export const Header = styled.div`
  margin-bottom: ${convertPxToRem(24)};

  .logo {
    margin: 0 auto;
  }
`

export const Body = styled.div``
