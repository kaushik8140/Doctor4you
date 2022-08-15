import React, { memo, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import { SvgXml } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import LeftArrow from '../../assets/Images/SVG/LeftArrow';
import Colors from '../Colors';
import FontFamily from '../FontFamily';
import Addplus from '../../assets/Images/SVG/Addplus';
import HeaderVideocall from '../../assets/Images/SVG/HeaderVideocall';
import HeadrVoicecall from '../../assets/Images/SVG/HeadrVoicecall';

const HeaderDy = ({ isBack, Headertitle, istitle, titlestyle, iconstylestyles, isplusicon, onadd, ischaticon }) => {
    const navigation = useNavigation();
    const __onLeftPress = () => {
        if (isBack) {
            navigation.goBack();
        }
    }

    return (
        <View style={styles.container}>
            {/* left side back icon */}

            <TouchableOpacity
                style={styles.sideContainer}
                onPress={__onLeftPress}>
                <View style={{ height: 40, width: 40, ...iconstylestyles }}>
                    {isBack && (
                        <LeftArrow />
                    )
                    }
                </View>
            </TouchableOpacity>

            {istitle && (
                <Text style={[styles.headerText, titlestyle]}>{Headertitle}</Text>
            )}
            {isplusicon && (
                <TouchableOpacity style={{ right: 20 }} onPress={onadd}>
                    <Addplus />
                </TouchableOpacity>
            )}

            {
                ischaticon &&
                <>
                    <TouchableOpacity onPress={() => navigation.navigate("ContactDoctor")}>
                        <HeadrVoicecall />
                    </TouchableOpacity>
                    <View width={5} />
                    <TouchableOpacity onPress={() => navigation.navigate("Videocall")}>
                        <HeaderVideocall />
                    </TouchableOpacity>
                    <View width={10} />
                </>
            }

        </View>
    );
};

export default memo(HeaderDy);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingLeft: 5,
        paddingTop: 10,
        alignItems: 'center',
    },
    headerText: {
        fontSize: 20,
        fontFamily: FontFamily.bold,
        color: Colors.gray,
        textAlign: 'center',
        flex: 1,
        right: 10,
    },
});