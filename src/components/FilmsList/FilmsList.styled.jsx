import styled from "styled-components";
import { FaHeart } from "react-icons/fa6";



export const List = styled.ul`
    display: flex;
    text-align: center;
    flex-wrap: wrap;
    gap: 25px;
`

export const AddFavorite = styled(FaHeart)`
    position: absolute;
    top: 10px;
    right: 10px;
    fill: aliceblue;
    font-size: 25px;
`
export const ListTitle = styled.h1`
    font-size: 35px;
    color: blueviolet;
    margin: 15px 0;
    text-align: center;
` 
export const FilmTitle = styled.h2`
    font-size: 20px;
    color: aliceblue;
    font-weight: 600;
    padding-top: 20px;
`

export const Vote = styled.p`
       color: aliceblue;
    font-size: 18px;
    font-weight: 600;
    padding: 20px 0;
`


export const FilmCard = styled.li`
    width: 340px;
    position: relative;
    border: 1px solid black;
    background: var(--bgd-header);
    border-radius: 15px;
    overflow: hidden;
`

export const Poster = styled.img`
    width: 340px;
    height: 450px;
    object-fit: cover;
`