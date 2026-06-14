"use client"

import Link from "next/link"

import { TicketX, Tickets } from "lucide-react"

import { EmptyBox, EmptyTextBox } from "./_html"

export const FavoriteEmpty = () => {
    
    return (
        <EmptyBox>
            <TicketX size={45}/>
            <EmptyTextBox>
                <dt>좋아요 한 문화정보가 없습니다.</dt>
                <dd>{`" 문화정보를 찾아보세요. "`}</dd>
            </EmptyTextBox>
            <Link href={"/"}><Tickets/> 문화정보 찾기</Link>        
        </EmptyBox>
    )
}