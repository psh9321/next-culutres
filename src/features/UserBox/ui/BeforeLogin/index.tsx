"use client"

import { useEffect, useRef } from "react"

import { KakaoLogo, NaverLogo, GoogleLogo } from "@/shared/svg/SSOLogo"

import { BtnSSOBox, BtnSSO, BeforeLoginBox } from "./_html"
import { UserRoundKey } from "lucide-react"

export const BeforeLogin = () => {

    const popupRef = useRef<Window | null>(null);

    function SSOLoginCallcack(type : "kakao" | "naver" | "google") {

        const callbackUrl = encodeURIComponent(`${window.location.origin}/auth/popup-callback`);
        const url = `/auth/login-redirect?provider=${type}&callbackUrl=${callbackUrl}`;

        const width = 550;
        const height = 550;
        const left = window.screenX + (window.outerWidth - width) / 2;
        const top = window.screenY + (window.outerHeight - height) / 2;

        if (popupRef.current && !popupRef.current.closed) {
            popupRef.current.focus();
            return;
        }

        popupRef.current = window.open(
            url,
            "socialLogin",
            `width=${width},height=${height},left=${left},top=${top},toolbar=no,menubar=no,scrollbars=yes,resizable=yes`
        );
    }

    useEffect(() => {
        function handleMessage(event: MessageEvent) {
            if (event.origin !== window.location.origin) return;
            if (event.data?.type === "SOCIAL_LOGIN_SUCCESS") {
                window.location.reload();
            }
        }

        window.addEventListener("message", handleMessage);
        return () => window.removeEventListener("message", handleMessage);
    }, []);
    
    return (
        <BeforeLoginBox>
            <h2 className="hidden">로그인 박스</h2>
            <div>
                <UserRoundKey/>
                로그인 후 <br/> 이용해보세요.
            </div>
            <BtnSSOBox>
                <li>
                    <BtnSSO onClick={() => SSOLoginCallcack("naver")} title="네이버 로그인"><NaverLogo/></BtnSSO>
                </li>
                <li>
                    <BtnSSO onClick={() => SSOLoginCallcack("kakao")} title="카카오 로그인" className="kakao"><KakaoLogo/></BtnSSO>
                </li>
                <li>
                    <BtnSSO onClick={() => SSOLoginCallcack("google")} title="구글 로그인" className="google"><GoogleLogo/></BtnSSO>
                </li>
            </BtnSSOBox>
        </BeforeLoginBox>
    )
}