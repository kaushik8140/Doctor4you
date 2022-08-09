import React, { memo, forwardRef } from 'react';
import {
    StyleSheet, TextInput, View,
    Text, Platform,
} from 'react-native';
import Colors from '../../../common/Colors';
import FontFamily from '../../../common/FontFamily';


const TextInputHelp = ({
    phoneValue, value, isPassword,
    changeValue, style, inputStyle,
    editable = true, ...props },
    ref) => {

    return (
        <View
            style={[styles.container, {
                backgroundColor: editable ? Colors.backgroundGray : Colors.lightGray,
                ...style
            }]}
        >
            <TextInput
                ref={ref}
                style={[styles.titleInput, { ...inputStyle }]}
                value={value || ""}
                onChangeText={changeValue}
                secureTextEntry={isPassword}
                placeholderTextColor={Colors.gray}
                {...props}
            />
        </View>
    )
}

export default memo(forwardRef(TextInputHelp));

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginBottom: 4,
        paddingVertical: 12,
        borderRadius: 10,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: 'row',
        borderWidth: 0.5,
        borderColor: Colors.bordergray,
        paddingHorizontal: 10,
    },
    titleInput: {
        flex: 1,
        fontSize: 18,
        color: Colors.gray,
        fontFamily: FontFamily.primary,
        fontSize: 16,
        padding: 0,
        // textAlign: "right",
        // backgroundColor: 'red',
    },
    phoneContainer: {
        paddingRight: 10,
        borderRightWidth: 1,
        marginRight: 10,
    },
    phoneText: {
        fontSize: 16,
        fontFamily: FontFamily.semiBold,
        color: Colors.gray,
    },
});