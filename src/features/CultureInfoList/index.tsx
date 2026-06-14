"use client"

import { useEffect } from "react";

import { useExhibitionListHook } from "@/entities/culture/list/hook/useCultureListHook"
import { useInterSectionObserver } from "@/shared/hook/useInterSectionObserver";

import { useLoadingStore } from "@/shared/store/useLoadingStore";

import { BodyScrollLock } from "@/shared/util/bodyScrollLock";

import { CultureInfoListEmpty } from "@/entities/culture/list/ui/CultureInfoListEmpty";
import { CultureInfoListItem } from "@/entities/culture/list/ui/CultureInfoListItem";

import { Ol } from "./_html";

export const CultureInfoList = () => {

    const { data, isFetching, isLoading, fetchNextPage, hasNextPage } = useExhibitionListHook();

    const { ref, isView } = useInterSectionObserver<HTMLLIElement>({
        threshold : 0
    });

    const SetLoadingStatus = useLoadingStore(state => state.SetLoadingStatus);

    const total = data?.pages.at(-1)?.total??0;

    useEffect(() => {
        if(!isView) return;
        if(isLoading) return;
        if(isFetching) return;
        if(!hasNextPage) return;

        fetchNextPage();
    },[isView]);

    useEffect(() => {
        if(isFetching) {
            BodyScrollLock(true);
            SetLoadingStatus("fetch");
        }
        else {
            BodyScrollLock(false);
            SetLoadingStatus("");
        }
    },[isFetching])

    if(total === 0) return <CultureInfoListEmpty/>;
    
    return (
        <Ol>
            {
                data?.pages.map(page => {
                    if(!page) return <></>

                    const list = (page as INFINITY_RESPONSE_ITEM<CULTURE_ITEM[]>)["list"];

                    return list?.map((el, i) => <CultureInfoListItem key={`문화정보목록-${i}-${el["title"]}`} item={el} />)
                })
            }

            <li ref={ref} style={{height : "1px"}}></li>
        </Ol>
    )
}