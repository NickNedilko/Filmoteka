import { useEffect, useState } from "react";
import { apiTrendFilms } from "../../services/ApiFilms";
import { FilmsList } from "../../components/FilmsList/FilmsList";
import FilmListLoader from "../../components/FilmListLodaer/FilmListLoder";


const Home = () => {
    const [trendFilms, setTrendFilms] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [page, setPage] = useState(1)



    const loadMore = () => setPage(page+1)

  

    useEffect(() => {
        setIsLoading(true)
        apiTrendFilms(page).then(({ data }) => {
            setTrendFilms((prev)=>[...prev, ...data.results]);
            setIsLoading(false)
            setError('')
        }).catch(error=>setError(error.message));
    }, [page]);
    

    return (
        <div>
            {error && <h1>{error}</h1>}
            {!error && isLoading && page===1? <FilmListLoader/> :<FilmsList films={trendFilms } loadMore={loadMore}>Trending Films</FilmsList>}
        </div>
    )
    }

export default Home;