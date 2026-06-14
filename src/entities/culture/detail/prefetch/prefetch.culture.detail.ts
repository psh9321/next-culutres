import type { QueryClient } from "@tanstack/react-query"

import { API_SERVER_CULTURE_INFO_DETAIL } from "../api/api.server.culture.detail"

export async function PrefetchCultureDetail(queryServer : QueryClient, seq : string) {
    await queryServer.prefetchQuery({
        queryKey : ["cultureInfo", "detail", String(seq)],
        queryFn : async () => API_SERVER_CULTURE_INFO_DETAIL(seq)
    })
}