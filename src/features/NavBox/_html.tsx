'use client'

import { styled } from 'styled-components'

export const Nav = styled.nav`
    position : relative;
    display : flex;
    align-items :center;
    gap : 20px;

    a {
        
        display :flex;
        align-items : center;
        gap : 5px;
        padding:5px;
        font-size : 1.1rem;
        color : #b6b5b8;

        border-bottom : 2px solid transparent;

        svg {
            width : 24px;
            height : 24px;
        }

        &.active {
            padding: 10px 14px;
            border-radius: 16px;
            background: linear-gradient(to right, #6D3DF5, #4B1FD1);
            color: #F5F3FF;
            box-shadow: 0 0 12px rgba(109, 61, 245, 0.45);
        }

        &.active:hover {
            background: linear-gradient(to right, #7B52FF, #5A2EF0);
            box-shadow: 0 0 18px rgba(123, 82, 255, 0.6);
        }

        &.active:active {
            transform: scale(0.98);
        }
    }

    &.column {
        flex-direction : column;
        align-items :flex-start;
    }

    @media all and (max-width : 600px) {
        justify-content: center;
        a {
            font-size : 0.9rem
        }
    }
`
        
