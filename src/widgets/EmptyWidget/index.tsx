"use client"

import Image from "next/image";
import Link from "next/link";

import { Wrapper, Contents } from "./_html"

interface EMPTY_WIDGET {
    title? : string,
    contents? : string,
    closeCallback? : () => void
}

export const EmptyWidget = ({ title, contents, closeCallback } : EMPTY_WIDGET) => {
    return (
        <Wrapper>
            <h2 className="hidden">존재하지 않는 페이지</h2>
            <Contents>
                <h1>
                    <strong>404</strong>
                    {title??"페이지를 찾을 수 없습니다."}
                </h1>
                <p>{contents??"요청하신 페이지를 찾을수 없습니다."}</p>
                <p>전시 목록으로 돌아갈까요?</p>
                <Link onClick={e => {
                    if(closeCallback) {
                        e.preventDefault();
                        closeCallback()
                    }
                }} href={"/"}>
                    홈으로 돌아가기
                </Link>
            </Contents>
            <Image loading="eager" src={"/not-found.png"} alt="존재하지 않는 페이지 이미지" width={650} height={500}/>
        </Wrapper>
    )
}