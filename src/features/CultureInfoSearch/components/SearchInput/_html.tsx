'use client'

import { styled } from 'styled-components'

export const Article = styled.article`
    width : 100%;
`

export const InputBox = styled.article`
    display : flex;
    justify-content : space-between;
    align-items : center;
    width : 100%;
    height : 50px;
    padding : 10px;
    background-color : #242425;
    border-radius : 10px;
    svg { width : 24px; stroke : #b6b5b8; }
`

export const Input = styled.input`
    display : block;
    width : calc(100% - 30px);
    height : 100%;
    color : #b6b5b8;
    font-size : 1.2rem;
    font-weight : 700;
    background : transparent;
    border : none;
    outline : none;

    &::placeholder {
        
        font-weight : 500;
    }
`