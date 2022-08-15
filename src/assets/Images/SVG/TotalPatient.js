import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
import { memo } from "react"

const TotalPatient = (props) => (
    <Svg
        width={50}
        height={50}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Circle opacity={0.1} cx={25} cy={25} r={25} fill="#777A95" />
        <Path
            d="M30 34v-2a4 4 0 0 0-4-4h-8a4 4 0 0 0-4 4v2M22 24a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM36 34v-2a4 4 0 0 0-3-3.87M29 16.13a4 4 0 0 1 0 7.75"
            stroke="#009899"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

export default memo(TotalPatient);
