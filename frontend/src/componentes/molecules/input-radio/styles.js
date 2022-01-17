import styled from 'styled-components'
import { convertPxToRem } from '../../../helpers'
import { colors } from '../../../theme'

export const Styles = styled.div`
  + * {
    margin-top: ${convertPxToRem(16)};
  }
`
export const Group = styled.div`
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
  gap: ${convertPxToRem(8)};
`

export const Radio = styled.div`
  flex: 1;
  height: 100%;
  
  > .input:checked {
    + .label::before {
      background: ${colors.primary};
    }
  }

  > .label {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    text-align: center;
    padding: ${convertPxToRem(16)};
    background: ${colors.neutralWhiteBase};
    border-radius: ${convertPxToRem(8)};
    cursor: pointer;
    
    &::before {
      content: '';
      display: block;
      width: ${convertPxToRem(12)};
      height: ${convertPxToRem(12)};
      margin: 0 auto ${convertPxToRem(8)};
      border-radius: 100%;
      background: ${colors.neutralWhiteLight};
    }
  }
`
