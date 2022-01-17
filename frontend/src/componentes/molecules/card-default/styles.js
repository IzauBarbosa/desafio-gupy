import styled from 'styled-components'
import { convertPxToRem } from '../../../helpers'
import { colors, breakpoint } from '../../../theme'

export const Styles = styled.div``

export const Header = styled.div`
  .title {
    font-weight: bold;
    text-transform: uppercase;
  }
`

export const Body = styled.div`
  margin-top: ${convertPxToRem(16)};
  padding-top: ${convertPxToRem(16)};
  border-top: ${convertPxToRem(2)} solid ${colors.neutralWhiteBase};

  .paragraph {
    + .paragraph {
      margin-top: ${convertPxToRem(8)};
    }
  }
`

export const Footer = styled.div`
  margin-top: ${convertPxToRem(24)};

  @media screen and (min-width: ${breakpoint.mobileUp}) {
    > .button {
      margin: 0 auto;
    }
  }
`
