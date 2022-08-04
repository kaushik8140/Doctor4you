import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"
import { memo } from "react"

const FocusDocument = (props) => (
    <Svg
        width={30}
        height={38}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M21.985 0H8.017C2.95 0 0 2.67 0 7.245V22.74C0 27.39 2.95 30 8.017 30h13.968C27.133 30 30 27.39 30 22.74V7.245C30 2.67 27.133 0 21.985 0Z"
            fill="#009899"
        />
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.805 6.975v.015a1.17 1.17 0 0 0 0 2.34h4.484c.646 0 1.171-.525 1.171-1.186 0-.644-.525-1.169-1.171-1.169H8.805Zm11.76 9.135H8.805a1.17 1.17 0 0 1 0-2.341h11.76a1.172 1.172 0 0 1 0 2.341Zm0 6.855H8.805c-.45.06-.885-.165-1.125-.54a1.192 1.192 0 0 1 1.125-1.815h11.76c.599.06 1.05.57 1.05 1.185 0 .598-.451 1.11-1.05 1.17Z"
            fill="#D3EDED"
        />
        <Rect x={10} y={33} width={11} height={5} rx={2.5} fill="#009899" />
    </Svg>
)

export default memo(FocusDocument);
