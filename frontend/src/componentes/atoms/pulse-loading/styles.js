import styled from 'styled-components'
import { convertPxToRem } from '../../../helpers'
import { colors } from '../../../theme'

export const Styles = styled.span`
  display: block;
  width: ${convertPxToRem(48)};
  height: ${convertPxToRem(48)};
  margin: ${convertPxToRem(64)} auto;
  border-radius: 100%;
  background: ${colors.primary};
  animation: pulseanim 1s ease-in-out infinite;

  @keyframes pulseanim {
    0% { transform: scale(0); opacity: 0.8;}
    100% { transform: scale(1); opacity: 0;}
  }
`
