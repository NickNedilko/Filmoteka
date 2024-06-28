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