import "next-auth"
import "next-auth/jwt"

type SOCIAL_TYPE = "google" | "naver" | "kakao"

declare module "next-auth" {
    interface Session {
        user : {
            id : string;
            name : string;
            type : SOCIAL_TYPE;
            createDate : string;
            profileImg: string;
        }
    }

    interface User {
        id : string;
        name : string;
        type : SOCIAL_TYPE;
        createDate : string
        profileImg: string;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        id : string;
        name : string;
        type : SOCIAL_TYPE;
        createDate : string;
        profileImg: string;
    }
}

export {}
