import styled from "styled-components";

export const ActorList = styled.ul`
    display: flex;
    margin-top: 20px;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
`

export const ActorCard = styled.li`
    width: 300px;
    height: 400px;
    text-align: center;
    border: 1px solid black;
    border-radius: 10px;
    background: var(--bgd-header);
     overflow: hidden;
`

export const Photo = styled.img`
    width: 300px;
    height: 320px;
`

export const Info = styled.p`
    font-size: 20px;
    color: aliceblue;
    font-weight: 500;
    margin: 5px 0;
    
`
