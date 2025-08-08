import { Container } from './styles';
import { FaShoppingCart } from "react-icons/fa";

function Header() {

  return (
    <Container>
        <h1 className='header__title'>Marvel HQ's</h1>

        <FaShoppingCart className='header__cart'/>
    </Container>
  );
}

export default Header;