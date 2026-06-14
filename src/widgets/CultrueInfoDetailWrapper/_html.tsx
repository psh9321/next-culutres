'use client'

import { styled } from 'styled-components'

export const Wrapper = styled.section`
    position : relative;

    @media all and (max-width : 499px) {
        width : calc(100% - 20px)
    }
`

export const ContentsBox = styled.main`
    display : flex;
    gap : 20px;
    max-height : 800px;
    padding : 20px;
    color : #fff;
    background-image: url("/background.png"); 
    background-position: left;
    border : 1px solid #000;
    border-radius : 10px;
    box-shadow : 3px 3px 3px rgba(0,0,0,0.5);
    z-index : 2;

    @media all and (max-width : 850px) {
        flex-direction : column;
        align-items: flex-end;
        padding-bottom : 0;
        overflow-y : auto;

        &::-webkit-scrollbar { 
            display: none;
        }
    }

    @media all and (max-width : 499px) {
        height : 90dvh;
    }
`

export const BtnClose = styled.button`
    position : absolute;
    top : -30px;
    right : -30px;
    display : block;

    svg {
        width : 30px;
        height : 30px;
    }

    @media all and (max-width : 850px) {
        position : sticky;
        top : 0;
        right : 0;
    }

`