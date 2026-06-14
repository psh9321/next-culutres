"use client"

import { Portal } from "../Portal"

import { Btn, BtnList, ToastBox, ToastContents, ToastLayer, ToastTitle } from "./_html"

interface ALERT_PROPS {
    title : string
    contents : string
    cancelBtnTxt? : string
    cancelCallback : () => void
}

interface CONFIRM_PROPS extends ALERT_PROPS {
    submitBtnTxt? : string
    submitCallback : () => void
}

export const Alert = ({
    title,
    contents,
    cancelBtnTxt,
    cancelCallback,
} : ALERT_PROPS) => {
    return (
        <Portal>
            <ToastLayer>
                <ToastBox $hasBorder>
                    <dl>
                        <ToastTitle>{title}</ToastTitle>
                        <ToastContents dangerouslySetInnerHTML={{ __html : contents }} />
                    </dl>
                    <Btn $primary $full onClick={cancelCallback}>{cancelBtnTxt ?? "확인"}</Btn>
                </ToastBox>
            </ToastLayer>
        </Portal>
    )
}

export const Confirm = ({
    title,
    contents,
    cancelBtnTxt,
    submitBtnTxt,
    cancelCallback,
    submitCallback
} : CONFIRM_PROPS) => {
    return (
        <Portal>
            <ToastLayer>
                <ToastBox>
                    <dl>
                        <ToastTitle>{title}</ToastTitle>
                        <ToastContents dangerouslySetInnerHTML={{ __html : contents }} />
                    </dl>
                    <BtnList>
                        <li><Btn onClick={cancelCallback}>{cancelBtnTxt}</Btn></li>
                        <li><Btn $primary onClick={submitCallback}>{submitBtnTxt ?? "확인"}</Btn></li>
                    </BtnList>
                </ToastBox>
            </ToastLayer>
        </Portal>
    )
}
