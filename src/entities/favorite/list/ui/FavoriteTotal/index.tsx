"use client"

import { useFavoriteListHook } from "../../hook/useFavoriteListHook"

import { TotalTxt } from "./_html";

interface FAVORITE_TOTAL {
    className? : string
}

export const FavoriteTotal = ({ className } : FAVORITE_TOTAL) => {

    const { favoriteTotal } = useFavoriteListHook();

    if(favoriteTotal) return <TotalTxt className={className??""}>{favoriteTotal}</TotalTxt>
}