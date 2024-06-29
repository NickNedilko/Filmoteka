import styled from "styled-components";



export const Wrapper = styled.div`
    width: 80%;
`

export const FilmCard = styled.div`
    display: flex;
    gap: 20px;
    border: 1px solid black;
    border-radius: 10px;
    color: aliceblue;
    margin-top: 20px;
    background: var(--bgd-header);
    padding: 10px;
`
export const FilmPoster = styled.img`
    width: 580px;
    height: 520px;
    border-radius: 10px;
`

export const Title = styled.h1`
    font-size: 25px;
    font-weight: 700;
    text-align: center;
`
export const SubTitle = styled.h3`
    font-size: 20px;
    font-weight: 600;
    margin: 10px 0;
`

export const Button = styled.button`
    padding: 10px;
    margin-top: 15px;
    border-radius: 10px;
    color: blueviolet;
    font-size: 18px;
    font-weight: 600;
    font-size: 20px;
    cursor: pointer;
    outline: none;

`

    export const GalleryTitle = styled.h2`
    font-size: 30px;
    color: blueviolet;
    margin: 15px 0;
    text-align: center;
` 