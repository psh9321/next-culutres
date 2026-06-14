'use client'

import { styled } from 'styled-components'

export const AfterLoginBox = styled.article`
    display : flex;
    align-items : flex-start;
    gap : 20px;

    @media all and (max-width: 499px) {
        flex-direction : column;
        gap : 5px;
    }
`

export const ImgBox = styled.div`
    flex-shrink: 0;
    position : relative;
    display : block;
    width : 50px;
    height : 50px;
    border-radius : 100%;
    overflow : hidden;
`

export const Container = styled.div`
    display.: block;
    width : calc(100% - 70px);

    @media all and (max-width: 499px) {
        width : 100%;
    }
`

export const UserName = styled.p`
    display.: block;
    width : 100%;
    font-size : 1.4rem;
    word-break: break-all;
`

export const BtnLogout = styled.button`
    display : flex;
    align-items : center;
    gap : 5px;
    margin-top : 8px;
    font-size : 0.9rem;
    svg {
        width : 15px;
        height : 15px;
    }
`