import { API_SERVER_USER_PROFILE } from '@/entities/users/profile/api/api.server.profile';
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req : NextRequest) {
    try {

        const formData = await req.formData();

        const result = await API_SERVER_USER_PROFILE(formData);

        return NextResponse.json(result, { status : 200 });
    }
    catch(err) {
        console.log(err)
        return NextResponse.json({status : 500});
    }
}