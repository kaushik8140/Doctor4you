import React, { memo } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

import Colors from '../../../common/Colors';
import FontFamily from '../../../common/FontFamily';

const CardioIssuelistItem = ({ item, index, style }) => {
    const navigation = useNavigation();

    return (
        <View style={[styles.container, { ...style }]}>


            <Text style={styles.title}>{item.name}</Text>

            <Text style={styles.range}>{item.number}</Text>
        </View>
    );
};

export default memo(CardioIssuelistItem);

const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: Colors.bordergray,
        paddingHorizontal: 17,
        marginRight: 10,
        width: 287,
        height: 121,
        backgroundColor: Colors.white,
    },

    range: {
        fontFamily: FontFamily.semiBold,
        color: Colors.bordergray,
        fontSize: 14,
        paddingTop: 10,
        textAlign: 'center',
        top: 15,
        borderLeftWidth: 2,
        borderLeftColor: Colors.primary
    },
    title: {
        fontFamily: FontFamily.bold,
        color: Colors.gray,
        fontSize: 18,
        paddingTop: 5,
        textAlign: 'left',
    },

});
