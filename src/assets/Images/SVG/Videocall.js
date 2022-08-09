import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
import { memo } from "react"

const Videocall = (props) => (
    <Svg
        width={38}
        height={38}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Rect
            x={1.5}
            y={1.5}
            width={35}
            height={35}
            rx={17.5}
            fill="#009899"
            stroke="#fff"
            strokeWidth={3}
        />
        <Path
            d="M27.14 13.347a.631.631 0 0 0-.23-.047.543.543 0 0 0-.414.178l-3.71 3.769V15.7c0-.744-.26-1.38-.779-1.908A2.531 2.531 0 0 0 20.134 13h-6.482c-.73 0-1.355.264-1.874.792A2.625 2.625 0 0 0 11 15.7v6.6c0 .744.26 1.38.778 1.908a2.532 2.532 0 0 0 1.874.792h6.482c.73 0 1.355-.264 1.874-.792a2.624 2.624 0 0 0 .778-1.908v-1.556l3.71 3.778c.11.119.249.178.415.178.073 0 .15-.016.23-.047a.56.56 0 0 0 .359-.553V13.9a.56.56 0 0 0-.36-.553Z"
            fill="#fff"
        />
        <Path
            d="M15.286 22.214v-6.428M17.857 20.714v-3.428"
            stroke="#009899"
            strokeLinecap="round"
        />
    </Svg>
)

export default memo(Videocall);
