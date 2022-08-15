import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
import { memo } from "react"

const AttachIcon = (props) => (
    <Svg
        width={19}
        height={32}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            opacity={0.5}
            d="m17 7.088-.028 15.787a7.046 7.046 0 0 1-2.202 5.107c-1.406 1.336-3.311 2.06-5.297 2.016a7.75 7.75 0 0 1-5.29-2.255C2.783 26.343 1.998 24.47 2 22.537L2.028 6.75a4.697 4.697 0 0 1 1.468-3.405 4.958 4.958 0 0 1 3.531-1.344c1.324.03 2.592.571 3.527 1.504a4.901 4.901 0 0 1 1.455 3.47l-.036 15.796a2.349 2.349 0 0 1-.734 1.702 2.479 2.479 0 0 1-1.766.672 2.584 2.584 0 0 1-1.763-.752 2.45 2.45 0 0 1-.728-1.735l.034-14.576"
            stroke="#009899"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

export default memo(AttachIcon);
