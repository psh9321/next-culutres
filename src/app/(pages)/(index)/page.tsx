import { QueryClient, dehydrate, HydrationBoundary } from "@tanstack/react-query";

import { PrefetchCultureInfoList } from "@/entities/culture/list/prefetch/prefetch.culture.info.list";

import IndexPageView from "./_view"

interface INDEX_PAGE_SERVER {
  searchParams : Promise<{
      searchKeyword?: string
      searchArea?: DISTRICT
      searchType?: SERVICE_TYPE
  }>
}

const IndexPageServer = async ({ searchParams } : INDEX_PAGE_SERVER) => {
    const queryServer = new QueryClient();

    const querys = await searchParams;

    await PrefetchCultureInfoList(queryServer, querys)

    const dehydratedState = dehydrate(queryServer);
  
    return (
        <HydrationBoundary state={dehydratedState}>
          <IndexPageView/>
        </HydrationBoundary>
    )
}

export default IndexPageServer