"use client"

import { useSearchParams } from "next/navigation";

import { useInfiniteQuery } from "@tanstack/react-query"

import { API_CLIENT_CULTURE_INFO_LIST } from "../api/api.client.culture.info.list";

export const useExhibitionListHook = () => {

    const searchParams = useSearchParams();

    const queryKeyObj : { [key : string] : string } = {};

    if(searchParams.get("searchArea")) queryKeyObj["searchArea"] = searchParams.get("searchArea") as string;
    if(searchParams.get("searchKeyword")) queryKeyObj["searchKeyword"] = searchParams.get("searchKeyword") as string;
    if(searchParams.get("searchType")) queryKeyObj["searchType"] = searchParams.get("searchType") as string;

    const { data, isLoading, isFetching, isError, isSuccess, fetchNextPage, hasNextPage, isFetchingNextPage }  = useInfiniteQuery({
        queryKey : ["cultureInfo", "list", queryKeyObj],
        queryFn : async ({pageParam}) => {

            const params = {
                offset : pageParam??1, 
                limit : 20,
                ...queryKeyObj
            } as API_CLIENT_CULTURE_INFO_LIST_PARAMS

            const result = await API_CLIENT_CULTURE_INFO_LIST(params);

            return result
        },
        initialPageParam : 1,
        getNextPageParam : (response) => {
            if(!response || response instanceof Error) return undefined;
            
            const { page, isNextPage } = response as INFINITY_RESPONSE_ITEM<CULTURE_ITEM[]>;
            
            if(!isNextPage) return undefined

            return isNextPage ? page+1 : undefined
        },
    })

    return { data, isLoading, isFetching, isError, isSuccess, fetchNextPage, hasNextPage, isFetchingNextPage } 
}
