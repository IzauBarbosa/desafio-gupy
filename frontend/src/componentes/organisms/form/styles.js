import styled from 'styled-components'
import { convertPxToRem } from '../../../helpers'

export const Styles = styled.form``

export const Body = styled.div``

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${convertPxToRem(24)};
  margin-top: ${convertPxToRem(24)};

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`
