import { Container } from './styles';
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
 const cart = useSelector(state => state.cart);
 const cartItens = cart.items.length > 0 ? cart.items.length : null;

  return (
    <Container>
        <Link to={'/'} className='header__link'>
          <h1 className='header__title'>Marvel HQ's</h1>
        </Link>

        <Link to={'/cart'} className='header__link header__link-cart'>
          <FaShoppingCart className='header__cart'/>
        </Link>

        <span className='header__cart-length'>{cartItens}</span>
    </Container>
  );
}

export default Header;