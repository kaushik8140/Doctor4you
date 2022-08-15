import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
import { memo } from "react"

const Mute = (props) => (
    <Svg
        width={60}
        height={60}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Rect opacity={0.15} width={60} height={60} rx={20} fill="#fff" />
        <Path
            d="M37.206 30.217c0-.502-.376-.886-.869-.886-.492 0-.868.384-.868.886 0 3.455-2.752 6.26-6.14 6.26s-6.14-2.805-6.14-6.26c0-.502-.376-.886-.868-.886s-.869.384-.869.886c0 4.104 3.012 7.559 7.008 8.002v2.362h-3.156c-.492 0-.869.384-.869.886s.377.886.869.886h8.05c.493 0 .87-.384.87-.886s-.377-.886-.87-.886h-3.156V38.22c3.996-.443 7.008-3.898 7.008-8.002Z"
            fill="#fff"
        />
        <Path
            d="M29.329 17.255c-2.664 0-4.836 2.214-4.836 4.93v8.003c0 2.746 2.172 4.93 4.836 4.96 2.664 0 4.836-2.214 4.836-4.93v-8.032c0-2.717-2.172-4.931-4.836-4.931Z"
            fill="#fff"
        />
        <Rect
            width={1.591}
            height={26.412}
            rx={0.795}
            transform="scale(.99025 1.00965) rotate(45 -4.13 56.124)"
            fill="#fff"
        />
        <Rect
            width={1.591}
            height={16.705}
            rx={0.795}
            transform="scale(.99025 1.00965) rotate(45 -12.159 55.049)"
            fill="#009899"
        />
    </Svg>
)

export default memo(Mute);
