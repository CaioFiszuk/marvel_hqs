import { Link } from 'react-router-dom';
import { Container } from './styles';

function NotFound() {

  return (
    <Container>
      <h2>404</h2>
      <h3>Parece que o Thanos apagou esa página...</h3>
      <Link to="/">Voltar para a Home</Link>
    </Container>
  );
}

export default NotFound;