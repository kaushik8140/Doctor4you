import React, { memo } from 'react';
import {
    StyleSheet, Text, View,
    TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import Colors from '../../../common/Colors';
import FontFamily from '../../../common/FontFamily';

const GenderDropmodel = ({ visible, data, selectedIndex, onSelect, onClose }) => {


    const __dropDownItem = ({ item, index }) => {

        const isSelected = selectedIndex === index;

        return (
            <TouchableOpacity
                onPress={() => onSelect(index)}
                style={[styles.dropDownItem, {
                    // backgroundColor: isSelected ? Colors.lightGray : Colors.white,
                }]}
            >
                <Text
                    style={[styles.dropDownItemText, {
                        fontFamily: isSelected ? FontFamily.semiBold : FontFamily.primary,
                    }]}
                >
                    {item.label}
                </Text>
            </TouchableOpacity>
        );
    }

    return (
        <Modal
            isVisible={visible}
            onBackdropPress={onClose}
        >
            <View style={styles.container}>
                {
                    data.map((item, index) => __dropDownItem({ item, index }))
                }
            </View>
        </Modal>
    )
}

export default memo(GenderDropmodel);

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        padding: 8,
        backgroundColor: Colors.white,
    },
    dropDownItem: {
        paddingHorizontal: 6,
        paddingVertical: 12,
        borderRadius: 10,
    },
    dropDownItemText: {
        color: Colors.gray,
        textAlign: 'left',
    },
});
