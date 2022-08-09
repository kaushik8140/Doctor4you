import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
import { memo } from "react"

const Messaging = (props) => (
    <Svg
        width={38}
        height={38}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Rect
            x={1.5}
            y={1.5}
            width={35}
            height={35}
            rx={17.5}
            fill="#009899"
            stroke="#fff"
            strokeWidth={3}
        />
        <Path
            d="M24.314 16.2h-1.978V19c0 1.105-.886 2-1.978 2h-3.652l-.75.505v.696c0 .664.529 1.2 1.186 1.2h3.889l2.27 1.536c.31.174.617-.038.617-.336v-1.2h.396c.656 0 1.186-.536 1.186-1.2v-4.8c0-.665-.53-1.2-1.186-1.2Z"
            fill="#fff"
        />
        <Path
            d="M20.358 13h-7.171C12.53 13 12 13.536 12 14.2V19c0 .665.53 1.2 1.187 1.2h.395v1.2c0 .29.296.5.585.353.008-.008.024-.008.032-.016 2.176-1.476 1.688-1.147 2.175-1.472a.395.395 0 0 1 .214-.064h3.77c.657 0 1.187-.536 1.187-1.2v-4.8c0-.665-.53-1.201-1.187-1.201Zm-3.164 4.8h-3.216c-.522 0-.524-.8 0-.8h3.216c.522 0 .524.8 0 .8Zm2.373-1.6h-5.59c-.52 0-.523-.8 0-.8h5.59c.522 0 .524.8 0 .8Z"
            fill="#fff"
        />
    </Svg>
)

export default memo(Messaging);
