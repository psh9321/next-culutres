"use client"

import dynamic from "next/dynamic";

import { useSessionHook } from "@/entities/users/(post)/hook/useSessionHook"

const BeforeLogin = dynamic(() => import("./ui/BeforeLogin").then(rs => ({default : rs.BeforeLogin})));

const AfterLogin = dynamic(() => import("./ui/AfterLogin").then(rs => ({default : rs.AfterLogin})));

export const UserBox = () => {

    const { isLogin } = useSessionHook();

    return (
        <>
            { isLogin ? <AfterLogin/> : <BeforeLogin/> }
        </>
    )
}