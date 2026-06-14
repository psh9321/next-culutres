"use client"

import { Header } from "@/widgets/Header";
import { CultureInfoMapBox } from "@/widgets/CultureInfoMapBox";

const MapPageView = () => {

    return (
        <>
            <Header isSearchBox={false}/>
            <CultureInfoMapBox/>
        </>
    )
}

export default MapPageView