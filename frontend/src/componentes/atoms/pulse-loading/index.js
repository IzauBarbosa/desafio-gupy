import { Styles } from './styles'

export const PulseLoading = ({ status }) => {
  return <Styles className="bullet" {...{ status }} />
}
