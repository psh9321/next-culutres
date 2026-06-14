"use client"

import Image from "next/image";

import { useState } from "react";

import { decode } from "he";

import { SquareX } from "lucide-react";

import { Portal } from "@/shared/ui/Portal";
import { BackgroundLayer } from "@/shared/ui/BackgroundLayer";

import { SrcHttpToHttps } from "@/shared/util/srcHttpToHttps";
import { CultureInfoDateFormat } from "@/shared/util/dateFormat";
import { ShowOnGoingInfo } from "@/shared/util/showOnGoingInfo";

import { BtnMarker, BtnTargetCultureInfoListBox, ImgBox, TargetCultureInfoList, TargetCultureInfoListBox } from "./_html";

interface NAVI_MARKER {
    items : CULTURE_ITEM[],
    navigationCallback : (seq : string) => void
}

export const NaviMarker = ({ items, navigationCallback } : NAVI_MARKER) => {

    const [ isList, SetIsList ] = useState(false);

    const firstItem = items?.[0];

    function OnClickRouterCallback(seq : string) {
        navigationCallback(seq)
    }
    
    if(!items) return <></>

    return (
        <>
            <BtnMarker onClick={() => SetIsList(true)} title={`${firstItem.title} 외 ${items.length}개 전시`}>
                {items.length}
            </BtnMarker>
            {
                isList && <Portal>
                    <TargetCultureInfoListBox>
                        <h2 className="hidden">지역별 전시 박스</h2>
                        <BtnTargetCultureInfoListBox onClick={() => SetIsList(false)}>
                            <SquareX/>
                        </BtnTargetCultureInfoListBox>
                        <TargetCultureInfoList>
                            {
                                items.map((item, i) => {
                                    const showOnGoingInfo = new ShowOnGoingInfo(item["startDate"], item["endDate"]);
                                   return (
                                    <li key={`해당지역전시-${item["title"]}-${i}`}>
                                        <div onClick={() => OnClickRouterCallback(item["seq"])}>
                                            <ImgBox>
                                                <Image fill unoptimized
                                                sizes="100vw"
                                                loading="lazy" src={SrcHttpToHttps(item["thumbnail"])} alt={`${item.title} 썸네일`}  />
                                            {item["title"]}
                                            </ImgBox>
                                            <dl>
                                                <dt>{item["title"]}</dt>
                                                <dd>{decode(item["place"])}</dd>
                                                <dd>{`${CultureInfoDateFormat(item["startDate"])} ~ ${CultureInfoDateFormat(item["endDate"])}`}</dd>
                                                <dd className="util">
                                                    { item["area"] && <span>{item["area"]}</span> }
                                                    <span style={{backgroundColor : showOnGoingInfo["statusColor"]}}>{showOnGoingInfo["status"]}</span>
                                                </dd>
                                            </dl>
                                        </div>
                                    </li>
                                   )
                                })
                            }
                        </TargetCultureInfoList>
                    </TargetCultureInfoListBox>
                    <BackgroundLayer style={{
                        backgroundColor : "rgba(0,0,0,0.8)"
                    }} onClick={() => {}}/>
                </Portal>
            }        
        </>

    )
}
