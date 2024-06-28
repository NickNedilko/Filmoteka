import { Link } from "react-router-dom";
import { HiArrowLeft } from 'react-icons/hi';

import styled from "styled-components";


export const Icon = styled(HiArrowLeft)`
    size: 20px;
    margin-right: 5px;
`

export const StyledLink = styled(Link)`
    position: relative;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.14;
    padding: 5px;
    margin-bottom: 20px;
    border: 1px solid black;
    border-radius: 10px;
    letter-spacing: 0.02em;
    background: var(--bgd-header);
    text-decoration: none;
    cursor: pointer;
    color: var(--text-header);

    &.active {
        color: var(--hover-color);
    }
    &:hover,
    &:focus {
        outline: none;
    }

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

    @media screen and (min-width: 768px) {
        font-size: 18px;
    }

    @media screen and (min-width: 1280px) {
        font-size: 20px;
    }
`
// .link {
//   display: inline-flex;
//   align-items: center;
//   gap: 4px;
//   padding: 8px 0;
//   color: black;
//   text-decoration: none;
//   font-weight: 500;
//   text-transform: uppercase;
// }

// .link:hover {
//   color: orangered;
// }