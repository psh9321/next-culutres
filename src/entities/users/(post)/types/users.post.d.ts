declare global {
    interface API_SERVER_POST_USERS_PARAMS {

        /** 유저이름 및 닉네임 (카톡은 실명 권한 없음) */
        userName : string,

        /** id */
        userId : string,

        /** 로그인 type */
        socialType : "kakao" | "naver" | "google",

        profileImg : string

    }

    interface POST_SERS_ITEM {

        /** 유저 이름 */
        name : string,

        /** 유저 고유 아이디 */
        id : string,

        /** 최초 로그인 */
        createdAt : Date,

        profileImg : string
    }

    type API_SERVER_POST_USERS = RESPONSE_MODEL<POST_SERS_ITEM>
}

export {}