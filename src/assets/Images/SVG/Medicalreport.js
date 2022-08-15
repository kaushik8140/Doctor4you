import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"
import { memo } from "react"

const Medicalreport = (props) => (
    <Svg
        width={170}
        height={170}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        {...props}
    >
        <Path
            d="M0 20C0 8.954 8.954 0 20 0h130c11.046 0 20 8.954 20 20v150H20c-11.046 0-20-8.954-20-20V20Z"
            fill="url(#a)"
        />
        <Defs>
            <Pattern
                id="a"
                patternContentUnits="objectBoundingBox"
                width={1}
                height={1}
            >
                <Use xlinkHref="#b" transform="matrix(.00105 0 0 .00105 -.226 0)" />
            </Pattern>
            <Image
                id="b"
                width={1380}
                height={950}
            />
        </Defs>
    </Svg>
)

export default memo(Medicalreport);