import React, { useState, useRef, useEffect } from 'react';
import {
    ScrollView, SafeAreaView, View, Text, TouchableOpacity
} from 'react-native';
import styles from './style';
import HeaderDy from '../../common/Components/HeaderDy';
import AppointmentTimeOptions from './Components/AppointmentTimeOptions';
import TimeSelector from './Components/TimeSelector';
import Voicecall_Icon from '../../assets/Images/SVG/Voicecall_Icon';
import Videocall_Icon from '../../assets/Images/SVG/Videocall_Icon';
import Messaging_Icon from '../../assets/Images/SVG/Messaging_Icon';
import HouseVisit from '../../assets/Images/SVG/HouseVisit';
import BookAppoinmentList from './Components/BookAppoinmentList';
import ButtonDy from '../../common/Components/ButtonDy';

const BookAppointment = ({ navigation }) => {
    const [accountType, setaccountType] = useState(1);
    const [tempSelectionIndex, settempSelectionIndex] = useState(undefined);

    const Specialist = [
        {
            icon: <Voicecall_Icon />,
            name: "Voice call",
            number: "Can make a voice call with doctor.",
            rating: "₹200"
        },
        {
            icon: <Messaging_Icon />,
            name: 'Messaging',
            number: "Can messaging with doctor.",
            rating: "₹100"
        },
        {
            icon: <Videocall_Icon />,
            name: 'Video call',
            number: "Can make a video call with doctor.",
            rating: "₹250"
        },
        {
            icon: <HouseVisit />,
            name: 'House Visit',
            number: "Doctor comes to your location",
            rating: "₹400"
        },
    ];

    return (
        <SafeAreaView style={styles.safeContainer}>
            {/* header Ip */}
            <HeaderDy isBack istitle Headertitle={"Appointment"} />

            <ScrollView contentContainerStyle={styles.bodyContainer}>
                <Text style={styles.title}>{"10 June, Monday"}</Text>
                <AppointmentTimeOptions
                    accountType={accountType}
                    setaccountType={setaccountType}
                />
                <View height={10} />
                <TimeSelector
                    selectedIndex={tempSelectionIndex}
                    onSelect={(item) => settempSelectionIndex(item.index)}
                    data={[
                        {
                            time: "09:00",
                            period: "AM"
                        },
                        {
                            time: "10:30",
                            period: "AM"
                        },
                        {
                            time: "10:30",
                            period: "AM"
                        },
                        {
                            time: "10:30",
                            period: "AM"
                        },
                        {
                            time: "10:30",
                            period: "AM"
                        },
                    ]}
                    isTime
                />
                <Text style={styles.title}>{"Fees information"}</Text>
                <BookAppoinmentList key={'SpeedMeter'} data={Specialist} />

                <ButtonDy
                    onPress={() => navigation.navigate("Payment")}
                    title={'Payment Now'}
                    style={styles.continueButton}
                    textStyle={styles.buttontext}
                // processing={signinProcess}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

export default BookAppointment;
