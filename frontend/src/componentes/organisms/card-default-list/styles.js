import styled from 'styled-components'
import { breakpoint } from '../../../theme'
import { convertPxToRem } from '../../../helpers'

export const Styles = styled.div``

export const Row = styled.div`
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
  margin: -${convertPxToRem(8)};
`

export const Col = styled.div`
  height: 100%;
  padding: ${convertPxToRem(8)};

  > .card-default {
    height: 100%;
  }

  @media screen and (min-width: ${breakpoint.tabletPortraiteUp}) {
    width: 33.33%;
  }

  @media screen and (min-width: ${breakpoint.mobileUp}) and (max-width: ${breakpoint.tabletPortraiteDown}) {
    width: 50%;
  }

  @media screen and (max-width: ${breakpoint.mobileDown}) {
    width: 100%;
  }
`
