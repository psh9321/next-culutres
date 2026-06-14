import { NextRequest, NextResponse } from 'next/server'
import { API_SERVER_CULTURE_INFO_LIST } from '@/entities/culture/list/api/api.server.culture.info.list';
import { ApiFail, ApiSuccess } from '@/shared/model/response';

export async function POST(req : NextRequest) {
    try {

        const { offset, limit, searchType, searchKeyword, searchArea } = await req.json() as API_CLIENT_CULTURE_INFO_LIST_PARAMS;

        const querys = {
            offset,
            limit,
            type : searchType,
        } as API_SERVER_CULTURE_INFO_LIST_PARAMS;

        if(searchKeyword) querys["keyword"] = searchKeyword;
        if(searchArea) querys["area"] = searchArea as DISTRICT;
        if(searchType) querys["type"] = searchType;

        const response = await API_SERVER_CULTURE_INFO_LIST(querys);

        if(response["resultCode"] !== 200) return response;

        const result = response["data"];

        return NextResponse.json(result, { status : 200 });
    }
    catch(err) {
        const result =new ApiFail(err, "문화정보 불러오기 에러")
        return NextResponse.json(result, {status : 500});
    }
}