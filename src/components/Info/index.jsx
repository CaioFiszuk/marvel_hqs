import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Container } from './styles';
import { getHqById } from '../../utils/marvelApi';
import NotFound from '../NotFound';

function Info() {
    const location = useLocation();
    const { id } = useParams();
    const [hq, setHq] = useState(location.state?.hq || null);
    const [loading, setLoading] = useState(!location.state?.hq);

    useEffect(() => {
    if (!hq) {
      setLoading(true);
      getHqById(id)
        .then((data) => {
          setHq(data);
        })
        .finally(() => setLoading(false));
    }
  }, [id, hq]);

    if (loading) return <p>Carregando...</p>;
    if (!hq) return <NotFound />;

  return (
    <Container>
         {
            hq && (
                <div className='info-page'>
                   <h2 className='info-page__title'>{hq.title}</h2>
                   <img src={`${hq.thumbnail.path}.${hq.thumbnail.extension}`} className="info-page__image"/>
                   <p className='info-page__description'>{hq.description || "Sem descrição disponível"}</p>
                   <p className='info-page__description'>Edição: {hq.issueNumber}</p>
                   <p className='info-page__description'>Número de páginas: {hq.pageCount || "Não informado"}</p>
                   {hq.characters.items.length > 0 && (
                    <ul className='info-page__characters-list'>
                     <h3 className='info-page__characters-list__title'>Personagens</h3>
                     {hq.characters.items.map((char, idx) => (
                       <li key={idx} className='info-page__characters-item'>{char.name}</li>
                      ))}
                    </ul>
                    )}
                   <p className="info-page__price"><strong>Preço: {hq.prices[0]?.price || 'N/A'}</strong></p>
                </div>
            )
         }
    </Container>
  );
}

export default Info;