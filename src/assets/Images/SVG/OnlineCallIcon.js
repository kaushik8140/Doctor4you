import * as React from "react"
import Svg, { Rect, G, Path } from "react-native-svg"
import { memo } from "react"

const OnlineCallIcon = (props) => (
    <Svg
        width={76}
        height={76}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Rect opacity={0.1} width={76} height={76} rx={20} fill="#097475" />
        <G opacity={0.4} fill="#097475">
            <Path d="m53.77 45.786-4.198-4.199c-1.12-1.12-3.077-1.122-4.199 0l-.7.7 8.397 8.397.7-.7a2.967 2.967 0 0 0 0-4.198ZM43.235 43.647c-.883.685-2.144.657-2.95-.151l-8.301-8.307c-.81-.809-.837-2.07-.152-2.951l-8.378-8.377c-3.604 4.2-3.463 10.53.515 14.509l13.135 13.14c3.817 3.818 10.07 4.324 14.51.515l-8.38-8.378ZM33.892 25.902l-4.198-4.198c-1.12-1.12-3.077-1.122-4.199 0l-.7.7 8.398 8.396.7-.7a2.966 2.966 0 0 0 0-4.198Z" />
        </G>
    </Svg>
)

export default memo(OnlineCallIcon);
