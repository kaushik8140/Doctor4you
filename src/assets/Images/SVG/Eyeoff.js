import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { memo } from "react"

const Eyeoff = (props) => (
    <Svg
        width={24}
        height={23}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M1 12.138s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8Z"
            stroke="#A0A2B3"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M12 15.138a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            stroke="#A0A2B3"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            fill="#A0A2B3"
            stroke="#F6F6F6"
            strokeWidth={0.3}
            d="m17.705.768 1.495.863L7.003 22.757l-1.495-.863z"
        />
    </Svg>
)

export default memo(Eyeoff);
