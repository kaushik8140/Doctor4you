import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import FontFamily from '../../../common/FontFamily';
import Colors from '../../../common/Colors';
import NotificationListItem from './NotificationListItem';
import HorizontalSeperator from '../../../common/Components/HorizontalSeperator';


const NotificationList = ({ title, morePress, data, __isSimilar }) => {
    return (
        <View style={styles.container}>

            <FlatList
                keyExtractor={(_, index) => index.toString() + 'opps'}
                data={data}
                // contentContainerStyle={{ paddingHorizontal: 15 }}
                renderItem={({ item, index }) => (
                    <NotificationListItem item={item} index={index} length={data.length} />
                )}
                // horizontal
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => <HorizontalSeperator />}
            />
        </View>
    );
};

export default NotificationList;

const styles = StyleSheet.create({
    container: {
        marginVertical: 14,
        backgroundColor: Colors.white,
        marginHorizontal: 15,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: Colors.white,
        paddingHorizontal: 10,
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
