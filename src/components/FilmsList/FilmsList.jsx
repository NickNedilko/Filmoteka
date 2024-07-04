import { Link, useLocation } from "react-router-dom"
import {  FilmCard, FilmTitle, List, ListTitle, Poster, Vote } from "./FilmsList.styled"
import InfiniteScroll from "react-infinite-scroll-component";
import { Loader } from "../Loader/Loader";
import { AddWatchList } from "../FilmInfo/FilmInfo.styled";
import { useLocalStorage } from "../../hooks/useLocalStorage";



export const FilmsList = ({ films, children, loadMore }) => {
    const location = useLocation();

    const {toggleWatchList, watchList} = useLocalStorage()

    return (
        <>
            <ListTitle>{children}</ListTitle>
           
                <InfiniteScroll
          dataLength={films?.length}
          next={loadMore}
          hasMore={true}
          loader={loadMore?<Loader/>: null}
            >
                 <List>
             {films?.map((film) => {
              const isAddWatchList = watchList.find(item => item.id === film.id);
                  return (
            <FilmCard key={film.id}>
            <Link  to={`/movies/${film.id}`} state={{from:location}} >
                <Poster src={film.poster_path? `https://image.tmdb.org/t/p/w500${film.poster_path}`:'https://app.moviecatchr.com/assets/images/no_poster.jpg'}  alt={film.title} />
                <FilmTitle>Title: {film.title}</FilmTitle>
                <Vote>Avarage vote: {Math.round(film.vote_average*10)}%</Vote>
                     </Link>
                <AddWatchList watchlist={isAddWatchList } onClick={() => toggleWatchList(film)} />
                     
            </FilmCard>
 )})}
 </List> 
        </InfiniteScroll>
   
        </> 
    )
}