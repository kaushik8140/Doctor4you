import React from 'react';
import {
    StyleSheet, Text, View,
    TouchableOpacity, Platform
} from 'react-native';
import Downarrow from '../../../assets/Images/SVG/Downarrow';
import Colors from '../../../common/Colors';
import FontFamily from '../../../common/FontFamily';

const SupportTicketDropDown = ({ selectedIndex, data, onPress, defaultvalue }) => {
    return (
        <TouchableOpacity
            style={styles.sortTouch}
            onPress={onPress}
        >
            <Text
                style={styles.selectedTextLabel}
            >
                {selectedIndex !== undefined ? data[selectedIndex].label : defaultvalue}
            </Text>

            {/* <View width={4} /> */}

            {/* <Downarrow /> */}
        </TouchableOpacity>
    )
}

export default SupportTicketDropDown

const styles = StyleSheet.create({
    sortTouch: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderColor: Colors.gray,
    },
    selectedTextLabel: {
        color: Colors.gray,
        fontSize: 16,
        fontFamily: FontFamily.primary,
    },
})