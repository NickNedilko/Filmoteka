import { useLocation } from "react-router-dom";
import * as ReactDOM from 'react-dom';
import { BackLink } from "../BackLink/BackLink";
import { MoreIndormation } from "../MoreInformation/MoreIndormation";
import {  AddWatchList, Button, FilmCard, FilmPoster, GalleryTitle, SubTitle, Title, Wrapper } from "./FilmInfo.styled";
import { useEffect, useRef, useState } from "react";
import { apiImagesById, apiVideoById } from "../../services/ApiFilms";
import Modal from "../Modal/Modal";
import { VideoPlayer } from "../VideoPlayer/VideoPlayer";
import { ImageSwiper } from "../Slider/Swiper";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Loader } from "../Loader/Loader";



export const FilmInfo = ({ film }) => {
    const [videoId, setVideoId] = useState(null)
    const [images, setImages] = useState([])
    const [isOpen, setIsOpen] = useState(false)
     const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
    // const [addWatchList, setAddWatchList] = useState(false)

    
    

    const { title, poster_path, genres, vote_average, overview, release_date, id } = film;
    
    const {toggleWatchList, watchList} = useLocalStorage()

    const isAddWatchList = watchList.find(film => film.id === id);
    
    const openModal = () => setIsOpen(true)
    const closeModal = () =>setIsOpen(false)
     
    const location = useLocation();
    const backLocation = useRef(location.state?.from ?? '/');

      useEffect(() => {
        apiVideoById(id).then(({ data }) => {
       const videoId = data.trailer?.youtube_video_id;
        setVideoId(videoId);
        setIsLoading(false)
        setError('')
        }).catch(error=>setError(error.message));
      }, [id]);
    
    
      useEffect(() => {
        apiImagesById(id).then(({ data }) => {
         setImages(data.backdrops )
        setIsLoading(false)
        setError('')
        }).catch(error=>setError(error.message));
    }, [id]);


const imagesArr = images.map(({file_path} )=> `https://image.tmdb.org/t/p/w500${file_path}`)
  
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
                    <Button type="button" onClick={() => toggleWatchList(film)}>{isAddWatchList? 'Remove from' : 'Add to'} watchlist</Button>
                    <MoreIndormation />
                     {isOpen &&
                    ReactDOM.createPortal(
                        <Modal onClose={closeModal}><VideoPlayer id={videoId} /></Modal>,
                      document.querySelector('#modal-root')
                    )}
                </Wrapper>
                <AddWatchList watchlist={isAddWatchList } onClick={() => toggleWatchList(film)} />

            </FilmCard>
            <>
                {!error && isLoading ? <Loader /> : <GalleryTitle>Movie images</GalleryTitle>}
                
          {imagesArr.length >3 ? <ImageSwiper images={imagesArr} title={title} />: <h2>Sorry no available movie image</h2>}
            </>
            
      
        </>
    )
}