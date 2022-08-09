import React, { memo } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

import Colors from '../../../common/Colors';
import FontFamily from '../../../common/FontFamily';

const MyAppointmentsListItem = ({ item, index, style }) => {
    const navigation = useNavigation();

    return (
        <View style={[styles.container, { ...style }]}>
            <View style={{ alignSelf: "center" }}>{item.icon}</View>
            <View style={{ position: "absolute", bottom: 0, left: 70, }}>
                {item.image}
            </View>

            <View style={{ flexDirection: "column", paddingLeft: 20, alignSelf: "center" }}>

                <Text style={{ color: Colors.gray, fontSize: 10 }}>
                    {item.calling}
                    <Text style={{ color: Colors.primary, fontSize: 10 }}>
                        {item.status}
                    </Text>
                </Text>

                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.rating}>{item.time}</Text>
            </View>
        </View>
    );
};

export default memo(MyAppointmentsListItem);

const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: Colors.white,
        paddingHorizontal: 17,
        height: 100,
        flexDirection: "row",
        backgroundColor: Colors.white,
    },
    productImage: {
        width: '90%',
        height: 150,
        alignSelf: 'center',
        marginVertical: 10,
    },
    range: {
        fontFamily: FontFamily.semiBold,
        color: Colors.bordergray,
        fontSize: 12,
        paddingTop: 5,

    },
    title: {
        fontFamily: FontFamily.semiBold,
        color: Colors.gray,
        fontSize: 18,
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
