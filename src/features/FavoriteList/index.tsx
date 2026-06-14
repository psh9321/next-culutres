"use client"

import Image from "next/image";

import { useMemo } from "react";

import { useFavoriteListHook } from "@/entities/favorite/list/hook/useFavoriteListHook";

import { SrcHttpToHttps } from "@/shared/util/srcHttpToHttps";
import { ImageError } from "@/shared/util/imgError";
import { CultureInfoDateFormat } from "@/shared/util/dateFormat";

import { List, FavoriteListBox } from "./_html"
import { ShowOnGoingInfo } from "@/shared/util/showOnGoingInfo";
import { FavoriteItem } from "@/entities/favorite/list/ui/FavoriteItem";
import { FavoriteEmpty } from "@/entities/favorite/list/ui/FavoriteEmpty";

export const FavoriteList = () => {
    
    const { data, favoriteTotal } = useFavoriteListHook();

    const favorites = useMemo(() => {
        const map = new Map<FAVORITE_ITEM["exhibitionArea"], FAVORITE_ITEM[]>();

        data?.forEach(item => {
            if(!item) return;

            const area = item.exhibitionArea;
            const prevList = map.get(area)??[];

            map.set(area, [...prevList, item]);
        })

        return Array.from(map);
    }, [data]);

    return (
        <>
            {
                favoriteTotal === 0 ?
                <FavoriteEmpty/>
                :
                favorites.map(([exhibitionArea, list]) => (
                    <FavoriteListBox key={`좋아요한전시-${exhibitionArea}`} className="w-full">
                        <h2 className="hidden">{exhibitionArea} 좋아요 한 전시</h2>
                        <p>{exhibitionArea}</p>
                        <List>
                            {
                                list.map((el, i) => <FavoriteItem item={el} key={`좋아요한전시-${exhibitionArea}-${i}-${el?.["exhibitionTitle"]}`}/>)
                            }
                        </List>
                    </FavoriteListBox>
                ))
            }
        </>
    )
}