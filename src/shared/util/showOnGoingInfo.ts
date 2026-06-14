import { CultureInfoDateFormat } from "@/shared/util/dateFormat";

export class ShowOnGoingInfo {
    status : "진행 예정" | "진행 중" | "종료";
    statusColor : string
    constructor(startDate : CULTURE_ITEM["startDate"], endDate : CULTURE_ITEM["endDate"]) {
        
        const startTime = new Date(CultureInfoDateFormat(startDate).replaceAll(".","-"));
        const endTime = new Date(CultureInfoDateFormat(endDate).replaceAll(".","-"));

        const currentTime = new Date();

        if(currentTime < startTime) {
            this.status = "진행 예정";
            this.statusColor = "#10B981";
        }
        else {
            this.status = currentTime <= endTime ? "진행 중" : "종료";
            this.statusColor = currentTime <= endTime ? "#7e4ed5" : "#52525B";
        }
    }
}