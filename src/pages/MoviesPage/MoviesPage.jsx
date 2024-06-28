// import { useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { SearchBar } from "../../components/SearchBar/SearchBar"
import { apiSearchFilms, apiTopRatedFilms } from "../../services/ApiFilms"
import { FilmsList } from "../../components/FilmsList/FilmsList"
import { useSearchParams } from "react-router-dom"




export const MoviesPage = () => {

  const [topRatedFilms, setTopRatedFilms] = useState(null)
  const [searchFilms, setSearchFilms] = useState(null)
  const [searchParams, setSearchParams] = useSearchParams()
  
    useEffect(() => {
        apiTopRatedFilms().then(({ data }) => {
            setTopRatedFilms(data.results);
        });
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
        apiSearchFilms(search).then(({data})=>setSearchFilms(data.results))
    }, [search])



  return (
      <>
        <SearchBar onSubmit={querryInput} />
        <FilmsList films={searchFilms ?? topRatedFilms}>{searchFilms? 'Search Films': 'Top Rated Films'}</FilmsList>
            </>
    )
}
export default MoviesPage;