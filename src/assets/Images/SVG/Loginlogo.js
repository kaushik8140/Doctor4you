import * as React from "react"
import Svg, { Rect, G, Path, Defs, ClipPath } from "react-native-svg"
import { memo } from "react"

const Loginlogo = (props) => (
    <Svg
        width={169}
        height={169}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Rect width={169} height={169} rx={84.5} fill="#fff" />
        <G clipPath="url(#a)">
            <Path
                d="M102.93 139.278c-6.29.8-12.308 1.724-18.36 2.281-5.404.501-10.786.013-16.005-1.641-10.519-3.34-15.068-11.358-12.597-22.115 1.275-5.551 3.685-10.619 6.964-15.203 9.504-13.271 20.049-25.575 33.548-35.027 2.83-1.979 5.711-3.884 8.623-5.737.678-.432 1.589-.687 2.397-.696 5.668-.056 11.34-.039 17.007-.026 2.951.004 4.476 1.534 4.48 4.497.009 6.964.009 13.933 0 20.897-.004 3.063-1.482 4.553-4.579 4.562-7.504.017-15.012.004-22.515.009h-1.974v1.879c0 7.504.004 15.012 0 22.516-.005 3.219-1.417 4.636-4.631 4.636-6.912.004-13.824.008-20.736 0-3.088-.004-4.548-1.465-4.561-4.549-.018-5.076-.018-10.153-.03-15.224 0-.035-.065-.07-.1-.104-.095.009-.242-.022-.285.03-4.661 5.876-8.851 12.006-9.979 19.661-.946 6.411 1.516 11.284 6.977 14.654 3.94 2.432 8.35 3.443 12.886 3.953 7.093.799 14.109.117 21.102-1.11 1.21-.212 1.663-.679 1.867-1.875.444-2.623 2.648-4.273 5.335-4.208 2.488.056 4.635 1.853 5.045 4.216.458 2.666-.838 5.077-3.253 6.036-2.523 1.01-4.873.133-6.626-2.312Zm4.631-.086c1.382.026 2.583-1.123 2.613-2.51.03-1.361-1.153-2.588-2.518-2.618-1.361-.026-2.584 1.153-2.605 2.523-.022 1.391 1.119 2.579 2.51 2.605Z"
                fill="#777A95"
            />
            <Path
                d="M81.831 61.2c-8.294 8.887-15.3 18.348-20.895 28.842-.212.401-.885.786-1.348.79-4.968.056-9.931.056-14.899.018-2.035-.018-3.624-1.5-3.642-3.578-.06-7.447-.069-14.9.005-22.348.021-2.276 1.788-3.702 4.255-3.706 8.907-.018 17.815-.013 26.722-.018h9.802ZM100.122 41.375c-.026 8.455-6.778 15.13-15.28 15.108-8.38-.022-15.067-6.843-15.046-15.345.017-8.424 6.886-15.224 15.284-15.138 8.428.09 15.068 6.878 15.042 15.375Z"
                fill="#009899"
            />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" transform="translate(41 26)" d="M0 0h88v116H0z" />
            </ClipPath>
        </Defs>
    </Svg>
)

export default memo(Loginlogo);