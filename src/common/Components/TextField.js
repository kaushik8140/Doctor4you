import React, { memo, forwardRef, useState, useRef } from 'react';
import {
    StyleSheet, TextInput, View,
    Image, Platform, Text, TouchableOpacity
} from 'react-native';
import Eyeoff from '../../assets/Images/SVG/Eyeoff';
import Eyeopen from '../../assets/Images/SVG/Eyeopen';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Moment from 'moment';
import CountryPicker, { DARK_THEME, FlagButton } from 'react-native-country-picker-modal'
import Colors from "../../common/Colors";
import FontFamily from '../FontFamily';
import GenderDropmodel from '../../screens/EditProfile/Components/GenderDropmodel';
import GenderDropDown from '../../screens/EditProfile/Components/GenderDropDown';
import ButtonDy from './ButtonDy';


const TextField = ({
    phoneValue, value, isPassword,
    changeValue, style, inputStyle,
    editable = true, iconPath, mainplaceholder,
    placeholder,
    isvisible,
    genderValue,
    datepickerValue,
    ...props
}, ref) => {

    const FILTER_ITEMS = [
        { label: "MALE" },
        { label: "FEMALE" },
        { label: "OTHER" },
    ];
    const countryDataRef = useRef(null);

    const [country, setCountry] = useState("91")
    const [passvisible, setPassvisible] = useState(false);
    const [countryvisible, setCountryVisible] = useState(false);
    const [isDropOpen, setisDropOpen] = useState(false);
    const [filterValue, setfilterValue] = useState(undefined);
    const [calanderModalOpen, setcalanderModalOpen] = useState(false);
    const __onSelectItem = (index) => {
        setfilterValue(index);
        setisDropOpen(false);
    }
    const onIconPress = () => {
        setPassvisible(!passvisible);
    };

    const onSelect = (country) => {
        setCountry(country.callingCode[0])
    }


    const _renderflagbutton = () => {
        return (
            <TouchableOpacity style={styles.phoneContainer} onPress={() => setCountryVisible(!countryvisible)}>
                {/* <Text style={styles.phoneText}>{`+${country}` || `${phoneValue}`}</Text> */}
                <Text style={styles.phoneText}>+{country}</Text>
            </TouchableOpacity>

        );
    }


    // component for left side number
    const __inputLeftText = () => {
        return (
            <CountryPicker
                ref={countryDataRef}
                theme={DARK_THEME}
                withCallingCode
                withFilter
                renderFlagButton={_renderflagbutton}
                {...{
                    onSelect,
                }}
                visible={countryvisible}
            />


        );
    }

    // date picker right side
    const __dateInputPicker = () => {
        return (
            <TouchableOpacity
                style={styles.titleInputContainer}
                onPress={() => setcalanderModalOpen(true)}
            >
                {/* date value */}
                <Text style={[styles.titleInput, styles.title, {
                    flex: 1
                }]}>12 September, 1999</Text>
                {/* {Moment(value).format("DD MMM YY")} */}

                {/* calender date picker */}
                <DateTimePickerModal
                    isVisible={calanderModalOpen}
                    mode="date"
                    onConfirm={changeValue}
                    onCancel={() => setcalanderModalOpen(false)}
                />
            </TouchableOpacity>
        )
    }


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
                {genderValue &&
                    <GenderDropDown
                        onPress={() => setisDropOpen(true)}
                        data={FILTER_ITEMS}
                        selectedIndex={filterValue}
                        defaultvalue={"Male"}
                    />
                }
                {datepickerValue &&
                    __dateInputPicker()
                }
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

            {/* drop down modal for selection */}
            <GenderDropmodel
                visible={isDropOpen}
                data={FILTER_ITEMS}
                selectedIndex={filterValue}
                onSelect={(index) => __onSelectItem(index)}
                onClose={() => setisDropOpen(false)}
            />
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
        // paddingRight: 10,
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