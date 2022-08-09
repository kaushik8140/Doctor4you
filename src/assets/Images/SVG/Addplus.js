import * as React from "react"
import { memo } from "react"
import Svg, { Rect, Path } from "react-native-svg"

const Addplus = (props) => (
    <Svg
        width={40}
        height={40}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Rect
            x={0.5}
            y={0.5}
            width={39}
            height={39}
            rx={9.5}
            fill="#F6F6F6"
            stroke="#129A7F"
        />
        <Path
            d="M20 13v14M13 20h14"
            stroke="#129A7F"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

export default memo(Addplus);
