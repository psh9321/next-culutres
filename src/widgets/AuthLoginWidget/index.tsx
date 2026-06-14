"use client"

import { UserKey } from 'lucide-react';

import { GoogleLogo, KakaoLogo, NaverLogo } from "@/shared/svg/SSOLogo";
import { ContentsSection } from './_html';

interface AUTH_LOGIN_WIDGET {
    provider : "google" | "kakao" | "naver"
}

export const AuthLoginWidget = ({ provider } : AUTH_LOGIN_WIDGET) => {
    return (
        <ContentsSection>
            <h1 className="hidden">소셜 로그인 팝업</h1>
            <h3>Discover Exhibitions</h3>
            <div>
                <UserKey size={45}/>
                <div>
                    { provider === "kakao" && <KakaoLogo />}
                    { provider === "naver" && <NaverLogo />}
                    { provider === "google" && <GoogleLogo />}
                    로그인 중...
                </div>
            </div>
        </ContentsSection>
    )
}