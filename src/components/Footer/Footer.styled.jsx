import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';


export const StyledFooter = styled.footer`
    width: 100%;
    position: relative;
    bottom: 0%;
    margin-top: 20px;
    background: var(--bgd-header);
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 768px) {
        padding: 30px;
    }

    @media screen and (min-width: 1200px) {
        padding: 40px;
    }
`;

export const List = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;

    margin-bottom: 16px;

    @media screen and (min-width: 768px) {
        gap: 20px;
        margin-bottom: 20px;
    }

    @media screen and (min-width: 1200px) {
        gap: 30px;
        margin-bottom: 30px;
    }

`

// export const StyledGithub = styled(Github)`
//     width: 30px;
//     height: 30px;
//     fill: #fff;
//     cursor: pointer;

//     &:hover,
//     &:focus {
//         fill: #FFF388;
//     }

//     @media screen and (min-width: 768px) {
//         width: 40px;
//         height: 40px;
//     }

// `;

// export const StyledLinkedin = styled(Linkedin)`
//     width: 30px;
//     height: 30px;
//     fill: #fff;
//     cursor: pointer;

//     &:hover,
//     &:focus {
//         fill: var(--hover-color);
//     }

//     @media screen and (min-width: 768px) {
//         width: 40px;
//         height: 40px;
//     }
// `;

// export const StyledTeletram = styled(Telegram)`
//     width: 30px;
//     height: 30px;
//     fill: #fff;
//     cursor: pointer;

//     &:hover,
//     &:focus {
//         fill: var(--hover-color);
//     }

//     @media screen and (min-width: 768px) {
//         width: 40px;
//         height: 40px;
//     }
// `;

// export const StyledTelephone = styled(Telephone)`
//     width: 30px;
//     height: 30px;
//     fill: #fff;
//     cursor: pointer;

//     &:hover,
//     &:focus {
//         fill: var(--hover-color);
//     }

//     @media screen and (min-width: 768px) {
//         width: 40px;
//         height: 40px;
//     }
  
// `;

// export const StyledEmail = styled(Email)`
//     width: 30px;
//     height: 30px;
//     fill: #fff;
//     cursor: pointer;

//     &:hover,
//     &:focus {
//         fill: var(--hover-color);
//     }

//     @media screen and (min-width: 768px) {
//         width: 40px;
//         height: 40px;
//     }
// `;

const text = `
    font-weight: 400;
    font-size: 14px;
    line-height: 1.14;
    letter-spacing: 0.02em;
    color: var(--text-header);
    text-decoration: none;

    @media screen and (min-width: 768px) {
        font-size: 16px;
    }

    @media screen and (min-width: 1280px) {
        font-size: 18px;    
    }
`;

export const StyledLink = styled.a`
    ${text}
    text-decoration: underline; 

    &:hover {
        color: var(--hover-color);
    }
`;

export const StyledTextLink = styled(HashLink)`
    ${text}
    position: relative;
    
    &::after {
        position: absolute;
        display: block;
        content: '';
        bottom: -2;
        left: 50%;
        width: 0;
        height: 2px;
        background: currentColor;   
        transition: width 0.3s ease 0s, left 0.3s ease 0s; 
    }

    &:hover:after,
    &:focus:after {
        width: 100%; 
        left: 0; 
    }
`

export const Text = styled.p`
    ${text}
    text-align: center;
`


// export const StyledArrow = styled(Arrow)`
//     width: 30px;
//     height: 30px;
//     fill: #fff;
//     cursor: pointer;

//     &:hover,
//     &:focus {
//         fill: var(--hover-color);
//     }

//     @media screen and (min-width: 768px) {
//         width: 40px;
//         height: 40px;
//     }
// `;