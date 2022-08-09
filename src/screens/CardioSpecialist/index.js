import React, { useState, useRef, useEffect } from 'react';
import {
    ScrollView, SafeAreaView, View, Text, TouchableOpacity
} from 'react-native';
import styles from './style';
import FontFamily from '../../common/FontFamily';
import Colors from '../../common/Colors';
import CardioSpecialistList from './Components/CardioSpecialistList';
import HeaderDy from '../../common/Components/HeaderDy';
import Mahmud from '../../assets/Images/SVG/Mahmud';
import Cooper from '../../assets/Images/SVG/Cooper';
import Bradford from '../../assets/Images/SVG/Bradford';
import Tierra from '../../assets/Images/SVG/Tierra';
import Ashley from '../../assets/Images/SVG/Ashley';
import Wentworth from '../../assets/Images/SVG/Wentworth';


const CardioSpecialist = ({ navigation }) => {


    const Specialist = [
        {
            icon: <Mahmud />,
            name: "Dr. Mahmud Nik Hasan",
            number: "Therapist - Surat Medical City Medical College Hospital",
            rating: "⭐️ 4.9 ( 37 Reviews)"
        },
        {
            icon: <Cooper />,
            name: 'Dr. Jane Cooper',
            number: "Heart Sergon - Surat Medical College Hospital",
            rating: "⭐️ 4.8 ( 25 Reviews)"
        },
        {
            icon: <Bradford />,
            name: 'Dr. Brycen Bradford',
            number: "Therapist - Surat Medical City Medical College Hospital",
            rating: "⭐️ 4.9 ( 42 Reviews)"
        },
        {
            icon: <Tierra />,
            name: 'Dr. Tierra Riley',
            number: "Heart Sergon - Akij Medical Hospital, Surat",
            rating: "⭐️ 4.6 ( 31 Reviews)"
        },
        {
            icon: <Ashley />,
            name: 'Dr. Ashley Wentworth',
            number: "Heart Sergon - Surat Medical College Hospital",
            rating: "⭐️ 4.5 ( 12 Reviews)"
        },
        {
            icon: <Wentworth />,
            name: 'Dr. Ashley Wentworth',
            number: "Heart Sergon - Surat Medical College Hospital",
            rating: "⭐️ 4.5 ( 12 Reviews)"
        },
    ];

    return (
        <SafeAreaView style={styles.container}>
            {/* header Ip */}
            <HeaderDy isBack istitle Headertitle={"Cardio Specialist"} />

            <ScrollView style={styles.bodyContainer}>

                {/* Topdoctorlist */}
                <CardioSpecialistList key={'SpeedMeter'} data={Specialist} />

            </ScrollView>
        </SafeAreaView>
    )
}

export default CardioSpecialist;
