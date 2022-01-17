import styled from 'styled-components'
import { convertPxToRem } from '../../../helpers'

export const Styles = styled.div`
  .list-default {
    p {
      strong {
        font-weight: bold;
      }

      + p {
        margin-top: ${convertPxToRem(8)};
      }
    }
  }
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${convertPxToRem(24)};
  margin-bottom: ${convertPxToRem(8)};

  > a {
    display: block;
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

export const Body = styled.div``
