"use client"

import { useRouter, useSearchParams } from "next/navigation";

import { useEffect, useState } from "react";
import { useShallow } from "zustand/shallow";

import { useLoadingStore } from "@/shared/store/useLoadingStore";

import { BackgroundLayer } from "@/shared/ui/BackgroundLayer";

import { AreaListWrapper, BtnArea, AreaList } from "./_html";

const area = [
    "지역 전체","서울", "경기", "세종", "대전", "대구", "부산", "광주", "제주", "강원", "경남", "경북", "울산", "인천", "전남", "전북", "충남", "충북"
].map(el => ({
    key : el,
    value : el.replace(/ /g, '')
}));

const key = "searchArea";

export const SearchArea = () => {

    const router = useRouter();

    const searchParams = useSearchParams();

    const currentArea = searchParams.get(key) as DISTRICT??"";

    const [ isAreaList, SetIsAreaList ] = useState<boolean>(false);

    const { SetLoadingStatus, loadingStatus } = useLoadingStore(useShallow(state => ({
        SetLoadingStatus : state.SetLoadingStatus,
        loadingStatus : state.loadingStatus
    })));

    function OnClickSearchAreaCallback(value : string) {
        const params = new URLSearchParams(searchParams.toString());

        if(value) params.set(key, value); 
        else params.delete(key);

        SetLoadingStatus("search");

        SetIsAreaList(false);

        router.replace(`?${params.toString()}`, {
            scroll : false
        });
    }

    useEffect(() => {
        if(loadingStatus) SetLoadingStatus("");
    },[currentArea]);

    return (
        <AreaListWrapper>
            <BtnArea onClick={() => SetIsAreaList(true)}>{currentArea ? currentArea : "지역 전체"}</BtnArea>
            {
                isAreaList && 
                <>
                    <AreaList>
                        {
                            area.map((el, i) => 
                                <li key={`문화정보지역검색-${el["key"]}-${i}`}>
                                    <button onClick={() => OnClickSearchAreaCallback(i === 0 ? "" : el["value"])} className={`${currentArea === el["value"] && "active"}`}>{el["key"]}</button>
                                </li> 
                            )
                        }
                    </AreaList>                
                    <BackgroundLayer onClick={() => SetIsAreaList(false)} />
                </>
            }
        </AreaListWrapper>
    )
}