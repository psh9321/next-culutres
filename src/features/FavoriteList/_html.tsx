'use client'

import { styled } from 'styled-components'

export const FavoriteListBox = styled.article`
    > p {
        margin-bottom : 15px;
        color : #7E4ED5;
        font-size : 1.5rem;
        font-weight : 700;
    }

    &:nth-of-type(n+2) {
        margin-top : 60px;
    }
`

export const List = styled.ul`
    display : flex;
    flex-wrap: wrap;
    gap : 30px;
    width : 100%;
    padding : 0 20px;
`