import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
import { memo } from "react"

const Videocall_Icon = (props) => (
    <Svg
        width={50}
        height={50}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Rect opacity={0.8} width={50} height={50} rx={15} fill="#F6F6F6" />
        <Path
            d="M38.146 15.583a1.061 1.061 0 0 0-.387-.079c-.28 0-.511.1-.697.3l-6.24 6.338v-2.601c0-1.251-.437-2.32-1.31-3.209C28.64 15.444 27.59 15 26.363 15H15.46c-1.229 0-2.28.444-3.152 1.332-.872.889-1.308 1.958-1.308 3.209v11.1c0 1.25.436 2.32 1.308 3.209.873.888 1.923 1.332 3.152 1.332H26.36c1.23 0 2.28-.444 3.152-1.333.872-.888 1.308-1.957 1.308-3.208v-2.617l6.241 6.354c.186.2.418.3.697.3.124 0 .253-.027.387-.08.403-.178.604-.488.604-.93V16.514c0-.442-.201-.752-.604-.93Z"
            fill="#009899"
        />
        <Path
            d="M18.208 30.497V19.685m4.324 8.29v-5.767"
            stroke="#fff"
            strokeWidth={1.7}
            strokeLinecap="round"
        />
    </Svg>
)

export default memo(Videocall_Icon);
