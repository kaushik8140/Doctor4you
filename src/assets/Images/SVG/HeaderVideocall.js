import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
import { memo } from "react"

const HeaderVideocall = (props) => (
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
            stroke="#A0A2B3"
            strokeOpacity={0.2}
        />
        <Path
            d="M30.521 12.462a.842.842 0 0 0-.307-.062.724.724 0 0 0-.552.237l-4.948 5.026V15.6a3.5 3.5 0 0 0-1.037-2.544C22.985 12.352 22.153 12 21.178 12h-8.642c-.974 0-1.807.352-2.499 1.056A3.5 3.5 0 0 0 9 15.6v8.8a3.5 3.5 0 0 0 1.037 2.544c.692.704 1.525 1.056 2.499 1.056h8.642c.974 0 1.807-.352 2.499-1.056a3.499 3.499 0 0 0 1.037-2.544v-2.075l4.948 5.038a.724.724 0 0 0 .552.237c.099 0 .2-.02.307-.062.32-.142.479-.388.479-.738V13.2c0-.35-.16-.596-.479-.738Z"
            fill="#009899"
        />
        <Path
            d="M14.715 24.286v-8.572M18.143 22.286v-4.572"
            stroke="#fff"
            strokeLinecap="round"
        />
    </Svg>
)

export default memo(HeaderVideocall);
