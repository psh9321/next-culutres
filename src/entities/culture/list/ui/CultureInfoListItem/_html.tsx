'use client'

import { styled } from 'styled-components'

export const Li = styled.li`
    display : block;
    width : calc(25% - 15px);
    box-shadow : 5px 5px 5px rgba(0,0,0,0.8);
    border-radius : 10px;
    overflow : hidden;

    @media all and (max-width : 850px) {
        width : calc(33% - 12px);
    }

    @media all and (max-width : 650px) {
        width : calc(50% - 10px);
    }
`

export const BtnNav = styled.button`
    display : block;
    width : 100%;
`

export const ImgBox = styled.div`
    position : relative;
    width : 100%;
    height : 300px;

    img {
        width : 100%;
        height : 100%;
    }

    @media all and (max-width : 1050px) {
        height : 28vw;
    }

    @media all and (max-width : 850px) {
        height : 37vw;
    }

    @media all and (max-width : 650px) {
        height : 50vw;
    }
`

export const CultureInfoBox = styled.dl`
    position : relative;
    display : block;
    width : 100%;
    height : 200px;
    padding : 15px 20px;
    text-align : left;
    font-weight : 700;
    background-color : #222226;

    dt {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        height : 55px;
        line-height: 1.4;
        margin-bottom : 10px;
        color : #fff;
        font-size : 1.15rem;
        word-break : keep-all;
        overflow : hidden;
        text-overflow: ellipsis;
    }

    dd {
        display : block;
        width : 100%;
        line-height : 1.5;
        color : #b6b5b8;
        font-size : 0.9rem;
        white-space : nowrap;
        text-overflow : ellipsis;
        overflow : hidden;

        &.area {
            position : absolute;
            bottom : 20px;
            left : 20px;
            display : inline-block;
            width : auto;
            padding : 5px 10px;
            color : #fff;
            background-color : #7e4ed5;
            border-radius : 6px;
        }

        &.util {
            position : absolute;
            bottom : 20px;
            left : 20px;
            display : flex;
            gap : 8px;

            span {
                display :inline-block;
                width : auto;
                padding : 5px 10px;
                color : #fff;
                background-color : #444444;    
                border-radius : 6px;
            }
        }
    }

    @media all and (max-width : 499px) {
        height : 180px;
        
        dt {
            height : 42px;
            font-size : 0.9rem;
        }

        dd {
            font-size : 0.8rem;
        }
    }

` 