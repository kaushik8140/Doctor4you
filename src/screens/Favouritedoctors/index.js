import React, { useState, useRef, useEffect } from 'react';
import {
    ScrollView, SafeAreaView, View, Text, TouchableOpacity
} from 'react-native';
import styles from './style';
import FontFamily from '../../common/FontFamily';
import Colors from '../../common/Colors';
import FavouritedoctorsList from './Components/FavouritedoctorsList';
import HeaderDy from '../../common/Components/HeaderDy';
import Mahmud from '../../assets/Images/SVG/Mahmud';
import Cooper from '../../assets/Images/SVG/Cooper';
import Bradford from '../../assets/Images/SVG/Bradford';
import Tierra from '../../assets/Images/SVG/Tierra';
import Ashley from '../../assets/Images/SVG/Ashley';
import Wentworth from '../../assets/Images/SVG/Wentworth';

const Favouritedoctors = ({ navigation }) => {



    const Specialist = [
        {
            icon: <Mahmud />,
            name: "Dr. Mahmud Nik Hasan",
            number: "Therapist - Surat Medical City Medical College Hospital",
        },
        {
            icon: <Cooper />,
            name: 'Dr. Jane Cooper',
            number: "Heart Sergon - Surat Medical College Hospital",
        },
        {
            icon: <Bradford />,
            name: 'Dr. Brycen Bradford',
            number: "Therapist - Surat Medical City Medical College Hospital",
        },
        {
            icon: <Tierra />,
            name: 'Dr. Tierra Riley',
            number: "Heart Sergon - Akij Medical Hospital, Surat",
        },
    ];

    return (
        <SafeAreaView style={styles.container}>
            {/* header Ip */}
            <HeaderDy isBack istitle Headertitle={"Favourite doctors"} />

            <ScrollView style={styles.bodyContainer}>

                {/* Topdoctorlist */}
                <FavouritedoctorsList key={'SpeedMeter'} data={Specialist} />

            </ScrollView>
        </SafeAreaView>
    )
}

export default Favouritedoctors;
