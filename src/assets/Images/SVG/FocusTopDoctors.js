import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"
import { memo } from "react"

const FocusTopDoctors = (props) => (
    <Svg
    width={30}
    height={38}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M30 14.769v.46c0 2.312-1.88 4.193-4.192 4.193h-6.385v6.386A4.197 4.197 0 0 1 15.231 30h-.46a4.197 4.197 0 0 1-4.193-4.192v-6.386H4.192A4.199 4.199 0 0 1 0 15.23v-.461a4.2 4.2 0 0 1 4.192-4.192h6.386V4.192A4.198 4.198 0 0 1 14.77 0h.461a4.198 4.198 0 0 1 4.192 4.192v6.385h6.385A4.197 4.197 0 0 1 30 14.769Z"
      fill="#009899"
    />
    <Rect x={10} y={33} width={11} height={5} rx={2.5} fill="#009899" />
  </Svg>
)

export default memo(FocusTopDoctors);
