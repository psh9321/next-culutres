import { QueryClient, dehydrate, HydrationBoundary } from "@tanstack/react-query";

import { PrefetchCultureDetail } from "@/entities/culture/detail/prefetch/prefetch.culture.detail";

import { BackgroundLayer, ContentsBox } from "./_html";
import { CultrueInfoDetailImg } from "@/entities/culture/detail/ui/CultrueInfoDetailImg";
import { CultrueInfoDetailBox } from "@/entities/culture/detail/ui/CultrueInfoDetailBox";
import { CultrueInfoDetailWrapper } from "@/widgets/CultrueInfoDetailWrapper";
import { CultureInfoDetailBtnList } from "@/features/CultureInfoDetailBtnList";

interface CULTURE_INFO_DETAUL_PREFETCH_COMPONENT {
    seq : string
}

export const CultureInfoDetailPrefetchComponent = async ({ seq } : CULTURE_INFO_DETAUL_PREFETCH_COMPONENT) => {
    
    const queryServer = new QueryClient();

    await PrefetchCultureDetail(queryServer, seq);   
    
    const dehydratedState = dehydrate(queryServer);

    return (
        <HydrationBoundary state={dehydratedState}>
            <BackgroundLayer>
                <CultrueInfoDetailWrapper>
                    <CultrueInfoDetailImg/>
                    <ContentsBox>
                        <h2 className="hidden">콘텐츠</h2>
                        <CultureInfoDetailBtnList/>
                        <CultrueInfoDetailBox />
                    </ContentsBox>
                </CultrueInfoDetailWrapper>
            </BackgroundLayer>
        </HydrationBoundary>
    )
}