import * as React from "react"
import Svg, { Rect, G, Path, Defs, ClipPath } from "react-native-svg"
import { memo } from "react"

const HouseVisit = (props) => (
    <Svg
        width={50}
        height={50}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Rect opacity={0.8} width={50} height={50} rx={15} fill="#F6F6F6" />
        <G clipPath="url(#a)" fill="#009899">
            <Path d="M38.53 23.517 25.967 12.07a1.43 1.43 0 0 0-1.934 0L11.47 23.517a1.427 1.427 0 0 0-.372 1.58c.216.557.742.917 1.34.917h2.006v11.47c0 .454.368.823.823.823h6.886a.823.823 0 0 0 .824-.824V30.52h4.047v6.963c0 .455.368.824.823.824h6.886a.823.823 0 0 0 .823-.824V26.014h2.007c.597 0 1.123-.36 1.339-.917a1.427 1.427 0 0 0-.372-1.58ZM35.341 13.337h-5.53l6.353 5.777V14.16a.823.823 0 0 0-.823-.823Z" />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" transform="translate(11 11)" d="M0 0h28v28H0z" />
            </ClipPath>
        </Defs>
    </Svg>
)

export default memo(HouseVisit);
