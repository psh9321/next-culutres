"use client"
import { useRouter, useSearchParams } from "next/navigation";

import { useEffect } from "react";

import { useShallow } from "zustand/shallow";

import { useLoadingStore } from "@/shared/store/useLoadingStore";

import { BtnList } from "./_html"

const btns = [
    { title : "공연/전시", value : "" },
    { title : "행사/축제", value : "B" },
    { title : "교육/체험", value : "C" }
];

const key = "searchType";

export const SearchType = () => {

    const router = useRouter();

    const searchParams = useSearchParams();

    const currentType = searchParams.get(key)??"" as SERVICE_TYPE; 

    const { SetLoadingStatus, loadingStatus } = useLoadingStore(useShallow(state => ({
        SetLoadingStatus : state.SetLoadingStatus,
        loadingStatus : state.loadingStatus
    })));

    function OnClickSearchCallback(type : string) {
        const params = new URLSearchParams(searchParams.toString());

        if(type) params.set(key, type); 
        else params.delete(key);

        SetLoadingStatus("search");

        setTimeout(() => router.replace(`?${params.toString()}`), 1000);
    }

    useEffect(() => {
        if(loadingStatus) SetLoadingStatus("");
    },[currentType])

    return (
        <BtnList>
            {
                btns.map((el, i) => 
                    <li key={`문화정보seviceTp검색-${el["title"]}-${el["value"]}-${i}`}>
                        <button className={`
                            ${i === 0 ? 
                                currentType === "" && "active" 
                                : 
                                currentType === el["value"] && "active" }
                            `} onClick={() => OnClickSearchCallback(el["value"])}>
                            {el["title"]}
                        </button>
                    </li>
                )
            }
        </BtnList>
    )
}