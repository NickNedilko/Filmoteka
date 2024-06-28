import { useEffect, useState } from "react";
import { apiTrendFilms } from "../../services/ApiFilms";
import { FilmsList } from "../../components/FilmsList/FilmsList";
import FilmListLoader from "../../components/FilmListLodaer/FilmListLoder";


const Home = () => {
    const [trendFilms, setTrendFilms] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)



  

    useEffect(() => {
        setIsLoading(true)
        apiTrendFilms().then(({ data }) => {
            setTrendFilms(data.results);
            setIsLoading(false)
            setError('')
        }).catch(error=>setError(error.message));
    }, []);
    

    return (
        <div>
            {error && <h1>{error}</h1>}
            {!error && isLoading? <FilmListLoader/> :<FilmsList films={trendFilms }>Trending Films</FilmsList>}
        </div>
    )
    }

export default Home;