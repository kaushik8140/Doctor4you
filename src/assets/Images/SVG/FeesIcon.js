import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"
import { memo } from "react"

const FeesIcon = (props) => (
    <Svg
        width={13}
        height={19}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M5.37 19 .69 10.836V8.912h1.56c.624 0 1.17-.087 1.638-.26.485-.19.884-.46 1.196-.806.33-.347.555-.763.676-1.248H.69V4.674h5.044a3.147 3.147 0 0 0-.546-1.196 2.394 2.394 0 0 0-.988-.806c-.399-.208-.884-.312-1.456-.312H.69V.436h11.726V2.36H8.334c.295.33.537.685.728 1.066.208.381.347.797.416 1.248h2.938v1.924H9.53c-.173 1.283-.667 2.288-1.482 3.016-.815.71-1.863 1.196-3.146 1.456L9.998 19H5.37Z"
            fill="#009899"
        />
    </Svg>
)

export default memo(FeesIcon);
