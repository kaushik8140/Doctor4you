import * as React from "react"
import Svg, { Circle, G, Path, Defs, ClipPath } from "react-native-svg"
import { memo } from "react"

const PhoneFill = (props) => (
    <Svg
        width={84}
        height={84}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Circle cx={42} cy={42} r={42} fill="#FC015B" />
        <G clipPath="url(#a)">
            <Path
                d="m25.868 48.474-4.146-4.145a1.658 1.658 0 0 1-.08-2.26 27.21 27.21 0 0 1 1.201-1.308c10.36-10.36 27.154-10.36 37.514 0 .324.323.724.76 1.2 1.308a1.658 1.658 0 0 1-.08 2.26l-4.144 4.145a.829.829 0 0 1-1.112.057 22.374 22.374 0 0 0-.722-.572 23.05 23.05 0 0 0-6.107-3.275.755.755 0 0 1-.492-.837l.722-4.337a21.63 21.63 0 0 0-16.046 0l.72 4.33a.766.766 0 0 1-.498.847 23.048 23.048 0 0 0-6.102 3.276c-.186.14-.426.329-.72.57a.829.829 0 0 1-1.11-.057l.002-.002Z"
                fill="#fff"
            />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path
                    fill="#fff"
                    transform="rotate(135 25.94 35.995)"
                    d="M0 0h39.789v39.789H0z"
                />
            </ClipPath>
        </Defs>
    </Svg>
)

export default memo(PhoneFill);
