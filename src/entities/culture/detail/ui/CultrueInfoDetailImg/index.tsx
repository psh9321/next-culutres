"use client"

import Image from "next/image";

import { useCultureInfoDetailHook } from "@/entities/culture/detail/hook/useCultureInfoDetailHook";

import { ImageError } from "@/shared/util/imgError";

import { ImgBox } from "./_html";

export const CultrueInfoDetailImg = () => {

    const { imgSrc, title } = useCultureInfoDetailHook();

    return (
        <ImgBox>
            {
                imgSrc && 
                <Image
                    fill
                    unoptimized
                    sizes={"100vw"}
                    loading="eager"
                    src={imgSrc}
                    alt={`${title} 썸네일 이미지
                    `}
                    onError={ImageError}
                />
            }
        </ImgBox>
    )
}