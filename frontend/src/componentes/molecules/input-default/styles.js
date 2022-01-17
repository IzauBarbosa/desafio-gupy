import styled from 'styled-components'
import { convertPxToRem } from '../../../helpers'

export const Styles = styled.div`
  + * {
    margin-top: ${convertPxToRem(16)};
  }
`
