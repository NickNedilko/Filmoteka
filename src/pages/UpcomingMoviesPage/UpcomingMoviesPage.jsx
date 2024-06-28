import { useEffect, useState } from "react";
import { apiUpComingFilms } from "../../services/ApiFilms";
import { FilmsList } from "../../components/FilmsList/FilmsList";
import FilmListLoader from "../../components/FilmListLodaer/FilmListLoder";


const UpcomingMoviesPage = () => {
    const [upComingFilms, setUpComingFilms] = useState(null)
       const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
  



    useEffect(() => {
        setIsLoading(true)
        apiUpComingFilms().then(({ data }) => {
            setUpComingFilms(data.results);
            setIsLoading(false)
            setError('')
        }).catch(error=>setError(error.message));
    }, []);

 
    

    return (
        <div>
            {error && <h1>{error}</h1>}
            {!error && isLoading? <FilmListLoader/> :<FilmsList films={upComingFilms}>Upcoming Films</FilmsList>}
        </div>
        
    )
    }

export default UpcomingMoviesPage;


