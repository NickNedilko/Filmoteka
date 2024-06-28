import { useEffect, useState } from "react";
import { apiUpComingFilms } from "../../services/ApiFilms";
import { FilmsList } from "../../components/FilmsList/FilmsList";


const UpcomingMoviesPage = () => {
    const [upComingFilms, setUpComingFilms] = useState(null)
  

    useEffect(() => {
        apiUpComingFilms().then(({ data }) => {
            setUpComingFilms(data.results);
        });
    }, []);
    

    return (
            <FilmsList films={upComingFilms }> Upcoming Films</FilmsList>
    )
    }

export default UpcomingMoviesPage;


