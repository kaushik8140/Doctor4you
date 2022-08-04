import React, { useState, useRef, useEffect } from 'react';
import {
    ScrollView, SafeAreaView, View, Text, TouchableOpacity
} from 'react-native';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';
import DefaultImage from '../../assets/Images/SVG/DefaultImage';
import FontFamily from '../../common/FontFamily';
import Colors from '../../common/Colors';
import Notification from '../../assets/Images/SVG/Notification';
import SearchInputDy from '../../common/Components/SearchInputDy';
import Heart from '../../assets/Images/SVG/Heart';
import Cardio from '../../assets/Images/SVG/Cardio';
import Dental from '../../assets/Images/SVG/Dental';
import Physico from '../../assets/Images/SVG/Physico';
import SpecialistList from './Components/SpecialistList';
import ButtonDy from '../../common/Components/ButtonDy';
import CardioIssuelist from './Components/CardioIssuelist';
import TopDoctorList from './Components/TopDoctorList';
import Esther from '../../assets/Images/SVG/Esther';
import Daniela from '../../assets/Images/SVG/Daniela';
import Carmen from '../../assets/Images/SVG/Carmen';

const Home = ({ navigation }) => {
    const searchTextRef = useRef(null);
    const [textSearch, settextSearch] = useState('');


    const Specialist = [
        {
            icon: <Heart />,
            name: "Cardio\nSpecialist",
            number: "27 Doctors",
        },
        {
            icon: <Cardio />,
            name: 'Heart\nIssue',
            number: "43 Doctors",
        },
        {
            icon: <Dental />,
            name: 'Dental\nCare',
            number: "19 Doctors",
        },
        {
            icon: <Physico />,
            name: 'Physico\nTherapy',
            number: "07 Doctors",
        },
    ];

    const CardioIssues = [
        {
            name: "Cardio Issues?",
            number: "For cardio patient here can easily contact with doctor. Can chat & live chat.",
        },
        {
            name: 'Dental Treatments',
            number: "For Dental patient here can easily contact with doctor. Can chat & live chat.",
        },

    ];

    const TopDoctorlist = [
        {
            icon: <Esther />,
            name: "Dr. Esther Noi",
            number: "Heart Sergon",
        },
        {
            icon: <Daniela />,
            name: 'Dr. Daniela M',
            number: "Cardio Sergon",
        },
        {
            icon: <Carmen />,
            name: 'Dr. Carmen H',
            number: "Dental",
        },

    ];

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.bodyContainer}>

                <View>
                    <LinearGradient colors={["#EBF7F7", "#C6E4E4"]} style={{
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        height: 152
                    }}>
                        <View style={{ flexDirection: "row", paddingTop: 40, paddingLeft: 30 }}>
                            <DefaultImage />
                            <View style={{ flexDirection: "column", paddingLeft: 20, flex: 1 }}>
                                <Text style={{ fontSize: 20, fontFamily: FontFamily.bold, color: Colors.primary }}>John Doe</Text>
                                <Text style={{ fontSize: 14, fontFamily: FontFamily.light, color: Colors.gray }}>Find your suitable doctor here</Text>
                            </View>
                            <TouchableOpacity style={{ paddingRight: 28, alignSelf: "center" }}>
                                <Notification />
                            </TouchableOpacity>

                        </View>
                    </LinearGradient>

                    {/* search field */}
                    <SearchInputDy
                        ref={searchTextRef}
                        textSearch={textSearch}
                        settextSearch={settextSearch}
                        placeholdertext={'Search doctor, catagories, topic . . .'}
                        style={{
                            backgroundColor: Colors.offwhite,
                            marginHorizontal: 10,
                            marginVertical: 10,
                            marginTop: -32,
                        }}
                    />
                    <SpecialistList key={'SpeedMeter'} data={Specialist} title={'Specialist'} />
                    <Text style={styles.title}>{"Get Care"}</Text>
                    <ButtonDy
                        // onPress={handleSubmit}
                        title={'Request a Doctors Appointment'}
                        style={styles.button}
                        textStyle={styles.buttontext}
                    />
                    <CardioIssuelist key={'SpeedMeter'} data={CardioIssues} />
                    <TopDoctorList key={'SpeedMeter'} data={TopDoctorlist} title={'Top doctors'} />
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;
