import React, { memo } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../../common/Colors';
import FontFamily from '../../../common/FontFamily';
import Favouriteicons from '../../../assets/Images/SVG/Favouriteicons';

const FavouritedoctorsListItem = ({ item, index, style }) => {
    const navigation = useNavigation();

    return (
        <View style={[styles.container, { ...style }]}>
            <View style={{ alignSelf: "center", paddingLeft: 10, }}>{item.icon}</View>

            <View style={{ flex: 1, paddingLeft: 10, alignSelf: "center" }}>
                <Text style={styles.title}>{item.name}</Text>

                <Text style={styles.range} >{item.number}</Text>

            </View>
            <Favouriteicons />
        </View>
    );
};

export default memo(FavouritedoctorsListItem);

const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: Colors.white,
        // paddingHorizontal: 17,
        height: 100,
        flexDirection: "row",
        backgroundColor: Colors.white,
    },

    // container: {
    //     borderRadius: 10,
    //     padding: 10,
    //     marginBottom: 18,
    //     backgroundColor: Colors.white,
    //     flexDirection: 'row',
    //     borderWidth: 0.3,
    //     borderColor: Colors.primary,

    //     // shadow property
    //     shadowColor: "#000",
    //     shadowOffset: {
    //       width: 0,
    //       height: 1,
    //     },
    //     shadowOpacity: 0.22,
    //     shadowRadius: 2.22,

    //     // elevation: 3,
    //   },
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
        fontFamily: FontFamily.bold,
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
});
