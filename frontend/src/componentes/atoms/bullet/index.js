import { Styles } from './styles'

export const Bullet = ({ status }) => {
  return <Styles className="bullet" {...{ status }} />
}
