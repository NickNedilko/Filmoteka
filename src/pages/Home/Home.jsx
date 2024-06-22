import { useEffect, useState } from "react";
import { apiTrendFilms } from "../../services/ApiFilms";


const Home = () => {
    const [trendFilms, setTrendFilms] = useState(null)


    useEffect(() => {
        apiTrendFilms().then(({ data }) => {
            setTrendFilms(data.results);
        });
    }, []);
    

    return (
        <div>
            <h1>Trending Movies</h1>
            <ul>
                          {trendFilms?.map(({ id, title, poster_path, vote_average
            }) => (
                <li key={id}>
                                  <h2>{title}</h2>
                                  <img src={poster_path} alt={title} />
                                  <p>{vote_average}</p>
                </li>
 ))}
  </ul>
        </div>
    )
    }

export default Home;