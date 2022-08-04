import React from 'react';
import Colors from '../Colors';
import DotsPagination from './DotsPagination';

const DotsKS = ({
    length, pageDotNumber, style,
    activeDotStyle, inactiveDotStyle
}) => {
    return (
        <DotsPagination
            totalPage={length}
            currentPage={pageDotNumber}
            style={style}
            activeDotStyle={activeDotStyle}
            inactiveDotStyle={inactiveDotStyle}
        />
    )
}

export default DotsKS;