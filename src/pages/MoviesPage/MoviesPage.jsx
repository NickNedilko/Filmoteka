// import { useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { SearchBar } from "../../components/SearchBar/SearchBar"
import { apiSearchFilms, apiTopRatedFilms } from "../../services/ApiFilms"
import { FilmsList } from "../../components/FilmsList/FilmsList"
import { useSearchParams } from "react-router-dom"
import FilmListLoader from "../../components/FilmListLodaer/FilmListLoder"




export const MoviesPage = () => {
  const [topRatedFilms, setTopRatedFilms] = useState(null)
  const [searchFilms, setSearchFilms] = useState(null)
      const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
  const [searchParams, setSearchParams] = useSearchParams()
  
    useEffect(() => {
      apiTopRatedFilms().then(({ data }) => {
        setTopRatedFilms(data.results);
        setIsLoading(false)
        setError('')
        }).catch(error=>setError(error.message));
    }, []);

   
    
    const search = searchParams.get('search');
    
     const querryInput = search => {
    if (search === '') {
      return setSearchParams({});
    }
    setSearchParams({ search });
  };
   

  useEffect(() => {
     if (search === null) {
        return
        }
        setIsLoading(true)
        apiSearchFilms(search).then(({data}) => {
            setSearchFilms(data.results);
            setIsLoading(false)
            setError('')
        }).catch(error=>setError(error.message));
    }, [search]);
 
  return (
<div>
        <SearchBar onSubmit={querryInput} />
            {error && <h1>{error}</h1>}
            {!error && isLoading? <FilmListLoader/>:<FilmsList films={searchFilms ?? topRatedFilms}>{searchFilms? 'Search Films': 'Top Rated Films'}</FilmsList>}
        </div>
    )
}
export default MoviesPage;