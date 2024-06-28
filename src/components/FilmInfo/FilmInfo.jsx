import { useLocation } from "react-router-dom";
import * as ReactDOM from 'react-dom';
import { BackLink } from "../BackLink/BackLink";
import { MoreIndormation } from "../MoreInformation/MoreIndormation";
import { Button, FilmCard, FilmPoster, SubTitle, Title, Wrapper } from "./FilmInfo.styled";
import { useRef, useState } from "react";
import { apiVideoById } from "../../services/ApiFilms";
import Modal from "../Modal/Modal";
import { VideoPlayer } from "../VideoPlayer/VideoPlayer";




export const FilmInfo = ({ film }) => {
    const [videoId, setVideoId] = useState(null)
    const [isOpen, setIsOpen] = useState(false)

    const location = useLocation();

    const openModal = () => setIsOpen(true)
    const closeModal = () =>setIsOpen(false)
    
    const { title, poster_path, genres, vote_average, overview, release_date, id } = film;
    
    const backLocation = useRef(location.state?.from ?? '/')

    const filmVideo = async (id) => {
        const {data} = await apiVideoById(id);
        const videoId = data.trailer?.youtube_video_id;
        setVideoId(videoId);
    }
   filmVideo(id)

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
                    {videoId && <Button type="button" onClick={() => openModal()}>Watch trailer</Button>}
                    <MoreIndormation />
                     {isOpen &&
                    ReactDOM.createPortal(
                        <Modal onClose={closeModal}><VideoPlayer id={videoId} /></Modal>,
                      document.querySelector('#modal-root')
                    )}

            </Wrapper>
            </FilmCard>
        </>
    )
}