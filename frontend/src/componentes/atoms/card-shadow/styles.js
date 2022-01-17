import styled from 'styled-components'
import { convertPxToRem } from '../../../helpers'

export const Styles = styled.div`
  padding: ${convertPxToRem(24)};
  border-radius: ${convertPxToRem(8)};
  box-shadow: 0 ${convertPxToRem(8)} ${convertPxToRem(24)} rgba(0, 0, 0, 0.1);
`
