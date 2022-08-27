import React, { memo } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

import Colors from '../../../common/Colors';
import FontFamily from '../../../common/FontFamily';

const NotificationListItem = ({ item, index, style }) => {
    const navigation = useNavigation();

    return (
        <View style={[styles.container, { ...style }]}>
            <View style={{ marginTop: 20 }}>{item.icon}</View>

            <View style={{ paddingLeft: 10, marginTop: 10 }}>
                <Text style={styles.title}>{item.name}</Text>

                <Text style={[styles.range, { color: item?.name == 'Appointment confirmed' ? Colors.primary : Colors.gray }]}>{item.number}</Text>

            </View>
        </View>
    );
};

export default memo(NotificationListItem);

const styles = StyleSheet.create({
    container: {
        height: 93,
        flexDirection: "row",
    },
    productImage: {
        width: '90%',
        height: 150,
    },
    range: {
        fontFamily: FontFamily.semiBold,
        color: Colors.bordergray,
        fontSize: 12,
        paddingTop: 5,
        lineHeight:20,
    },
    title: {
        fontFamily: FontFamily.semiBold,
        color: Colors.gray,
        fontSize: 16,
        paddingTop: 5,
        // textAlign: 'center'
    },
    bottomContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginVertical: 10,
    },
    prizeTag: {
        flex: 1,
        textAlign: 'left',
        fontFamily: FontFamily.bold,
        color: Colors.primary,
    },
    eyeContainer: {
        height: 28,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    rating: {
        fontSize: 12,
        fontFamily: FontFamily.primary,
        color: Colors.bordergray,
        paddingTop: 5,
    }
});
