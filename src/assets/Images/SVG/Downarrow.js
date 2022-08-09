import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"
import { memo } from "react"

const Downarrow = (props) => (
    <Svg
        width={14}
        height={8}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="m1 1 6 6 6-6"
            stroke="#A0A2B3"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

export default memo(Downarrow);
