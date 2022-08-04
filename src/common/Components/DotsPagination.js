import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../Colors';
import Plusdot from '../../assets/Images/SVG/Plusdot';
import Plussmall from '../../assets/Images/SVG/Plussmall';

const DotsPagination = ({ totalPage, currentPage, style, activeDotStyle, inactiveDotStyle }) => {

    return (
        <View style={[styles.container, {
            ...style
        }]}>
            {
                Array(totalPage).fill(0).map((_, index) => {

                    const isActive = index === currentPage;

                    return (
                        // <View
                        //     key={index + "_dotPage"}
                        //     style={[
                        //         styles.dot,
                        //         isActive
                        //             ?
                        //             { ...styles.activeDot, ...activeDotStyle }
                        //             :
                        //             { ...inactiveDotStyle },
                        //         ,
                        //     ]}
                        // />
                        <View style={{ marginHorizontal: 5 }}>
                            {
                                isActive ?
                                    <Plusdot />
                                    :
                                    <Plussmall />
                            }
                        </View>
                    )
                })
            }
        </View>
    )
}

export default memo(DotsPagination);

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        marginVertical: 4,
        // backgroundColor: Colors.red,
        width: "100%",
    },
    dot: {
        width: 5,
        height: 5,
        backgroundColor: Colors.placeholderGray,
        marginHorizontal: 2.5,
    },
    activeDot: {
        width: 18,
        backgroundColor: Colors.primary,
    },
});