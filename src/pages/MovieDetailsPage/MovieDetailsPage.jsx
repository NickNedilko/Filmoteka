import { Suspense, useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { apiFilmById } from "../../services/ApiFilms";
import { FilmInfo } from "../../components/FilmInfo/FilmInfo";
import { Loader } from "../../components/Loader/Loader";



const MovieDetailsPage = () => {
    const [filmInfo, setFilmInfo] = useState(null)
    const { id } = useParams();

useEffect(() => {
    if (!id) {
      return;
    }
    apiFilmById(id).then(({ data }) => {
      setFilmInfo(data);
    });
  }, [id]);


    return (
        <>
        {filmInfo && <FilmInfo film={filmInfo} />} 
        <Suspense fallback={<Loader/>}>
          <Outlet />
          </Suspense>
        </>
)
}

export default MovieDetailsPage;