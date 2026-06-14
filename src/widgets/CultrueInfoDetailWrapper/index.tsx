"use client"

import { usePathname, useRouter } from "next/navigation";

import { useEffect, useRef } from "react";

import { SquareX } from "lucide-react"

import { RouteAnimation } from "@/shared/ui/RouteAnimation"

import { BodyScrollLock } from "@/shared/util/bodyScrollLock";
import { useLoadingStore } from "@/shared/store/useLoadingStore";

import { ContentsBox, BtnClose, Wrapper } from "./_html"

export const CultrueInfoDetailWrapper = ({ children } : LAYOUT_CHILD) => {
    const navigation = useRouter();

    const pathname = usePathname();

    const wrapperRef = useRef<HTMLElement>(null);

    const SetLoadingStatus = useLoadingStore(state => state.SetLoadingStatus);

    function CloseCallback() { 
        if(!wrapperRef["current"]) return 

        BodyScrollLock(false);

        navigation.back();
        // const cultureDetailEntryPath = sessionStorage.getItem("culture-detail-entry-path");

        // sessionStorage.removeItem("culture-detail-entry-path");

        // if(cultureDetailEntryPath === pathname) {
        //     navigation.back();
        //     return;
        // }

        // navigation.replace("/");
    }

    useEffect(() => {
        SetLoadingStatus("");

        return () => BodyScrollLock(false);
    }, [SetLoadingStatus]);

    return (
        <RouteAnimation initial={{scale : 0.8}} animate={{scale : 1}} exit={{scale : 0.8}} transition={{duration : 0.15}}>
            <Wrapper>
                <ContentsBox ref={wrapperRef}>
                    <BtnClose onClick={CloseCallback}>
                    <SquareX/>
                    </BtnClose>
                    {children}
                </ContentsBox>
            </Wrapper>
        </RouteAnimation>

    )
}
