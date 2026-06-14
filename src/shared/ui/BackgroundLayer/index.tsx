"use client"

import { Layer } from "./_html"

interface BACKGROUND_LAYER {
    onClick : () => void
    style? : React.CSSProperties
}

export const BackgroundLayer = ({ onClick, style } : BACKGROUND_LAYER) => {

    return (
        <Layer style={style} onClick={onClick} />
    )
}