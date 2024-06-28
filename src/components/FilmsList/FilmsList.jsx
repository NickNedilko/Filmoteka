import { Link, useLocation } from "react-router-dom"
import { AddFavorite, FilmCard, FilmTitle, List, ListTitle, Poster, Vote } from "./FilmsList.styled"



export const FilmsList = ({ films, children }) => {
    const location = useLocation();
    return (
        <>
            <ListTitle>{children}</ListTitle>
             <List>
        {films?.map(({ id, title, poster_path, vote_average
            }) => (
            <FilmCard key={id}>
            <Link  to={`/movies/${id}`} state={{from:location}} >
                <Poster src={poster_path? `https://image.tmdb.org/t/p/w500${poster_path}`:'https://app.moviecatchr.com/assets/images/no_poster.jpg'}  alt={title} />
                <FilmTitle>Title: {title}</FilmTitle>
                <Vote>Avarage vote: {Math.round(vote_average*10)}%</Vote>
            </Link>
            <AddFavorite/>
            </FilmCard>
 ))}
  </List> 
        </> 
    )
}