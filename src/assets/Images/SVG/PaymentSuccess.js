import * as React from "react"
import Svg, { Rect, Path, G, Defs, ClipPath } from "react-native-svg"
import { memo } from "react"

const PaymentSuccess = (props) => (
    <Svg
        width={104}
        height={110}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Rect y={10} width={100} height={100} rx={25} fill="#F6F6F6" />
        <Path
            d="M86 1.5c-9.1 0-16.5 7.4-16.5 16.5S76.9 34.5 86 34.5s16.5-7.4 16.5-16.5S95.1 1.5 86 1.5Z"
            fill="#009899"
            stroke="#fff"
            strokeWidth={3}
        />
        <Path
            d="m93.322 15.134-8.126 8.125a1.246 1.246 0 0 1-1.767 0l-4.062-4.063a1.248 1.248 0 0 1 0-1.767 1.248 1.248 0 0 1 1.767 0l3.179 3.179 7.241-7.241a1.248 1.248 0 0 1 1.768 0 1.249 1.249 0 0 1 0 1.767Z"
            fill="#FAFAFA"
        />
        <G clipPath="url(#a)" fill="#009899">
            <Path d="M70.295 57.776 51.45 40.606a2.144 2.144 0 0 0-2.902-.001l-18.844 17.17a2.14 2.14 0 0 0-.557 2.37 2.14 2.14 0 0 0 2.008 1.376h3.01v17.204c0 .682.553 1.235 1.235 1.235H45.73c.682 0 1.235-.553 1.235-1.235V68.28h6.07v10.445c0 .682.553 1.235 1.236 1.235h10.328c.682 0 1.235-.553 1.235-1.235V61.521h3.01a2.14 2.14 0 0 0 2.009-1.375 2.141 2.141 0 0 0-.558-2.37ZM65.511 42.505h-8.294l9.53 8.666v-7.43c0-.683-.553-1.236-1.236-1.236Z" />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" transform="translate(29 39)" d="M0 0h42v42H0z" />
            </ClipPath>
        </Defs>
    </Svg>
)

export default memo(PaymentSuccess);
