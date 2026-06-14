'use client'

import { styled } from 'styled-components'

export const Title = styled.dl`
    display : inline-block;
    margin-bottom : 15px;
    color : #fff;
    
    dt { 
        line-height : 1.2;
        margin-bottom : 15px;
        color : #7e4ed5;
        font-size : 3rem;
        font-family : logo;
    }

    dd { font-size : 1.4rem }

    @media all and (max-width : 499px) {
        dt { font-size : 1.8rem }
        dd { font-size : 1rem }
    }
`