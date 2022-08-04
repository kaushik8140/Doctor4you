import React, { memo } from "react";
import Svg, { Rect, Path } from "react-native-svg"

const LeftArrow = ({ color = "#ED7E03", scale = 1, ...props }) => {
  return (
    <Svg
    width={40}
    height={40}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect width={40} height={40} rx={10} fill="#F6F6F6" />
    <Rect
      x={0.5}
      y={0.5}
      width={39}
      height={39}
      rx={9.5}
      stroke="#A0A2B3"
      strokeOpacity={0.2}
    />
    <Path
      d="M26 20H14M21 27l-7-7 7-7"
      stroke="#777A95"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
  );
}

export default memo(LeftArrow);