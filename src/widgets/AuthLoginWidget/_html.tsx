'use client'

import { styled } from 'styled-components'

export const ContentsSection = styled.section`
    margin-top : 150px;    
    text-align : center;

    h3 {
        display : block;
        margin-bottom : 30px;
        color : #7e4ed5;
        font-size : 1.7rem;
    }

    > div {
        display : inline-flex;
        flex-direction : column;
        justify-content : center;
        align-items : center;
        gap : 10px;
        width : 280px;
        height : 160px;
        color : #B6B5B8;
        border : 1px solid #31333A;
        border-radius : 10px;

        > div {
            display : flex;
            align-items : center;
            gap : 10px;
            margin-top : 20px;
            font-size : 2rem;
        }
    }
`