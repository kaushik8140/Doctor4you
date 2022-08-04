import React, { memo, forwardRef, useState } from 'react';
import {
    StyleSheet, TextInput, View,
    Image, Platform, Text, TouchableOpacity
} from 'react-native';
import Eyeoff from '../../assets/Images/SVG/Eyeoff';
import Eyeopen from '../../assets/Images/SVG/Eyeopen';
import { CountryPicker } from "react-native-country-codes-picker";

import Colors from "../../common/Colors";
import FontFamily from '../FontFamily';


const TextField = ({
    phoneValue, value, isPassword,
    changeValue, style, inputStyle,
    editable = true, iconPath, mainplaceholder,
    placeholder,
    isvisible,
    ...props
}, ref) => {

    // component for left side number
    const __inputLeftText = () => {
        return (
            <View style={styles.phoneContainer}>
                <Text
                    style={styles.phoneText}
                >
                    {phoneValue}
                </Text>
            </View>
            // <View style={styles.container}>
            //     <TouchableOpacity
            //         onPress={() => setShow(true)}
            //         style={{
            //             width: '80%',
            //             height: 60,
            //             backgroundColor: 'black',
            //             padding: 10,
            //         }}
            //     >
            //         <Text style={{
            //             color: 'white',
            //             fontSize: 20
            //         }}>
            //             {countryCode}
            //         </Text>
            //     </TouchableOpacity>

            // // For showing picker just put show state to show prop
            //     <CountryPicker
            //         show={show}
            //         // when picker button press you will get the country object with dial code
            //         pickerButtonOnPress={(item) => {
            //             setCountryCode(item.dial_code);
            //             setShow(false);
            //         }}
            //     />
            // </View>
        );
    }
    const [show, setShow] = useState(false);
    const [countryCode, setCountryCode] = useState('');
    const [passvisible, setPassvisible] = useState(false);
    const onIconPress = () => {
        setPassvisible(!passvisible);
    };
    return (
        <View
            style={[styles.container, {
                backgroundColor: editable ? Colors.inputGray : Colors.lightGray,
                ...style
            }]}
        >
            {/* top container */}
            <View style={styles.topContainer}>
                {/* icon */}
                {iconPath &&
                    <Image
                        source={iconPath}
                        style={styles.icon}
                        resizeMode="contain"
                    />
                }

                {/* placeholder name */}
                <Text style={styles.placeholderText}>{placeholder}</Text>
            </View>

            {
                Platform.OS === 'ios' &&
                <View height={4} />
            }

            {/* bottom input box */}

            <View style={{ flexDirection: "row" }}>
                {!!phoneValue && __inputLeftText()}
                <TextInput
                    ref={ref}
                    style={[styles.titleInput, {
                        textAlign: 'left',
                    }, inputStyle]}
                    value={value || ""}
                    onChangeText={changeValue}
                    secureTextEntry={!passvisible && isPassword}
                    placeholder={mainplaceholder}
                    placeholderTextColor={Colors.gray}
                    {...props}
                />
                {/* logo image */}
                {isvisible && (
                    <TouchableOpacity style={styles.imageview} onPress={onIconPress}>
                        {passvisible ? <Eyeoff /> : <Eyeopen />}
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}

export default memo(forwardRef(TextField));

const styles = StyleSheet.create({
    container: {
        // paddingVertical: Platform.OS === "ios" ? 8 : 6,
        width: "100%",
        borderBottomWidth: 1,
        borderBottomColor: Colors.bordergray,
        // paddingHorizontal: 17,
    },
    topContainer: {
        flexDirection: 'row',
        alignItems: "center",
    },
    icon: {
        height: 16,
        width: 20,
        marginRight: 10,
    },
    placeholderText: {
        color: Colors.gray,
        fontSize: 16,
        fontFamily: FontFamily.semiBold
    },
    titleInput: {
        flex: 1,
        fontSize: 16,
        color: Colors.lightGray,
        fontFamily: FontFamily.primary,
        paddingTop: 3,
        paddingBottom: 3,
        textAlign: "right",
    },
    phoneContainer: {
        paddingRight: 10,
        // borderRightWidth: 1,
        marginRight: 10,
        alignSelf: "center"
    },
    phoneText: {
        fontSize: 16,
        // fontFamily: FontFamily.semiBold,
        color: Colors.bordergray,
    },
    imageview: {
        alignSelf: 'center',
        // marginRight: 20,
    },
});