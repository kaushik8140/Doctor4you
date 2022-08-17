import React, { useState, useRef, useEffect } from 'react';
import {
    ScrollView, SafeAreaView, View, Text, TouchableOpacity, Image
} from 'react-native';
import styles from './style';
import FontFamily from '../../common/FontFamily';
import Colors from '../../common/Colors';
import HeaderDy from '../../common/Components/HeaderDy';
// import ScrollPicker from 'react-native-wheel-scrollview-picker';
import ButtonDy from '../../common/Components/ButtonDy';
import ScrollPicker from './Components/react-native-wheely-simple-picker'

const Patientdetails2 = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>
            {/* header Ip */}
            <HeaderDy isBack istitle Headertitle={"Patient’s details"} />

            <ScrollView style={styles.scrollContainer}>
                <Text style={styles.maintext}>How long have you been having{"\n"} these symptoms?</Text>

                <Text style={styles.mainview}>6 Days ago</Text>
                <View
                    style={styles.borderview}
                />
                {/* old */}
                {/* 
                <ScrollPicker
                    dataSource={['Minutes ago', 'Hours ago', 'Days ago', 'Months ago', 'Years ago', 'Minutes ago']}
                    selectedIndex={0}
                    renderItem={(data, index, isSelected) => {
                        return (
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ color: Colors.primary, paddingRight: 40 }}>{index}</Text>
                                <Text style={{ color: Colors.primary }}>{data}</Text>
                            </View>
                        )
                    }}
                    onValueChange={(data, selectedIndex) => {
                        //
                    }}
                    wrapperHeight={115}
                    wrapperWidth={150}
                    wrapperColor={Colors.transparent}
                    itemHeight={50}
                    highlightColor={Colors.transparent}
                    highlightBorderWidth={2}
                    activeItemColor={'#222121'}
                /> */}


                <ScrollPicker
                    dataSource={['Minutes ago', 'Hours ago', 'Days ago', 'Months ago', 'Years ago', 'Minutes ago', 'Days ago', 'Years ago']}
                    selectedIndex={2}
                    renderItem={(data, index, isSelected) => {
                        return (
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ color: Colors.primary, paddingRight: 40 }}>{index}</Text>
                                <Text style={{ color: Colors.primary }}>{data}</Text>
                            </View>
                        )
                    }}
                    onValueChange={(data, selectedIndex) => {
                        //
                    }}
                    wrapperHeight={200}
                    wrapperWidth={200}
                    wrapperBackground={Colors.transparent}
                    itemHeight={60}
                    highlightColor={Colors.transparent}
                    highlightBorderWidth={2}
                    activeItemTextStyle={styles.textstyle}
                    itemTextStyle={styles.itemstyle}
                />

                <ButtonDy
                    onPress={() => navigation.navigate("Patientdetails3")}
                    title={'Next 2/4'}
                    style={styles.continueButton}
                    textStyle={styles.buttontext}
                // processing={signinProcess}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Patientdetails2;
