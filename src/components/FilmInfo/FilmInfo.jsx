import { useLocation } from "react-router-dom";
import { BackLink } from "../BackLink/BackLink";
import { MoreIndormation } from "../MoreInformation/MoreIndormation";
import { FilmCard, FilmPoster, SubTitle, Title, Wrapper } from "./FilmInfo.styled";
import { useRef } from "react";



export const FilmInfo = ({ film }) => {

    const location = useLocation();

    const { title, poster_path, genres, vote_average, overview, release_date } = film;
    
    const backLocation = useRef(location.state?.from ?? '/')
    return (
        <>
            <BackLink to={backLocation.current}>Back</BackLink>
            <FilmCard>
            <FilmPoster src={poster_path? `https://image.tmdb.org/t/p/w500${poster_path}`:'https://app.moviecatchr.com/assets/images/no_poster.jpg'}  alt={title}/>
            <Wrapper>
                    <Title>{title}</Title>
                    <SubTitle>Description:</SubTitle>
                    <p> {overview}</p>
                    <SubTitle>Genres: </SubTitle>
                    <p>{genres.map(genre => genre.name).join(", ")}</p>
                    <SubTitle>Release date: </SubTitle>
                    <p> {release_date}</p>
                    <SubTitle>User score: </SubTitle>
                    <p>{Math.round(vote_average * 10)}%</p>
                    <MoreIndormation/>
            </Wrapper>
            </FilmCard>
            {/* <MoreIndormation/> */}
        </>
    )
}