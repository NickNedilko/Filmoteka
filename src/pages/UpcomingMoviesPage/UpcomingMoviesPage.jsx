import { useEffect, useState } from "react";
import { apiUpComingFilms } from "../../services/ApiFilms";
import { FilmsList } from "../../components/FilmsList/FilmsList";
import FilmListLoader from "../../components/FilmListLodaer/FilmListLoder";


const UpcomingMoviesPage = () => {
    const [upComingFilms, setUpComingFilms] = useState([])
       const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [page, setPage] = useState(1)



    const loadMore = () => setPage(page+1)
  



    useEffect(() => {
        setIsLoading(true)
        apiUpComingFilms(page).then(({ data }) => {
            setUpComingFilms((prev)=>[...prev, ...data.results]);
            setIsLoading(false)
            setError('')
        }).catch(error=>setError(error.message));
    }, [page]);

 
    

    return (
        <div>
            {error && <h1>{error}</h1>}
            {!error && isLoading && page===1? <FilmListLoader/> :<FilmsList films={upComingFilms} loadMore={loadMore}>Upcoming Films</FilmsList>}
        </div>
        
    )
    }

export default UpcomingMoviesPage;


