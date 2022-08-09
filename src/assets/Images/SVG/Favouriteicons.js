import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"
import { memo } from "react"

const Favouriteicons = (props) => (
    <Svg
        width={38}
        height={36}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M0 0h28c5.523 0 10 4.477 10 10v26H10C4.477 36 0 31.523 0 26V0Z"
            fill="#009899"
        />
        <Path
            d="M26.612 11.415a4.731 4.731 0 0 0-1.537-1.047 4.659 4.659 0 0 0-3.626 0 4.732 4.732 0 0 0-1.536 1.046l-.913.93-.913-.93a4.693 4.693 0 0 0-3.35-1.413 4.693 4.693 0 0 0-3.35 1.414A4.875 4.875 0 0 0 10 14.828c0 1.28.5 2.509 1.387 3.414l.913.93L19 26l6.7-6.828.912-.93c.44-.448.79-.98 1.027-1.566a4.908 4.908 0 0 0 0-3.695 4.833 4.833 0 0 0-1.027-1.566Z"
            fill="#fff"
        />
    </Svg>
)

export default memo(Favouriteicons);
