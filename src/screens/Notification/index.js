import React, { useState, useRef, useEffect } from 'react';
import {
    ScrollView, SafeAreaView, View, Text, TouchableOpacity
} from 'react-native';
import styles from './style';
import FontFamily from '../../common/FontFamily';
import Colors from '../../common/Colors';
import HeaderDy from '../../common/Components/HeaderDy';
import Appointmentalarm from '../../assets/Images/SVG/Appointmentalarm';
import Appointmentconfirmed from '../../assets/Images/SVG/Appointmentconfirmed';
import NotificationBlue from '../../assets/Images/SVG/NotificationBlue';
import NotificationList from './Components/NotificationList';

const Notification = ({ navigation }) => {



    const Specialist = [
        {
            icon: <NotificationBlue />,
            name: "Serial reminder",
            number: "Your serial is successfully added in appointment list. Serial number is 25. DoctorPoint will notice you before 15 minutes.",
        },
        {
            icon: <Appointmentalarm />,
            name: 'Appointment alarm',
            number: "Your appointment will be start after 15 minutes. Stay with app and take care.",
        },
        {
            icon: <Appointmentconfirmed />,
            name: 'Appointment confirmed',
            number: "Your appointment will added in appointment list. He will call you at 11:00 AM | 10 June, 2020.",
        },
    ];

    const Seconddata = [
        {
            icon: <NotificationBlue />,
            name: "Serial reminder",
            number: "Your serial is successfully added in appointment list. Serial number is 25. DoctorPoint will notice you before 15 minutes.",
        },
        {
            icon: <Appointmentalarm />,
            name: 'Appointment alarm',
            number: "Your appointment will be start after 15 minutes. Stay with app and take care.",
        },
        {
            icon: <Appointmentconfirmed />,
            name: 'Appointment confirmed',
            number: "Your appointment will added in appointment list. He will call you at 11:00 AM | 10 June, 2020.",
        },
        {
            icon: <Appointmentalarm />,
            name: 'Appointment alarm',
            number: "Your appointment will be start after 15 minutes. Stay with app and take care.",
        },
    ];

    return (
        <SafeAreaView style={styles.container}>
            {/* header Ip */}
            <HeaderDy isBack istitle Headertitle={"Notification"} />

            <ScrollView style={styles.bodyContainer}>
                <Text style={styles.title}>{"Today - 10 June, 2020"}</Text>

                {/* NotificationList */}
                <NotificationList key={'SpeedMeter'} data={Specialist} />
                <Text style={styles.title}>{"11 June, 2020"}</Text>
                <NotificationList key={'SpeedMeter'} data={Seconddata} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Notification;
