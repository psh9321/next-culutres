'use client'

import { styled } from 'styled-components'

export const MapFrame = styled.div`
    position: relative;
    width : 100%;
    height : 100%;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.35);
    border-radius: 8px;
    background-color: #eef2f7;
`

export const MapBox = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    height : 100%;
`;

export const ZoomControls = styled.div`
    position: absolute;
    top: 16px;
    right: 16px;
    z-index: 2;
    display: grid;
    overflow: hidden;
    width: 40px;
    border: 1px solid rgba(15, 23, 42, 0.16);
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.96);
    box-shadow: 0 8px 22px rgba(15, 23, 42, 0.14);
`

export const BtnSearchArea = styled.button`
    position: absolute;
    top: 16px;
    left: 50%;
    z-index: 2;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    height: 40px;
    padding: 0 14px;
    border: 1px solid rgba(15, 23, 42, 0.16);
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.96);
    box-shadow: 0 8px 22px rgba(15, 23, 42, 0.14);
    color: #111827;
    font-size: 14px;
    font-weight: 700;
    white-space: nowrap;
    cursor: pointer;
    transform: translateX(-50%);

    &:hover {
        background-color: #f3f4f6;
    }

    &:active {
        background-color: #e5e7eb;
    }

    &:disabled {
        color: #9ca3af;
        cursor: not-allowed;
        background-color: rgba(255, 255, 255, 0.78);
    }
`

export const BtnZoom = styled.button`
    display: grid;
    place-items: center;
    width: 40px;
    height: 40px;
    border: 0;
    border-bottom: 1px solid rgba(15, 23, 42, 0.12);
    background-color: transparent;
    color: #111827;
    cursor: pointer;

    &:last-child {
        border-bottom: 0;
    }

    &:hover {
        background-color: #f3f4f6;
    }

    &:active {
        background-color: #e5e7eb;
    }

    &:disabled {
        color: #9ca3af;
        cursor: not-allowed;
        background-color: transparent;
    }
`;
