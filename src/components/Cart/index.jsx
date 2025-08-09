import { useSelector } from 'react-redux';
import { Container } from './styles';
import Button from '../Button/index';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../store/cartSlice';
import { removeItem } from '../../store/cartSlice'; 
import { useEffect, useState } from 'react';

function Cart() {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);
  const prices = items.reduce((prev, curr)=>{
     return prev + (curr.unitPrice * curr.quantity)
  }, 0);

  useEffect(()=>{
    setTotalPrice (prices);
    localStorage.setItem('cart', JSON.stringify( items ));
  }, [items]);
  
  return (
    <Container>
      <h2 className='cart__title'>Itens no carrinho</h2>
      {items.length === 0 ? (
        <p className='cart__message'>Seu carrinho está vazio</p>
      ) : (
        <ul className='cart__items'>
          {items.map(item => (
            <li key={item.id} className='cart__item'>
              <img src={`${item.thumbnail}.${item.extension}`} alt={item.title} className='cart__item__image'/>
              <p className='cart__item__title'>{item.title}</p>
              <p>R${item.unitPrice.toFixed(2)} - x{item.quantity}</p>
              <p data-cy="total-price">Total: R${(item.quantity * item.unitPrice).toFixed(2)}</p>
              <Button 
                onClick={()=>dispatch(removeItem(item.id))}
                data-cy="remove-item-btn"
                className="remove"
                >
                  Remover item
                </Button>
            </li>
          ))}
        </ul>
      )}

        <p className='cart__total-price'><strong>Total: R$ ${totalPrice}</strong></p>

        <section className='cart__buttons'>
          <Button 
            onClick={()=>dispatch(clearCart(items))}
            data-cy="reset-item-btn"
            className="reset"
          >
            Limpar carrinho
          </Button>
          <Button>Efetuar a compra</Button>
        </section>
    </Container>
  );
}

export default Cart;