import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { memo } from "react"

const Eyeopen = (props) => (
    <Svg
        width={24}
        height={18}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M1 9s4-8 11-8 11 8 11 8-4 8-11 8S1 9 1 9Z"
            stroke="#A0A2B3"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            stroke="#A0A2B3"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

export default memo(Eyeopen);
