import { Link } from 'react-router-dom';
import { Container } from './styles';
import { IoWarningSharp } from 'react-icons/io5';
import Button from '../Button/index';

function NotFound() {

  return (
    <Container>
      <IoWarningSharp className='error-page__sign'/>
      <h2>404</h2>
      <h3>Parece que o Thanos apagou esa página...</h3>
      <Button>
        <Link to="/">Voltar para a Home</Link>
      </Button>
    </Container>
  );
}

export default NotFound;