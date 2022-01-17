import styled from 'styled-components'
import { colors } from './theme'
import { convertPxToRem } from './helpers'

export const Styles = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  min-height: 100vh;
  font: ${convertPxToRem(16)} Roboto, sans-serif;
  color: ${colors.neutralBlackLight};
  background: ${colors.neutralWhiteLight};
`
