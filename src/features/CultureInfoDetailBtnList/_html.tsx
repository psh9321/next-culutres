'use client'

import { styled } from 'styled-components'
// @media all and (max-width : 850px) {
//         position : sticky;
//         top : 20px;
//     }
export const BtnList = styled.ul`
    position : absolute;
    top : 20px;
    right : 20px;
    display : flex;
    gap : 10px;

    @media all and (max-width : 850px) {
        position : static;
        margin-bottom : 10px;
    }
`