'use client'

import { styled } from 'styled-components'

export const CultureInfoSearchFlexBox = styled.div`
    display : flex;
    align-items : center;
    flex-wrap : wrap;
    gap : 15px;
    margin-top : 15px;
    color : #b6b5b8;
    font-size : 1rem;
    font-weight : 700;

     @media all and (max-width : 499px) {
        font-size : 0.85rem;
    }
`