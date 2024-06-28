import { useEffect, useState } from "react";
import { apiTrendFilms } from "../../services/ApiFilms";
import { FilmsList } from "../../components/FilmsList/FilmsList";
import FilmListLoader from "../../components/FilmListLodaer/FilmListLoder";


const Home = () => {
    const [trendFilms, setTrendFilms] = useState(null)
    const [isLoading, setIsLoading] = useState(false)


  

    useEffect(() => {
        setIsLoading(true)
        apiTrendFilms().then(({ data }) => {
            setTrendFilms(data.results);
            setIsLoading(false)
        });
    }, []);
    

    return (
        <div>
            {isLoading?<FilmListLoader/> :<FilmsList films={trendFilms }>Trending Films</FilmsList>}
        </div>
    )
    }

export default Home;