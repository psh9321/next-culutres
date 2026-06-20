"use client"

import Link from "next/link"

import { usePathname } from "next/navigation";

import { Tickets, MapPinned, TicketCheck } from 'lucide-react';

import { Nav } from "./_html"

interface NAV_BOX {
    isColumn? : boolean
}

export const NavBox = ({ isColumn } : NAV_BOX) => {

    const pathname = usePathname();

    return (
        <>
            <Nav className={isColumn ? "column" : ""}>
                <Link className={pathname === "/" ? "active" : ""} href={"/"}><Tickets/> 문화정보 목록</Link>
                <Link className={pathname === "/map" ? "active" : ""} href={"/map"}><MapPinned/> 문화정보 지도</Link>
                <Link className={`${pathname === "/favorite" ? "active" : ""} ${isColumn && "column"}`} href={"/favorite"}><TicketCheck/> 좋아요 한 문화정보</Link>
            </Nav>        
        </>

    )
}
