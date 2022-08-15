import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, ScrollView, Dimensions } from 'react-native';
import Colors from '../Colors';
import FontFamily from '../FontFamily';
// import TextR5 from './TextR5';

const DateTimeSelector = ({
    data = [], onSelect, selectedIndex, isWrap,
    isTime,
}) => {

    const __isSelected = (index) => (selectedIndex === index);
    const windowWidth = Dimensions.get('window').width;
    // date selector component
    const __dateSelector = (item, index) => (
        <TouchableOpacity
            key={"selec__dt" + index}
            style={[styles.itemContainer, styles.dateContainer, {
                backgroundColor: __isSelected(index) ? Colors.primary : Colors.white
            }]}
            onPress={() => onSelect({ ...item, index })}
        >
            {/* day */}
            <Text
                style={{
                    color: __isSelected(index) ? Colors.white : Colors.gray,
                    fontFamily: __isSelected(index) ? FontFamily.bold : FontFamily.semiBold
                }}
            >
                {item?.day}
            </Text>
            {/* date */}
            <Text
                // bold
                style={{
                    ...styles.title, ...styles.dateTitle,
                    color: __isSelected(index) ? Colors.white : Colors.gray,
                    fontFamily: __isSelected(index) ? FontFamily.bold : FontFamily.semiBold
                }}
            >
                {item?.date}
            </Text>
        </TouchableOpacity>
    );

    // time selector component
    const __timeSelector = (item, index) => (
        <TouchableOpacity
            key={"selec__dt" + index}
            style={[styles.itemContainer, styles.timeContainer, {
                borderWidth: __isSelected(index) ? 0.4 : 0,
            }]}
            onPress={() => onSelect({ ...item, index })}
        >
            {/* time */}
            <Text
                // bold
                style={{
                    ...styles.title, ...styles.timeTitle,
                    color: __isSelected(index) ? Colors.primary : Colors.gray
                }}
            >
                {item?.time}
            </Text>

            {/* period */}
            <Text style={styles.desc}>{item?.period}</Text>
        </TouchableOpacity>
    );



    return (
        <ScrollView style={[styles.container]}
            contentContainerStyle={{
                // flexWrap: 'wrap',
                // width: windowWidth,
            }}
            scrollEnabled
            horizontal
            showsHorizontalScrollIndicator={false}>
            {
                data?.map((item, index) => {
                    if (isTime) return __timeSelector(item, index);

                    return __dateSelector(item, index);
                })
            }
        </ScrollView>
    )
}

export default DateTimeSelector

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        width: "100%",
    },
    itemContainer: {
        marginRight: 20,
        alignItems: 'center',
        marginVertical: 15,
        height: 86,
        width: 62,
    },
    dateContainer: {
        paddingVertical: 25,
        // paddingHorizontal: 18,
        borderRadius: 10,
    },
    timeContainer: {
        borderRadius: 4,
        borderColor: Colors.primary,
        padding: 10,
    },
    title: {
        fontSize: 18,
    },
    dateTitle: {
    },
    timeTitle: {
    },
    desc: {
        color: Colors.gray,
    },
    scrollcontainer: {
        marginTop: 20,
        marginBottom: 20,
    }
});