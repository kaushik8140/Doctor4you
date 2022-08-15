import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
import { memo } from "react"

const Voicecall_Icon = (props) => (
    <Svg
        width={50}
        height={50}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Rect opacity={0.8} width={50} height={50} rx={15} fill="#F6F6F6" />
        <Path
            d="M35.433 30.233 32.7 27.498c-.73-.73-2.004-.73-2.735 0l-.456.456 5.47 5.47.455-.457a1.932 1.932 0 0 0 0-2.734ZM28.572 28.84c-.576.446-1.397.428-1.922-.099l-5.407-5.41c-.527-.527-.544-1.348-.099-1.922l-5.456-5.456c-2.348 2.736-2.256 6.859.335 9.45l8.555 8.559a6.92 6.92 0 0 0 9.45.335l-5.456-5.457ZM22.487 17.282l-2.735-2.734c-.73-.73-2.004-.731-2.735 0l-.456.456 5.47 5.469.456-.456a1.932 1.932 0 0 0 0-2.735Z"
            fill="#009899"
        />
    </Svg>
)

export default memo(Voicecall_Icon);
