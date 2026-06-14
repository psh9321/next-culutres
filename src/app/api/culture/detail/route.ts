import { API_SERVER_CULTURE_INFO_DETAIL } from '@/entities/culture/detail/api/api.server.culture.detail';
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req : NextRequest) {
    try {

        const seq = await req.json();

        const result = await API_SERVER_CULTURE_INFO_DETAIL(seq);

        return NextResponse.json({ status : 200 });
    }
    catch(err) {
        console.log(err)
        return NextResponse.json({status : 500});
    }
}