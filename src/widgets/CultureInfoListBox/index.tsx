"use client"

import { CultureInfoSearch } from "@/features/CultureInfoSearch"
import { CultureInfoList } from "@/features/CultureInfoList"

import { CultureListBoxWrapper, SearchWrapper } from "./_html"

export const CultureInfoListBox = () => {

    return (
        <CultureListBoxWrapper>
            <h2 className="hidden">문화정보 리스트</h2>
            <SearchWrapper>
                <CultureInfoSearch/>
            </SearchWrapper>
            <CultureInfoList/>
        </CultureListBoxWrapper>
    )
}