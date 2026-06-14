'use client'

import { styled } from 'styled-components'

export const Item = styled.li`
    display : flex;
    width : calc(33.33% - 20px);
    box-shadow : 5px 5px 5px rgba(0,0,0,0.8);

    @media all and (max-width : 1000px) {
        width : calc(50% - 20px);
    }

    @media all and (max-width : 750px) {
        width : 100%;
    }

    button {
        display : flex;
        width : 100%;
    }

`

export const ImgBox = styled.div`
    flex-shrink : 0;
    position : relative;
    display : block;
    width : 150px;
    height : 200px;
    border-radius : 10px 0 0 10px;
    overflow : hidden;

    @media all and (max-width : 499px) {
        width : 90px;
        height : 140px;
    }
`

export const InfoBox = styled.dl`
    display : block;
    width : calc(100% - 150px);
    padding : 15px 20px;
    text-align : left;
    font-weight : 700;
    background-color : #222226;
    border-radius : 0 10px 10px 0;

    dt {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        height : 55px;
        line-height : 1.5;
        margin-bottom: 10px;
        font-size: 1.15rem;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    dd {
        margin-top : 30px;
        font-size : 0.8rem;

        &.status {
            display : inline-block;
            margin-top : 10px;
            padding : 5px 8px;
            border-radius : 6px;
        }
    }

    @media all and (max-width : 499px) {
        width : calc(100% - 90px);

        dt {
            height : 35px;
            font-size: 0.8rem;
        }

        dd {
            font-size : 0.6rem;
        }
    }
`