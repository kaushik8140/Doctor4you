import React, { useState, useRef, useEffect } from 'react';
import {
    ScrollView, SafeAreaView, View, Text, TouchableOpacity, Dimensions
} from 'react-native';
import styles from './style';
import FontFamily from '../../common/FontFamily';
import Colors from '../../common/Colors';
import HeaderDy from '../../common/Components/HeaderDy';
import MyAppointmentsList from './Components/MyAppointmentsList';
import Mahmud from '../../assets/Images/SVG/Mahmud';
import Cooper from '../../assets/Images/SVG/Cooper';
import Bradford from '../../assets/Images/SVG/Bradford';
import Tierra from '../../assets/Images/SVG/Tierra';
import Ashley from '../../assets/Images/SVG/Ashley';
import Wentworth from '../../assets/Images/SVG/Wentworth';
import AudioCall from '../../assets/Images/SVG/AudioCall';
import Messaging from '../../assets/Images/SVG/Messaging';
import Videocall from '../../assets/Images/SVG/Videocall';
import PropertyTypeOptions from './Components/PropertyTypeOptions';
import PastImage from '../../assets/Images/SVG/PastImage';


const MyAppointments = ({ navigation }) => {

    const [accountType, setaccountType] = useState(2);
    const windowHeight = Dimensions.get('window').height;
    const Specialist = [
        {
            icon: <Bradford />,
            image: <AudioCall />,
            name: "Dr. Brycen Bradford",
            calling: "Voice Call -",
            status: "Accepted",
            time: "09:00 AM - 10:00 AM"
        },
        {
            icon: <Mahmud />,
            image: <Messaging />,
            name: 'Dr. Mahmud Nik Hasan',
            calling: "Messaging -",
            status: "In Progress",
            time: "11:00 AM - 11:30 AM"
        },
        {
            icon: <Tierra />,
            image: <Videocall />,
            name: 'Dr. Tierra Riley',
            calling: "Voice Call -",
            status: "Decline",
            time: "09:00 AM - 10:00 AM"
        },
    ];



    const Secondlist = [
        {
            icon: <Ashley />,
            image: <AudioCall />,
            name: "Dr. Brycen Bradford",
            calling: "Voice Call -",
            status: "Accepted",
            time: "09:00 AM - 10:00 AM"
        },
        {
            icon: <Mahmud />,
            image: <Messaging />,
            name: 'Dr. Mahmud Nik Hasan',
            calling: "Voice Call -",
            status: "Accepted",
            time: "11:00 AM - 11:30 AM"
        },

    ];


    const __currentPageComponent = () => {
        switch (accountType) {
            case 1:
                return __secondPage();
            case 2:
                return __firstPage();

            default:
                return null;
        }
    }


    const __firstPage = () => (
        <>
            <Text style={styles.title}>{"Today - 10 June, 2020"}</Text>

            {/* MyAppointmentsList */}
            <MyAppointmentsList key={'SpeedMeter'} data={Specialist} />

            <Text style={styles.title}>{"Monday - 11 June, 2020"}</Text>

            {/* MyAppointmentsList */}
            <MyAppointmentsList key={'SpeedMeter'} data={Secondlist} /></>

    );


    const __secondPage = () => (
        <>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: windowHeight / 8
            }}>
                <PastImage />
                <Text style={styles.pasttext}>{"You have no appointment in past"}</Text>
            </View>
        </>

    );



    return (
        <SafeAreaView style={styles.container}>

            {/* header Ip */}
            <HeaderDy istitle Headertitle={"My appointments"} isplusicon onadd={() => navigation.navigate('NearbyDoctors')} />
            <PropertyTypeOptions
                accountType={accountType}
                setaccountType={setaccountType}
                style={styles.topbutton}
            />
            <ScrollView style={styles.bodyContainer}>
                {__currentPageComponent()}
            </ScrollView>
        </SafeAreaView>
    )
}

export default MyAppointments;
