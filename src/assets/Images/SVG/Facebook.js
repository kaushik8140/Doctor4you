import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
import { memo } from "react"

const Facebook = (props) => (
    <Svg
        width={50}
        height={50}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Rect
            x={0.4}
            y={0.4}
            width={49.2}
            height={49.2}
            rx={13.6}
            stroke="#DDDADA"
            strokeWidth={0.8}
        />
        <Path
            d="M30 16.667h-2.5a4.167 4.167 0 0 0-4.167 4.166v2.5h-2.5v3.334h2.5v6.666h3.334v-6.666h2.5L30 23.333h-3.333v-2.5A.833.833 0 0 1 27.5 20H30v-3.333Z"
            fill="#1877F2"
        />
    </Svg>
)

export default memo(Facebook);
