import * as React from "react"
import Svg, { Rect, G, Path } from "react-native-svg"
import { memo } from "react"

const OnlineVideoIcon = (props) => (
    <Svg
        width={76}
        height={76}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Rect opacity={0.1} width={76} height={76} rx={20} fill="#097475" />
        <G opacity={0.4}>
            <Path
                d="M56.292 24.647a1.464 1.464 0 0 0-.534-.109c-.384 0-.704.138-.96.413l-8.602 8.737v-3.586c0-1.724-.601-3.198-1.804-4.423-1.202-1.224-2.65-1.836-4.343-1.836H25.023c-1.693 0-3.141.612-4.344 1.836-1.202 1.225-1.803 2.699-1.803 4.423v15.3c0 1.724.601 3.197 1.803 4.422 1.203 1.224 2.65 1.836 4.344 1.836h15.026c1.693 0 3.14-.612 4.343-1.836 1.203-1.225 1.804-2.698 1.804-4.423v-3.607l8.602 8.758c.256.275.576.413.96.413.17 0 .349-.037.534-.109.555-.246.832-.673.832-1.282V25.93c0-.608-.277-1.036-.832-1.282Z"
                fill="#097475"
            />
            <Path
                d="M28.81 45.203V30.3M34.771 41.726v-7.948"
                stroke="#F6F6F6"
                strokeWidth={2}
                strokeLinecap="round"
            />
        </G>
    </Svg>
)

export default memo(OnlineVideoIcon);
