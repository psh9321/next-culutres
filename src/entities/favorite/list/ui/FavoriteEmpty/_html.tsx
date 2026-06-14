'use client'

import { styled } from 'styled-components'

export const EmptyBox = styled.div`
    width : 100%;
    margin-top : 150px;
    text-align : center;

    > svg {
        display : inline-block;
    }

    > a {
        display : inline-flex;
        align-items : flex-end;
        gap : 5px;
        margin-top : 25px;
        padding : 10px 15px;
        color : #fff;
        font-size : 1.2rem;
        background-color : #7E4ED5;
        border-radius : 10px;
    }
`

export const EmptyTextBox = styled.dl`
    margin-top : 15px;
    font-weight : 700;

    dd {
        margin-top : 10px;
        font-size : 2rem;
    }
`