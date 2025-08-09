import { useState, useEffect } from 'react';
import { Container } from './styles';
import { getHqs } from '../../utils/marvelApi';
import { Link } from 'react-router-dom';

function Home() {
  const [hqs, setHqs] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const limit = 20;

  const getHqsFromApi = async () => {
    const response = await getHqs(page, limit);
    setHqs(response.results);
    setTotalPages(Math.ceil(response.total / limit));
  }

  useEffect(()=>{
     getHqsFromApi();
  }, [page]);
  return (
    <Container>
       <ul className="main__list">
        {
          hqs.map((hq)=>(
            <li key={hq.id} className="main__item">
              <h2 className="main__item-title">{hq.title}</h2>
              <img src={`${hq.thumbnail.path}.${hq.thumbnail.extension}`} className="main__item-image"/>
              <p className="main__item-price"><strong>Preço: {hq.prices[0]?.price || 'N/A'}</strong></p>
              <Link to={`/info/${hq.id}`} state={{hq}} className='main__item-link'>
                Ver informações
              </Link>
            </li>
         ))
        }
       </ul>

      <div className="main__paginate-buttons">
        <button onClick={() => setPage(prev => Math.max(prev - 1, 1))} disabled={page === 1} className="main__paginate-button">
          Anterior
        </button>
        <span className="main__paginate-info">Página {page} de {totalPages}</span>
        <button onClick={() => setPage(prev => Math.min(prev + 1, totalPages))} disabled={page === totalPages} className="main__paginate-button">
          Próxima
        </button>
      </div>
    </Container>
  );
}

export default Home;
