import { API_SERVER_CULTURE_INFO_MAP } from '@/entities/culture/map/api/api.server.culture.info.map';
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req : NextRequest) {
    try {

        const params = await req.json() as API_CLIENT_CULTURE_INFO_MAP_PARAMS;

        const response = await API_SERVER_CULTURE_INFO_MAP({
            gpsxfrom : params.fromX,
            gpsyfrom : params.fromY,
            gpsxto : params.toX,
            gpsyto : params.toY,
            ...params
        })

        if(response.resultCode !== 200) return response;

        const result = response["data"]

        return NextResponse.json(result, { status : 200 });
    }
    catch(err) {
        console.log(err)
        return NextResponse.json({status : 500});
    }
}