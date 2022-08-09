import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import FontFamily from '../../../common/FontFamily';
import Colors from '../../../common/Colors';
import FaqsListItem from './FaqsListItem';


const FaqsList = ({ title, morePress, data, __isSimilar }) => {
    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={(_, index) => index.toString() + 'opps'}
                data={data}
                contentContainerStyle={{ paddingHorizontal: 15 }}
                renderItem={({ item, index }) => (
                    <FaqsListItem item={item} index={index} length={data.length} />
                )}
                // horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

export default FaqsList;

const styles = StyleSheet.create({
    container: {
        // marginVertical: 14,
    },
    titleContainer: {
        backgroundColor: Colors.primary,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
    },
    title: {
        fontFamily: FontFamily.bold,
        fontSize: 18,
        color: Colors.gray,
        paddingLeft: 20,
        flex: 1
    },
    headerContainer: {
        marginBottom: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    rightButton: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 24,
        width: 24,
    },
    viewtext: {
        fontFamily: FontFamily.semiBold,
        color: Colors.bordergray,
        fontSize: 16,
        alignSelf: 'center',
        paddingRight: 10,
    },
    rowview: {
        flexDirection: 'row',
    },
});
