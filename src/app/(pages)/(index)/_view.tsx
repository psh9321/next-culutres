"use client"

import { CultureInfoListBox } from "@/widgets/CultureInfoListBox"
import { CultureInfoListTitle } from "@/widgets/CultureInfoListTitle"

const IndexPageView = () => {
    
    
    return (
        <>
            <h1 className="hidden">문화정보 목록 페이지</h1>
            <CultureInfoListTitle/>
            <CultureInfoListBox/>
        </>
    )
}

export default IndexPageView
