"use client"

import { Header } from "@/widgets/Header";
import { FavoriteBox } from "@/widgets/FavoriteBox";

const FavoritePageView = () => {
    
    return (
        <>
            <h1 className="hidden">좋아요 한 문화정보 페이지</h1>
            <Header/>
            <FavoriteBox/>
        </>
    )
}

export default FavoritePageView