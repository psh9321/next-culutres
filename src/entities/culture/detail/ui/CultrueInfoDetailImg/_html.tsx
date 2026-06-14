'use client'

import { styled } from 'styled-components'

export const ImgBox = styled.div`
    flex-shrink: 0;
    position : relative;
    display : block;
    width : 450px;
    height : 550px;
    border-radius : 10px;
    overflow : hidden;

    @media all and (max-width : 1050px) {
        width : 42vw;
        height : 50vw
    }

    @media all and (max-width : 850px) {
        position : sticky;
        top : 55px;
        width : 100%;
        height : 500px;
        flex-shrink: 0;
    }

    @media all and (max-width : 499px) {
        height : 100vw
    }
`