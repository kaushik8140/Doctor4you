import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
import { memo } from "react"

const HeadrVoicecall = (props) => (
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
            d="m29.485 24.757-2.486-2.486c-.663-.663-1.822-.664-2.486 0l-.415.415 4.972 4.971.415-.414c.688-.688.686-1.8 0-2.486ZM23.247 23.491c-.523.405-1.27.389-1.747-.09l-4.915-4.918c-.48-.48-.495-1.226-.09-1.748l-4.96-4.96c-2.135 2.488-2.051 6.236.304 8.591l7.777 7.78a6.29 6.29 0 0 0 8.592.305l-4.961-4.96ZM17.715 12.984l-2.486-2.486c-.663-.663-1.822-.665-2.486 0l-.414.414 4.972 4.972.414-.414c.688-.689.686-1.801 0-2.486Z"
            fill="#009899"
        />
    </Svg>
)

export default memo(HeadrVoicecall);
