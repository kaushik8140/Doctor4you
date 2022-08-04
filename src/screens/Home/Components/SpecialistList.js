import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';

import FontFamily from '../../../common/FontFamily';
import Colors from '../../../common/Colors';
import SpecialistListItem from './SpecialistListItem';
// import ProductListItem from '../../../common/Components/ProductListItem';
// import RightBigIcon from '../../../assets/Images/SVG/RightBigIcon';

const SpecialistList = ({ title, morePress, data, __isSimilar }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            {/* list items */}
            <FlatList
                keyExtractor={(_, index) => index.toString() + 'opps'}
                data={data}
                contentContainerStyle={{ paddingHorizontal: 15 }}
                renderItem={({ item, index }) => (
                    <SpecialistListItem item={item} index={index} length={data.length} />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

export default SpecialistList;

const styles = StyleSheet.create({
    container: {
        marginVertical: 14,
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
        paddingLeft:20
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
});
