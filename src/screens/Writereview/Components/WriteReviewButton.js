import React from 'react'
import {
    StyleSheet, Text, View,
    Image, TouchableOpacity,
} from 'react-native'
import Colors from '../../../common/Colors'
import FontFamily from '../../../common/FontFamily'

const WriteReviewButton = ({ isActive, onPress, title }) => {
    return (
        <TouchableOpacity
            style={[styles.container, {
                borderColor: isActive ? Colors.primary : Colors.white,
                backgroundColor: Colors.white
            }]}
            onPress={onPress}
        >

            {/* space */}
            <View width={14} />

            {/* title */}
            <Text style={{ fontSize: 16, fontFamily: FontFamily.semiBold, color: isActive ? Colors.primary : Colors.gray }}>{title}</Text>
        </TouchableOpacity>
    )
}

export default WriteReviewButton

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        borderWidth: 1,
        borderRadius: 10,
    },
    image: {
        height: 40,
        width: 40,
    },
    text: {

    },
});
