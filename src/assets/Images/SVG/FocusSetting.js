import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"
import { memo } from "react"

const FocusSetting = (props) => (
    <Svg
        width={30}
        height={38}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            opacity={0.7}
            d="M21.113 0h5.08C28.295 0 30 1.719 30 3.84v5.122c0 2.121-1.704 3.84-3.808 3.84h-5.079c-2.103 0-3.808-1.719-3.808-3.84V3.84c0-2.121 1.705-3.84 3.808-3.84Z"
            fill="#C0E6E6"
        />
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.808 0h5.079c2.103 0 3.808 1.719 3.808 3.84v5.122c0 2.121-1.705 3.84-3.808 3.84h-5.08C1.705 12.802 0 11.083 0 8.962V3.84C0 1.719 1.704 0 3.808 0Zm0 17.198h5.079c2.103 0 3.808 1.719 3.808 3.84v5.122c0 2.12-1.705 3.84-3.808 3.84h-5.08C1.705 30 0 28.28 0 26.16v-5.122c0-2.121 1.704-3.84 3.808-3.84Zm22.384 0h-5.079c-2.103 0-3.808 1.719-3.808 3.84v5.122c0 2.12 1.705 3.84 3.808 3.84h5.08C28.295 30 30 28.28 30 26.16v-5.122c0-2.121-1.704-3.84-3.808-3.84Z"
            fill="#009899"
        />
        <Rect x={10} y={33} width={11} height={5} rx={2.5} fill="#009899" />
    </Svg>
)

export default memo(FocusSetting);
