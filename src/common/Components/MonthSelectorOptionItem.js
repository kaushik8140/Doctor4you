import React, { memo, useMemo } from 'react';
import { StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
import Colors from '../Colors';
import FontFamily from '../FontFamily';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const MonthSelectorOptionItem = ({
    item, index, onSelect,
    selectedIndex, extraHorizontalPadding = 0, style,
    textStyle, activeStyle, activeTextStyle,
    inactiveStyle, inactiveTextStyle, isTranslation
}) => {


    const selectStyle = useMemo(() => {

        const isSelected = selectedIndex === index;

        const additionalStyle = isSelected ? activeStyle : inactiveStyle;
        const additionalTextStyle = isSelected ? activeTextStyle : inactiveTextStyle;

        let containerStyle = {
            // backgroundColor: isSelected ? Colors.primary : Colors.white,
            // borderColor: isSelected ? Colors.primary : Colors.bordergray,
        };

        let textStyle = {
            color: isSelected ? Colors.gray : Colors.bordergray,
            fontFamily: isSelected ? FontFamily.bold : FontFamily.primary
        };

        // additional added style
        containerStyle = { ...containerStyle, ...additionalStyle };
        textStyle = { ...textStyle, ...additionalTextStyle };

        return {
            containerStyle,
            textStyle,
        };
    }, [selectedIndex]);

    return (
        <TouchableOpacity
            onPress={() => onSelect(index)}
            style={[
                styles.container,
                selectStyle.containerStyle, {

                    ...style
                }]}
        >
            <Text
                style={[styles.optionTextView, selectStyle.textStyle, {
                    ...textStyle,
                }]}
            >
                {
                    isTranslation
                        ?
                        (item)
                        :
                        item
                }
            </Text>
        </TouchableOpacity>
    )
}

export default memo(MonthSelectorOptionItem);

const styles = StyleSheet.create({
    container: {
        // marginHorizontal: 6,
        marginRight:8,
        paddingTop: 20,
        alignSelf: "center",
    },
    optionTextView: {
        fontSize: 16,
        alignSelf: "center",
    },
});



