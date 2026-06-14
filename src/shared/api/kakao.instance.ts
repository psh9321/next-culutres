import ky from "ky"

export const KAKAO_API = ky.create({
    prefix : process.env.KAKAO_MAP_API_URL,
    method : "get",
    timeout : 10000,
    headers : {
        Authorization : `KakaoAK ${process.env.KAKAO_API_KEY as string}` 
    },
    hooks : {
        beforeRequest : [
            async ({ request }) => {
                return request
            }
        ],

        beforeError : [
            async ({ error }) => {
                return error
            }
        ],

        afterResponse : [
            async ({response, request}) => {
                
                return response
            }
        ]
    }
})