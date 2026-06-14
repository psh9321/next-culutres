"use client"

import { BtnCultureInfoShare } from "./ui/BtnCultureInfoShare"
import { BtnCultureInfoLink } from "./ui/BtnCultureInfoLink"
import { BtnToggleFavorite } from "./ui/BtnToggleFavorite"

import { BtnList } from "./_html"

export const CultureInfoDetailBtnList = () => {

    return (
        <BtnList>
            <li><BtnToggleFavorite/></li>
            <li><BtnCultureInfoLink/></li>
            <li><BtnCultureInfoShare/></li>
        </BtnList>
    )
}