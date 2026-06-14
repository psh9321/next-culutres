"use client"

import { useSearchParams } from "next/navigation"
import { getCsrfToken } from "next-auth/react"

import { useEffect, useRef } from "react"

import { UserKey } from 'lucide-react';

import { GoogleLogo, KakaoLogo, NaverLogo } from "@/shared/svg/SSOLogo";

import { ContentsSection } from "./_html";

export const AuthLogin = () => {
    const searchParams = useSearchParams();
    const provider = searchParams.get("provider");
    const callbackUrl = searchParams.get("callbackUrl") ?? "/";
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        getCsrfToken().then((csrfToken) => {
            if (!formRef.current || !csrfToken) return;
            const input = formRef.current.querySelector<HTMLInputElement>('input[name="csrfToken"]')
            if (input) {
                input.value = csrfToken;

                formRef.current.submit();
            }
        })
    }, []);

    return (
        <>
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
            <form ref={formRef} method="POST" action={`/api/auth/signin/${provider}`} style={{ display: "none" }}>
                <input type="hidden" name="csrfToken" defaultValue="" />
                <input type="hidden" name="callbackUrl" defaultValue={callbackUrl} />
            </form>       
        </>

    )
}