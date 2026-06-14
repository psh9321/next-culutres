import "next-auth"
import "next-auth/jwt"

type SocialType = "google" | "naver" | "kakao"

declare module "next-auth" {
    interface Session {
        user : {
            id : string;
            name : string;
            type : SocialType;
            createDate : string;
            profileImg: string;
        }
    }

    interface User {
        id : string;
        name : string;
        type : SocialType;
        createDate : string
        profileImg: string;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        id : string;
        name : string;
        type : SocialType;
        createDate : string;
        profileImg: string;
    }
}

export {}
