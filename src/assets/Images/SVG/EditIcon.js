import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
import { memo } from "react"

const EditIcon = (props) => (
    <Svg
        width={36}
        height={36}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Rect
            width={36}
            height={36}
            rx={6}
            transform="matrix(1 0 0 -1 0 36)"
            fill="#DEEDEE"
        />
        <Path
            d="M24.574 7.125c-.533.171-.67.275-1.676 1.276l-.966.962 2.35 2.35 2.355 2.355.906-.902c.967-.963 1.19-1.246 1.332-1.693.194-.627.15-1.203-.141-1.809-.164-.344-.224-.417-1.105-1.293-.988-.989-1.16-1.113-1.723-1.264-.33-.09-1.035-.081-1.332.018ZM14.49 16.81l-6.11 6.11-.697 2.793c-.511 2.05-.691 2.827-.666 2.913a.544.544 0 0 0 .348.357c.116.03 5.483-1.272 5.694-1.384.06-.03 2.84-2.788 6.179-6.127l6.067-6.072-2.355-2.354-2.35-2.35-6.11 6.114Z"
            fill="#009899"
        />
    </Svg>
)

export default memo(EditIcon);
