import { CultureInfoDetailPrefetchComponent } from "@/widgets/CultureInfoDetailPrefetchComponent";

const CultureInfoDetailParallelPageServer = async ({ params } : CULTURE_INFO_DETAIL_PAGE_SERVER) => {
    const { seq } = await params;
    
    return <CultureInfoDetailPrefetchComponent seq={seq}/>
}

export default CultureInfoDetailParallelPageServer