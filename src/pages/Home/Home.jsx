import { useEffect, useState } from "react";
import { apiTrendFilms } from "../../services/ApiFilms";
import { FilmsList } from "../../components/FilmsList/FilmsList";


const Home = () => {
    const [trendFilms, setTrendFilms] = useState(null)
  

    useEffect(() => {
        apiTrendFilms().then(({ data }) => {
            setTrendFilms(data.results);
        });
    }, []);
    

    return (
        <div>
            <FilmsList films={trendFilms }>Trending Films</FilmsList>
        </div>
    )
    }

export default Home;