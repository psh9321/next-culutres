'use client'

import { styled } from 'styled-components'

export const BtnList = styled.ul`
    display : flex;
    gap : 15px;
    width : 100%;

    li {
        button {
            display : inline-flex;
            justify-content: center;
            align-items : center;
            height : 40px;
            padding : 0 20px;
            background-color : #242425;
            border-radius : 10px; 

            &.active {
            
                color : #fff;
                background-color : #7e4ed5;
                border-color : #7e4ed5;
                pointer-events: none;
            }
        }
    }

    @media all and (max-width : 499px) {
        li button {
            padding : 0 10px;
            font-size : 0.8rem;
        }
    }
`