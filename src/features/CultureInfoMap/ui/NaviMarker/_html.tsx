'use client'

import { styled } from 'styled-components'

export const BtnMarker = styled.button`
    display: grid;
    place-items: center;
    width: 50px;
    height: 50px;
    line-height: 1;
    color: #ffffff;
    font-size: 16px;
    font-weight: 800;
    background-color: #7e4ed5;
    border :3px solid #fff;
    border-radius: 50%;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.32);
`

export const TargetCultureInfoListBox = styled.article`
    position : absolute;
    top : 50%;
    left : 50%;
    transform : translate(-50%, -50%);
    width : 500px;
    padding : 20px;
    background : url("/modalBackground.png") no-repeat bottom;
    border-radius : 10px;
    z-index: 6;
`

export const BtnTargetCultureInfoListBox = styled.button`
    position : absolute;
    top : 20px;
    right : 20px;
    display : block;
    
    svg {
        width : 30px;
        height : 30px;
    }

`

export const TargetCultureInfoList = styled.ul`
    width : 100%;
    height : 390px;
    margin : 50px 0 20px;
    overflow-y : auto;  
    
    &::-webkit-scrollbar {
        display : none;
    }

    li {
        display : flex;
        width : 100%;

        &:nth-child(n+2) {
            margin-top : 20px;
        }

        > div {
            display : flex;    
            width : 100%;
            cursor : pointer;
            
            dl {
                width : calc(100% - 160px);
                margin-left : 10px;
                padding : 10px;
                word-break : keep-all;
                border-radius : 10px;

                dt { 
                    max-width : 300px;
                    line-height : 1.5;
                    margin-bottom : 20px;
                    font-size : 1.1rem;
                }
                
                dd {
                    line-height : 1.5;
                    font-size : 0.85rem;

                    &.util {
                        display :flex; 
                        gap : 8px;
                        margin-top : 10px;

                        span {
                            display :inline-block;
                            width : auto;
                            padding : 5px 10px;
                            color : #fff;
                            background-color : #444444;    
                            border-radius : 6px;
                        }
                    }
                }
            }        
        }



        &:hover {
            dl {
                background-color : rgba(255,255,255,0.2);          
            }
        }
    }

`

export const ImgBox = styled.div`
    position :relative;
    flex-shrink : 0;
    width : 150px;
    height : 200px;
    border-radius : 10px;
    overflow : hidden;
`