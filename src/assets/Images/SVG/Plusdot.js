import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { memo } from "react"

const Plusdot = (props) => (
    <Svg
        width={12}
        height={12}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M8.562 4.943c1.152.161 2.08.236 2.776.236.247 0 .466-.011.662-.029l-1.152 2.46c-.8.167-1.744.282-2.827.346-.219 1.411-.328 2.523-.328 3.33 0 .27.011.512.04.714l-2.459-1.152c-.167-.801-.282-1.746-.345-2.829A82.958 82.958 0 0 1 0 7.766c.599-1.28 1.693-2.547 3.276-3.797.553.115 1.089.225 1.601.329A78.88 78.88 0 0 1 5.107 0c1.279.6 2.546 1.694 3.795 3.278-.12.582-.236 1.14-.34 1.665Z"
            fill="#009899"
        />
    </Svg>
)

export default memo(Plusdot);
