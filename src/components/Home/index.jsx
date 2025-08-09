import { useState, useEffect } from 'react';
import { Container } from './styles';
import Button from '../Button/index';
import { getHqs } from '../../utils/marvelApi';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../store/cartSlice'; 

function Home() {
  const [hqs, setHqs] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const limit = 20;
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const getHqsFromApi = async () => {
    const response = await getHqs(page, limit);
    setHqs(response.results);
    setTotalPages(Math.ceil(response.total / limit));
  }

  useEffect(()=>{
     getHqsFromApi();
  }, [page]);

  useEffect(()=>{
      localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);
  
  return (
    <Container>
       <ul className="main__list">
        {
          hqs.length > 0 ? (
              hqs.map((hq)=>{
               const price = hq.prices[0]?.price || 0;
               if (price === 0) return null;
               return (
              <li key={hq.id} className="main__item">
              <h2 className="main__item-title">{hq.title}</h2>
              <img src={`${hq.thumbnail.path}.${hq.thumbnail.extension}`} className="main__item-image"/>
              <p className="main__item-price"><strong>Preço: {hq.prices[0]?.price}</strong></p>
              <Link to={`/info/${hq.id}`} state={{hq}} className='main__item-link'>
                Ver informações
              </Link>

              <Button onClick={() => {
                dispatch(addItem({
                            id: hq.id,
                            title: hq.title,
                            price: hq.prices[0]?.price || 0,
                            thumbnail: hq.thumbnail.path,
                            extension: hq.thumbnail.extension
                        }));      
              }}
              >
                Adicionar ao carrinho
              </Button>

            </li>
         )})
          ) : (
            <p className="main__error-message">Nenhuma HQ encontrada</p>
          )
        }
       </ul>

      <section className="main__paginate-buttons">
        <button onClick={() => setPage(prev => Math.max(prev - 1, 1))} disabled={page === 1} className="main__paginate-button">
          Anterior
        </button>
        <span className="main__paginate-info">Página {page} de {totalPages}</span>
        <button onClick={() => setPage(prev => Math.min(prev + 1, totalPages))} disabled={page === totalPages} className="main__paginate-button">
          Próxima
        </button>
      </section>
    </Container>
  );
}

export default Home;

/**
 * 
 * hqs.map((hq)=>{
               const price = hq.prices[0]?.price || 0;
               if (price === 0) return null;
               return (
              <li key={hq.id} className="main__item">
              <h2 className="main__item-title">{hq.title}</h2>
              <img src={`${hq.thumbnail.path}.${hq.thumbnail.extension}`} className="main__item-image"/>
              <p className="main__item-price"><strong>Preço: {hq.prices[0]?.price}</strong></p>
              <Link to={`/info/${hq.id}`} state={{hq}} className='main__item-link'>
                Ver informações
              </Link>

              <Button onClick={() => {
                dispatch(addItem({
                            id: hq.id,
                            title: hq.title,
                            price: hq.prices[0]?.price || 0,
                            thumbnail: hq.thumbnail.path,
                            extension: hq.thumbnail.extension
                        }));      
              }}
              >
                Adicionar ao carrinho
              </Button>

            </li>
         )})
 */