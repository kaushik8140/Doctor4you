import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import Colors from '../../../common/Colors';

const TimeSelector = ({
    data = [], onSelect, selectedIndex,
    isTime,
}) => {

    const __isSelected = (index) => (selectedIndex === index);

    // date selector component
    const __dateSelector = (item, index) => (
        <TouchableOpacity
            key={"selec__dt" + index}
            style={[styles.itemContainer, styles.dateContainer, {
                backgroundColor: __isSelected(index) ? Colors.primary : Colors.white
            }]}
            onPress={() => onSelect({ ...item, index })}
        >
            {/* date */}
            <Text

                style={{
                    ...styles.title, ...styles.dateTitle,
                    color: __isSelected(index) ? Colors.white : Colors.gray
                }}
            >
                {item?.date}
            </Text>

            {/* day */}
            <Text
                style={{
                    color: __isSelected(index) ? Colors.white : Colors.gray
                }}
            >
                {item?.day}
            </Text>
        </TouchableOpacity>
    );

    // time selector component
    const __timeSelector = (item, index) => (
        <TouchableOpacity
            key={"selec__dt" + index}
            style={[styles.itemContainer, styles.timeContainer, {
                borderWidth: __isSelected(index) ? 1 : 0,
            }]}
            onPress={() => onSelect({ ...item, index })}
        >
            {/* time */}
            <Text

                style={{
                    ...styles.title, ...styles.timeTitle,
                    color: __isSelected(index) ? Colors.primary : Colors.gray
                }}
            >
                {item?.time}
            </Text>

            {/* period */}
            <Text style={{ ...styles.desc, color: __isSelected(index) ? Colors.primary : Colors.gray }}>{item?.period}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            {
                data?.map((item, index) => {
                    if (isTime) return __timeSelector(item, index);

                    return __dateSelector(item, index);
                })
            }
        </View>
    )
}

export default TimeSelector

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        width: "100%",
    },
    itemContainer: {
        marginRight: 10,
        alignItems: 'center',
        flexDirection: "row",
        backgroundColor: Colors.white,
        width: 84,
        height: 44,
        marginVertical: 10,
    },
    dateContainer: {
        paddingVertical: 12,
        paddingHorizontal: 8,
        borderRadius: 4,
    },
    timeContainer: {
        borderRadius: 10,
        borderColor: Colors.primary,
        padding: 10,
    },
    title: {
        alignItems: "center"
    },
    dateTitle: {
    },
    timeTitle: {
        fontSize: 14
    },
    desc: {
        color: Colors.gray,
        paddingLeft: 2,
        fontSize: 14
    },
});