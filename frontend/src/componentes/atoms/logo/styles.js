import styled from 'styled-components'
import { convertPxToRem } from '../../../helpers'

export const Styles = styled.span`
  display: block;
  width: 100%;
  max-width: ${convertPxToRem(124)};

  > img {
    display: block;
    max-width: 100%;
  }
`
