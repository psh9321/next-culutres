"use client"

import { Title } from "./_html"

interface CULTURE_INFO_TITLE {
    isBr? : boolean
}

export const CultureInfoTitle = ({ isBr } : CULTURE_INFO_TITLE) => {
    return (
        <Title>
            <dt>Discover <br style={{display : `${isBr ? "block" : "none"}`}}/> Cultures</dt>
            <dd>새로운 문화정보를 발견해보세요.</dd>
        </Title>
    )
}