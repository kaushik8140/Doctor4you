import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { memo } from "react"

const Searchdy = (props) => (
    <Svg
        width={20}
        height={22}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M8.6 18.599c4.748 0 8.598-4.03 8.598-9S13.348.6 8.6.6C3.85.6 0 4.63 0 9.6s3.85 8.999 8.6 8.999Z"
            fill="#009899"
        />
        <Path
            opacity={0.4}
            d="M18.675 21.354a1.297 1.297 0 0 1-.89-.4l-2.036-2.476a1.163 1.163 0 0 1-.08-1.582.957.957 0 0 1 .694-.302c.26 0 .51.108.693.302l2.561 2.13c.37.394.483.977.29 1.49a1.34 1.34 0 0 1-1.179.884l-.053-.046Z"
            fill="#009899"
        />
    </Svg>
)

export default memo(Searchdy);
