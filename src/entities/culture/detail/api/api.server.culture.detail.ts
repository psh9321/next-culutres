import { BACKEND_API } from "@/shared/api/server.instance";
import { SetToken } from "@/shared/lib/token";

export async function API_SERVER_CULTURE_INFO_DETAIL(seq : string) {
    try {
        const api = await BACKEND_API(`culture/detail/${seq}`);

        if(!api.ok) throw api.statusText;

        await SetToken(api.headers);

        const result = await api.json() as API_SERVER_CULTURE_INFO_DETAIL;

        if(result["resultCode"] !== 200 || !result["data"]) {
            console.log("API_SERVER_CULTURE_INFO_DETAIL fail", result)
            return null;
        }

        return result["data"]
    }
    catch(err) { 
        console.log(err);
        throw err;
    }
}