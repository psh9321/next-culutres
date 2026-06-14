import type { QueryClient } from "@tanstack/react-query"
import { API_SERVER_CULTURE_INFO_LIST } from "../api/api.server.culture.info.list"

export async function PrefetchCultureInfoList(queryServer : QueryClient, querys : {
    searchKeyword?: string
    searchArea?: DISTRICT
    searchType?: SERVICE_TYPE
} ) {

    await queryServer.prefetchInfiniteQuery({
        queryKey : ["cultureInfo", "list" ,querys],
        queryFn : async () => {

            const params = {
                offset : 1, 
                limit : 20,
                type : querys["searchType"]??"A",
            } as API_SERVER_CULTURE_INFO_LIST_PARAMS

            if(querys["searchKeyword"]) params["keyword"] = querys["searchKeyword"];
            if(querys["searchArea"]) params["area"] = querys["searchArea"];

            const result = await API_SERVER_CULTURE_INFO_LIST(params) as API_SERVER_CULTURE_LIST;

            return result?.["data"] as API_CLIENT_CULTURE_LIST??null;
        },
        initialPageParam : 1,
        getNextPageParam : (lastPage : API_CLIENT_CULTURE_LIST) => {
            if(!lastPage || lastPage instanceof Error) return undefined;
            
            const { page, isNextPage } = lastPage;
            
            if(!isNextPage) return undefined

            return isNextPage ? page+1 : undefined
        },
    })
}