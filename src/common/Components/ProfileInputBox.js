import React, { memo, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, Switch, View } from 'react-native';
import SupportTicketDropDown from '../../screens/Settings/Components/SupportTicketDropDown';
import Colors from '../Colors';
import FontFamily from '../FontFamily';
import DropDownModal from './DropDownModal';

const ProfileInputBox = ({
    left,
    title,
    style,
    textStyle,
    onPress,
    Right,
    isSwitch,
    islanguage
}) => {

    const FILTER_ITEMS = [
        { label: "Bangla" },
        { label: "English" },
        { label: "English" },
        { label: "Francais" },
        { label: "Nederlands" },
    ];
    const [isEnabled, setIsEnabled] = useState(false);
    const [isDropOpen, setisDropOpen] = useState(false);
    const [filterValue, setfilterValue] = useState(undefined);
    const __onSelectItem = (index) => {
        setfilterValue(index);
        setisDropOpen(false);
    }

    // const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <TouchableOpacity
            style={[styles.container, { ...style }]}
            onPress={onPress}
            disabled={isSwitch}>

            {!!left && <View style={styles.leftIcon}>{left}</View>}

            <Text style={[styles.title, { ...textStyle }]}>
                {`${title}` || 'ProfileInputBox'}
            </Text>

            {/* {!!islanguage && (
                <>

                </>
            )} */}

            {
                <>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        {!!islanguage && title === "Language" &&
                            // <Text style={{ fontSize: 16, color: Colors.gray, paddingRight: 10 }}>English</Text>
                            <View style={{ paddingRight: 10 }}>
                                <SupportTicketDropDown
                                    onPress={() => setisDropOpen(true)}
                                    data={FILTER_ITEMS}
                                    selectedIndex={filterValue}
                                    defaultvalue={"English"}
                                />
                            </View>
                        }
                        {
                            !!Right && <View style={styles.leftIcon}>{Right}</View>
                        }
                    </View>
                </>
            }

            {!!isSwitch && (

                <View style={styles.leftIcon}>
                    {
                        title === "Notification" &&
                        <>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Text style={{ fontSize: 16, color: Colors.gray, paddingRight: 10 }}>Off</Text>
                                <Switch
                                    trackColor={{ false: Colors.gray, true: Colors.primary }}
                                    thumbColor={isEnabled ? Colors.w : Colors.white}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggleSwitch}
                                    value={isEnabled}
                                />
                            </View>
                        </>
                    }
                </View>

            )}

            {/* drop down modal for selection */}
            <DropDownModal
                visible={isDropOpen}
                data={FILTER_ITEMS}
                selectedIndex={filterValue}
                onSelect={(index) => __onSelectItem(index)}
                onClose={() => setisDropOpen(false)}
            />
        </TouchableOpacity>
    );
};

export default memo(ProfileInputBox);

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.backgroundGray,
        paddingVertical: 14,
        paddingHorizontal: 5,
        paddingLeft: 15,
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 16,
        color: Colors.gray,
        fontFamily: FontFamily.semiBold,
        flex: 1,
        alignSelf: "center"
    },
    leftIcon: {
        alignSelf: 'center',
        marginRight: 20,
    },
});
