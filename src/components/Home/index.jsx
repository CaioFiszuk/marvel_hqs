import { useState, useEffect } from "react";
import { getHqs } from "../../utils/marvelApi";

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
    <main>
       <ul>
        {
          hqs.map((hq)=>(
            <li key={hq.id}>
              <h3>{hq.title}</h3>
              <img src={`${hq.thumbnail.path}.${hq.thumbnail.extension}`}/>
              <p>Preço: {hq.prices[0]?.price || 'N/A'}</p>
            </li>
         ))
        }
       </ul>

        <div>
        <button onClick={() => setPage(prev => Math.max(prev - 1, 1))} disabled={page === 1}>
          Anterior
        </button>
        <span>Página {page} de {totalPages}</span>
        <button onClick={() => setPage(prev => Math.min(prev + 1, totalPages))} disabled={page === totalPages}>
          Próxima
        </button>
      </div>
    </main>
  );
}

export default Home;
