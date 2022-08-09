import React, { memo } from 'react';
import {
    StyleSheet, Text, View,
    TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';

import Colors from '../Colors';
import FontFamily from '../FontFamily';

const DropDownModal = ({ visible, data, selectedIndex, onSelect, onClose }) => {

    const __dropDownItem = ({ item, index }) => {

        const isSelected = selectedIndex === index;

        return (
            <TouchableOpacity
                onPress={() => onSelect(index)}
                style={[styles.dropDownItem, {
                    backgroundColor: isSelected ? Colors.primary : Colors.white,
                }]}
            >
                <Text
                    style={[styles.dropDownItemText, {
                        fontFamily: isSelected ? FontFamily.semiBold : FontFamily.regular,
                        color: isSelected ? Colors.white : Colors.gray,
                    }]}
                >
                    {item.label}
                </Text>
                {/* <View
                    style={{
                        borderBottomColor: Colors.lightGray,
                        borderBottomWidth: 0.5,
                        marginTop: 10,
                        width:188,
                        alignSelf:"center"
                        // width: width,
                    }}
                /> */}
            </TouchableOpacity>
        );
    }

    return (
        <Modal
            isVisible={visible}
            onBackdropPress={onClose}
        >

            <View style={styles.container}>
                <>
                    <Text style={styles.selectlanguage}>Select language</Text>

                    {
                        data.map((item, index) => __dropDownItem({ item, index }))
                    }

                </>
            </View>
        </Modal>
    )
}

export default memo(DropDownModal);

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        padding: 8,
        backgroundColor: Colors.white,
    },
    dropDownItem: {
        paddingHorizontal: 6,
        marginHorizontal: 50,
        paddingVertical: 10,
        borderRadius: 10,
    },
    dropDownItemText: {
        color: Colors.red,
        alignSelf: "center"
    },
    selectlanguage: {
        color: Colors.gray,
        alignSelf: "center",
        fontSize: 26,
        fontFamily: FontFamily.semiBold,
        paddingBottom: 30,
        paddingTop: 30
    }
});
