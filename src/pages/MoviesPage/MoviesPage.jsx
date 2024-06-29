// import { useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { SearchBar } from "../../components/SearchBar/SearchBar"
import { apiSearchFilms, apiTopRatedFilms } from "../../services/ApiFilms"
import { FilmsList } from "../../components/FilmsList/FilmsList"
import { useSearchParams } from "react-router-dom"
import FilmListLoader from "../../components/FilmListLodaer/FilmListLoder"




export const MoviesPage = () => {
  const [topRatedFilms, setTopRatedFilms] = useState([])
  const [searchFilms, setSearchFilms] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)


    const loadMore = () => setPage(page+1)
  const [searchParams, setSearchParams] = useSearchParams()
  
    useEffect(() => {
      apiTopRatedFilms(page).then(({ data }) => {
        setTopRatedFilms((prev)=>[...prev, ...data.results]);
        setIsLoading(false)
        setError('')
        }).catch(error=>setError(error.message));
    }, [page]);

   
    
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
        apiSearchFilms(search, page).then(({data}) => {
            setSearchFilms((prev)=>[...prev, ...data.results]);
            setIsLoading(false)
            setError('')
        }).catch(error=>setError(error.message));
    }, [search, page]);
 
  return (
<div>
        <SearchBar onSubmit={querryInput} />
            {error && <h1>{error}</h1>}
            {!error && isLoading && page===1? <FilmListLoader/>:<FilmsList films={searchFilms.length>0? searchFilms: topRatedFilms} loadMore={loadMore}>{searchFilms.length>0 ? 'Search Films': 'Top Rated Films'}</FilmsList>}
        </div>
    )
}
export default MoviesPage;