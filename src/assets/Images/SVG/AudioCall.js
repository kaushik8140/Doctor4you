import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"
import { memo } from "react"

const AudioCall = (props) => (
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
            d="m24.69 21.854-1.49-1.491a1.08 1.08 0 0 0-1.492 0l-.249.248 2.983 2.983.249-.248a1.054 1.054 0 0 0 0-1.492ZM20.948 21.095a.79.79 0 0 1-1.048-.054l-2.95-2.951a.791.791 0 0 1-.053-1.049l-2.976-2.976c-1.28 1.492-1.23 3.741.182 5.155l4.667 4.668a3.774 3.774 0 0 0 5.155.183l-2.977-2.977ZM17.629 14.79 16.137 13.3a1.08 1.08 0 0 0-1.491 0l-.249.248 2.983 2.983.249-.248a1.054 1.054 0 0 0 0-1.492Z"
            fill="#fff"
        />
    </Svg>
)

export default memo(AudioCall);
