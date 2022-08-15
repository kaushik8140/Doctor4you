import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
import { memo } from "react"

const Messaging_Icon = (props) => (
    <Svg
        width={50}
        height={50}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Rect width={50} height={50} rx={15} fill="#F6F6F6" />
        <Path
            d="M28.324 14H15.175A2.185 2.185 0 0 0 13 16.2v8.801c0 1.217.972 2.2 2.175 2.2h.725v2.2c0 .53.543.914 1.074.646.014-.015.043-.015.058-.03 3.988-2.705 3.095-2.102 3.988-2.698a.724.724 0 0 1 .391-.118h6.913a2.185 2.185 0 0 0 2.175-2.2v-8.8c0-1.218-.971-2.201-2.175-2.201Zm-5.801 8.8h-5.898c-.955 0-.96-1.466 0-1.466h5.898c.956 0 .96 1.467 0 1.467Zm4.35-2.933H16.626c-.955 0-.96-1.467 0-1.467h10.249c.955 0 .96 1.467 0 1.467Z"
            fill="#009899"
        />
        <Path
            d="M35.575 19.867h-3.626v5.134c0 2.024-1.624 3.667-3.625 3.667h-6.695l-1.378.924v1.276c0 1.218.972 2.2 2.175 2.2h7.13l4.162 2.817c.568.319 1.132-.07 1.132-.616v-2.2h.725a2.185 2.185 0 0 0 2.175-2.2v-8.802c0-1.217-.972-2.2-2.175-2.2Z"
            fill="#009899"
        />
    </Svg>
)

export default memo(Messaging_Icon);