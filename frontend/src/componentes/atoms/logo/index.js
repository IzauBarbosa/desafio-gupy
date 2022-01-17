import { Styles } from './styles'
import { logoPrimary, logoSecondary } from '../../../assets'

export const Logo = ({ color }) => {
  return (
    <Styles className="logo">
      <img src={color === 'primary' ? logoPrimary : logoSecondary} alt="Gupy" />
    </Styles>
  )
}
