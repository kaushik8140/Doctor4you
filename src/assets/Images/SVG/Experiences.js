import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
import { memo } from "react"

const Experiences = (props) => (
    <Svg
        width={50}
        height={50}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Circle opacity={0.1} cx={25} cy={25} r={25} fill="#777A95" />
        <Path
            d="M25 28a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"
            stroke="#009899"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M21.21 26.89 20 36l5-3 5 3-1.21-9.12"
            stroke="#009899"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

export default memo(Experiences);
