'use client'

import { styled } from 'styled-components'

export const BeforeLoginBox = styled.article`
    display :flex;
    align-items : center;
    gap : 10px;
    > div {
        display :flex;
        line-height : 1.3;
        align-items : center;
        margin : 10px 0;
        color : #b6b5b8;
        font-size : 0.8rem;
        font-weight : 700;
        svg {
            margin-right : 5px;
            width : 32px;
            height : 32px;
        }
    }

    @media all and (max-width : 499px) {
        flex-direction : column;
    }
`

export const BtnSSOBox = styled.ul`
    display : flex;
    flex-wrap : wrap;
    gap : 10px;    
`

export const BtnSSO = styled.button`
    display : flex;
    justify-content : center;
    align-items :center;
    width : 30px;
    height : 30px;
    border-radius : 5px;

    &.google { background-color : #F2F2F2 }
    &.kakao { background-color : #F7EB05 }
    &.naver { background-color : #03C75A }
`