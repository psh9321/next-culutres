'use client'

import { styled } from 'styled-components'

export const TotalTxt = styled.span`
    position : absolute;
    right : -20px;
    bottom : -20px;
    display : flex;
    justify-content : center;
    align-items : center;
    width : 35px;
    height : 35px;
    color: #F5F3FF;
    font-size : 0.85rem;
    background: linear-gradient(to right, #6D3DF5, #4B1FD1);
    border-radius : 100%;
    z-index : -1;

    &.column {
        left : 0px;
        bottom : -30px;
    }
`