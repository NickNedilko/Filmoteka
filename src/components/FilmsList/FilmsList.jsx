import { Link, useLocation } from "react-router-dom"
import {  FilmCard, FilmTitle, List, ListTitle, Poster, Vote } from "./FilmsList.styled"
import InfiniteScroll from "react-infinite-scroll-component";
import { Loader } from "../Loader/Loader";



export const FilmsList = ({ films, children, loadMore }) => {
    const location = useLocation();
    return (
        <>
            <ListTitle>{children}</ListTitle>
           
                <InfiniteScroll
          dataLength={films?.length}
          next={loadMore}
          hasMore={true}
          loader={<Loader/>}
            >
                 <List>
             {films?.map(({ id, title, poster_path, vote_average
            }) => (
            <FilmCard key={id}>
            <Link  to={`/movies/${id}`} state={{from:location}} >
                <Poster src={poster_path? `https://image.tmdb.org/t/p/w500${poster_path}`:'https://app.moviecatchr.com/assets/images/no_poster.jpg'}  alt={title} />
                <FilmTitle>Title: {title}</FilmTitle>
                <Vote>Avarage vote: {Math.round(vote_average*10)}%</Vote>
            </Link>
            </FilmCard>
 ))}
 </List> 
        </InfiniteScroll>
   
        </> 
    )
}