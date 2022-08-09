import React, { useState, useRef, useEffect } from 'react';
import {
    ScrollView, SafeAreaView, View, Text, TouchableOpacity
} from 'react-native';
import styles from './style';
import FontFamily from '../../common/FontFamily';
import Colors from '../../common/Colors';
import FaqsList from './Components/FaqsList';
import HeaderDy from '../../common/Components/HeaderDy';

const Faqsscreen = ({ navigation }) => {



    const Specialist = [
        {
            descriptin: "Are there any type of doctors who are not included in DoctorPoint Pro consultation network?"
        },
        {
            descriptin: "How do the unlimited online consultations work?"
        },
        {
            descriptin: "How many onlne consultations can I use?"
        },
        {
            descriptin: "Will family members can be able to use my account?"
        },
        {
            descriptin: "How many members can be part of one DoctorPoint Pro Membership?"
        },
        {
            descriptin: "How many members can be part of one DoctorPoint Pro Membership?"
        },
    ];

    return (
        <SafeAreaView style={styles.container}>
            {/* header Ip */}
            <HeaderDy isBack istitle Headertitle={"FAQs"} />

            <ScrollView style={styles.bodyContainer}>

                {/* Topdoctorlist */}
                <FaqsList key={'SpeedMeter'} data={Specialist} />

            </ScrollView>
        </SafeAreaView>
    )
}

export default Faqsscreen;
