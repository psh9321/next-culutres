"use client"

import Link from 'next/link';

import { MapPinned, MapPinHouse, Phone, CalendarDays } from 'lucide-react';

import { useCultureInfoDetailHook } from "../../hook/useCultureInfoDetailHook";

import { InfoBox, StatusTxt } from "./_html"


export const CultrueInfoDetailBox = () => {

    const { title, date, price, phone, place, placeAddr, status, statusBackgroundColor } = useCultureInfoDetailHook();

    return (
        <>
            <StatusTxt style={{
                backgroundColor : statusBackgroundColor
            }}>{status}</StatusTxt>
            <InfoBox>
                <dt>{title}</dt>
                { price && <dd className={`price ${price === "무료" && "free"}`}> {price} </dd> }
                <dd><CalendarDays/> {date}</dd>
                { placeAddr && <dd><MapPinned/> <p>{placeAddr}</p></dd> }
                { place && <dd><MapPinHouse/> <p>{place}</p></dd> }
                { phone && <dd><Phone/> <p>{phone}</p></dd> }
            </InfoBox>
        </>
    )
}