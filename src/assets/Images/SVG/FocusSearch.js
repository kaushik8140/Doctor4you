import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"
import { memo } from "react"

const FocusSearch = (props) => (
    <Svg
        width={30}
        height={38}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M12.899 25.96c7.124 0 12.899-5.812 12.899-12.98C25.798 5.81 20.023 0 12.898 0 5.776 0 0 5.811 0 12.98c0 7.168 5.775 12.98 12.899 12.98Z"
            fill="#009899"
        />
        <Path
            opacity={0.7}
            d="M28.012 29.933a1.982 1.982 0 0 1-1.334-.577l-3.055-3.57a1.631 1.631 0 0 1-.12-2.283 1.463 1.463 0 0 1 2.081 0l3.842 3.074c.553.566.724 1.407.436 2.147A2.002 2.002 0 0 1 28.092 30l-.08-.067Z"
            fill="#C0E6E6"
        />
        <Rect x={9} y={33} width={11} height={5} rx={2.5} fill="#009899" />
    </Svg>
)

export default memo(FocusSearch);
