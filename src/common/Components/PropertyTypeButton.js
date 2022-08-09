import React from 'react'
import {
    StyleSheet, Text, View,
    Image, TouchableOpacity,
} from 'react-native'
import Colors from '../../common/Colors';


const PropertyTypeButton = ({ isActive, onPress, title, inactiveStyle, activeStyle, activeTextStyle, inactiveTextStyle }) => {
    return (
        <TouchableOpacity
            style={[styles.container, { borderColor: isActive ? activeStyle : inactiveStyle }]}
            onPress={onPress}
        >
            <Text style={[styles.textstyle, { backgroundColor: isActive ? activeStyle : inactiveStyle, color: isActive ? activeTextStyle : inactiveTextStyle, borderWidth: 1, borderRadius: 8, borderColor: isActive ? activeStyle : inactiveStyle }]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default PropertyTypeButton

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        // borderWidth: 0.1,
        // borderRadius: 10,
    },
    textstyle: {
        alignItems: 'center',
        textAlign: "center",
        justifyContent: 'center',
        paddingVertical: 12,
        // marginVertical: 2,
        // marginHorizontal: 2,
        fontSize: 16,
    }
});
