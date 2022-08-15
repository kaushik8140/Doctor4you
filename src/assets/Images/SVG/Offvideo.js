import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
import { memo } from "react"

const Offvideo = (props) => (
    <Svg
        width={60}
        height={60}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Rect opacity={0.15} width={60} height={60} rx={20} fill="#fff" />
        <Path
            d="M44.543 19.026a1.156 1.156 0 0 0-.422-.086.994.994 0 0 0-.758.326l-6.792 6.898v-2.83c0-1.362-.474-2.526-1.424-3.493-.95-.966-2.092-1.45-3.43-1.45H19.854c-1.336 0-2.48.484-3.43 1.45-.948.967-1.423 2.13-1.423 3.492v12.08c0 1.362.475 2.525 1.424 3.492.95.966 2.093 1.45 3.43 1.45h11.864c1.337 0 2.48-.483 3.43-1.45.949-.967 1.423-2.13 1.423-3.492v-2.848l6.792 6.915a.994.994 0 0 0 .758.326c.135 0 .276-.029.422-.086.438-.194.657-.532.657-1.012v-18.67c0-.48-.22-.818-.657-1.012Z"
            fill="#fff"
        />
        <Path
            d="M22.844 35.256V23.49M27.55 32.51v-6.275"
            stroke="#2AA48C"
            strokeWidth={2}
            strokeLinecap="round"
        />
        <Rect
            x={35.768}
            y={15}
            width={2.353}
            height={32.868}
            rx={1.177}
            transform="rotate(30 35.768 15)"
            fill="#fff"
        />
        <Rect
            x={36.026}
            y={19.259}
            width={2.353}
            height={25.748}
            rx={1.177}
            transform="rotate(30 36.026 19.26)"
            fill="#2AA48C"
        />
    </Svg>
)

export default memo(Offvideo);
