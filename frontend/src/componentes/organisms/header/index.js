import { useNavigate } from 'react-router-dom'
import { setItem } from '../../../services'
import { Container, Button, Logo } from '../../atoms'
import { Styles } from './styles'

export const Header = () => {
  const navigate = useNavigate()

  const handleSignOut = (e) => {
    e.preventDefault()

    setItem('user', null)
    navigate('/')
  }

  return (
    <Styles className="header">
      <Container size="big">
        <Logo color="secondary" />
        <Button type="button" onClick={handleSignOut} theme="default">
          Sair
        </Button>
      </Container>
    </Styles>
  )
}
