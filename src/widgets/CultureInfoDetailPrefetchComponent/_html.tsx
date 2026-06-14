'use client'

import { styled } from 'styled-components'

export const BackgroundLayer = styled.div`
    position : fixed;
    top : 0;
    left : 0;
    display : flex;
    justify-content : center;
    align-items : center;
    width : 100dvw;
    height : 100dvh;
    z-index : 999;
    background-color : rgba(0,0,0,0.7);
`

export const ContentsBox = styled.article`
    width : 100%;
    
    @media all and (max-width : 850px) {
        position : relative;
        padding : 15px;
        background-color : #212328;
        border-radius: 10px 10px 0 0;
        z-index : 3;
    }
`