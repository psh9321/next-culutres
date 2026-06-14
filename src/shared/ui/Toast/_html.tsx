'use client'

import { styled } from 'styled-components'

export const ToastLayer = styled.div`
    position : fixed;
    top : 0;
    left : 0;
    display : flex;
    justify-content : center;
    align-items : center;
    width : 100dvw;
    height : 100dvh;
    z-index : 9999999;
    background-color : rgba(0, 0, 0, 0.6);
`

export const ToastBox = styled.div<{ $hasBorder?: boolean }>`
    display : block;
    padding : 30px 60px;
    text-align : center;
    font-weight : bold;
    background-color : #15151A;
    border : ${({ $hasBorder }) => $hasBorder ? '2px solid #343E4D' : 'none'};
    border-radius : 10px;
    box-shadow : 4px 4px 4px #31333A;
`

export const ToastTitle = styled.dt`
    margin-bottom : 20px;
    color : #fff;
    font-size : 1.3rem;

    @media all and (max-width: 499px) {
        font-size : 1.2rem;
    }
`

export const ToastContents = styled.dd`
    color : #b8bfcc;
    font-size : 0.9rem;

    @media all and (max-width: 499px) {
        font-size : 0.7rem;
    }
`

export const Btn = styled.button<{ $primary?: boolean; $full?: boolean }>`
    width : ${({ $full }) => $full ? '100%' : 'auto'};
    margin-top : ${({ $full }) => $full ? '30px' : '0'};
    padding : 5px 15px;
    color : #fff;
    background-color : ${({ $primary }) => $primary ? '#7e4ed5' : 'transparent'};
    border : 1px solid ${({ $primary }) => $primary ? '#7e4ed5' : '#fff'};
    border-radius : 5px;

    @media all and (max-width: 499px) {
        font-size : 0.8rem;
    }
`

export const BtnList = styled.ul`
    display : flex;
    justify-content : center;
    gap : 10px;
    margin-top : 30px;
    color : #fff;
`
