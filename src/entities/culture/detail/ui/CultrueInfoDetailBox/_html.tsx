'use client'

import { styled } from 'styled-components'

export const InfoBox = styled.dl`
    width : 450px;
    line-height : 1.5;
    font-weight : 700;

    dt {
        color : #fff;
        font-size : 1.8rem;
    }

    dd {
        display : flex;
        align-items : flex-start;
        gap : 10px;
        margin-top : 10px;
        color : #b6b5b8;
        font-size : 1rem;

        svg {
            width : 24px;
            height : 24px;
        }

        p {
            width : calc(100% - 24px)
        }

        &.price {
            display : inline-block;
            margin-bottom : 30px;

            &.free {
                padding : 5px 10px;
                color : #7f7f7e;
                background-color : #302d2d;
                border-radius : 8px;
            }
        }
    }

    @media all and (max-width : 1050px) {
        width : 100%;
    }

    @media all and (max-width : 499px) {
        dt {
            font-size : 1.2rem;
        }

        dd {
            font-size : 0.75rem
        }
    }

`

export const StatusTxt = styled.p`
    display : inline-block;
    margin-bottom : 10px;
    padding : 8px 12px;
    font-weight : 700;
    border-radius : 10px;
`

export const BtnList = styled.ul`
    display : flex;
    gap : 5px;
`