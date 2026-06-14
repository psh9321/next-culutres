declare global {
    interface LIST_API_PARAMS {
        /** 페이지 번호 */
        offset : number,

        /** 페이지 별 불러올 게시물 수 */
        limit : number,
    }
}

export {}