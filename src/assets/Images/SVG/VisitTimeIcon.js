import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
import { memo } from "react"

const VisitTimeIcon = (props) => (
    <Svg
        width={22}
        height={22}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M11 21c5.523 0 10-4.477 10-10S16.523 1 11 1 1 5.477 1 11s4.477 10 10 10Z"
            stroke="#009899"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M11 5v6l4 2"
            stroke="#009899"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

export default memo(VisitTimeIcon);
