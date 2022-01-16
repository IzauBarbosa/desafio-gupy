import { useNavigate } from 'react-router-dom';
import { setItem } from '../../../services/localStorage';
import { Container, Button } from '../../atoms';
import { Styles } from './styles';

export const Header = () => {

  const navigate = useNavigate();

  const handleSignOut = (e) => {
    e.preventDefault();
    
    setItem('user', null);
    navigate('/');
  }

  return (
    <Styles>
      <Container>
        <Button type="button" onClick={handleSignOut}>Sair</Button>
      </Container>
    </Styles>
  )
}