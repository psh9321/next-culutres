"use client"

import { CultureInfoList } from "@/features/CultureInfoList"
import { CultureListBoxWrapper } from "./_html"

export const CultureInfoListBox = () => {

    return (
        <CultureListBoxWrapper>
            <h2 className="hidden">문화정보 리스트</h2>
            <CultureInfoList/>
        </CultureListBoxWrapper>
    )
}