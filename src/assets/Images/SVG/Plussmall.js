import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { memo } from "react"

const Plussmall = (props) => (
    <Svg
        width={6}
        height={6}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M4.281 2.471c.576.081 1.04.119 1.388.119.124 0 .233-.006.331-.015l-.576 1.23c-.4.084-.872.141-1.413.173-.11.706-.165 1.262-.165 1.665 0 .135.006.256.02.357l-1.229-.576a9.834 9.834 0 0 1-.173-1.414A41.483 41.483 0 0 1 0 3.883c.3-.64.846-1.273 1.638-1.898l.8.164C2.454 1.498 2.494.78 2.555 0c.639.3 1.272.847 1.897 1.639-.06.29-.118.57-.17.832Z"
            fill="#009899"
            opacity={0.3}
        />
    </Svg>
)

export default memo(Plussmall);
