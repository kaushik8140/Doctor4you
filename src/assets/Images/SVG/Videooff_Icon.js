import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
import { memo } from "react"

const Videooff_Icon = (props) => (
    <Svg
        width={60}
        height={60}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Rect opacity={0.15} width={60} height={60} rx={20} fill="#fff" />
        <Path
            d="M44.539 19.635a1.155 1.155 0 0 0-.422-.086.993.993 0 0 0-.758.326l-6.79 6.897v-2.83c0-1.362-.475-2.526-1.425-3.492-.949-.967-2.092-1.45-3.429-1.45H19.853c-1.337 0-2.48.483-3.43 1.45-.948.966-1.423 2.13-1.423 3.491V36.02c0 1.36.475 2.524 1.424 3.491.95.966 2.092 1.45 3.429 1.45h11.862c1.338 0 2.48-.483 3.43-1.45.949-.967 1.423-2.13 1.423-3.491V33.17l6.791 6.915a.993.993 0 0 0 .758.326c.135 0 .276-.029.422-.086.438-.194.657-.532.657-1.012V20.647c0-.48-.219-.818-.657-1.012Z"
            fill="#fff"
        />
        <Path
            d="M22.843 35.863V24.098M27.549 33.118v-6.275"
            stroke="#009899"
            strokeWidth={2}
            strokeLinecap="round"
        />
    </Svg>
)

export default memo(Videooff_Icon);
