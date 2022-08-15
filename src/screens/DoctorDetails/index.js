import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Doctordetails from '../../assets/Images/SVG/Doctordetails'
import Colors from '../../common/Colors'
import FontFamily from '../../common/FontFamily'
import styles from './style'
import PatientsHeart from '../../assets/Images/SVG/PatientsHeart'
import ButtonDy from '../../common/Components/ButtonDy'
import LeftArrow from '../../assets/Images/SVG/LeftArrow'
import TotalPatient from '../../assets/Images/SVG/TotalPatient'
import Experiences from '../../assets/Images/SVG/Experiences'
import DateTimeSelector from '../../common/Components/DateTimeSelector'
import MonthOption from '../../common/Components/MonthOption';

const DoctorDetails = ({ navigation }) => {
    const Beds = ["AUGUST", "OCTOMBER", "NOVEMBER", "DECEMBER", "2023", "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY"];
    const [selectedBedsIndex, setselectedBedsIndex] = useState(0);
    const [tempSelectionDate, settempSelectionDate] = useState(undefined);
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.topview}>
                <Doctordetails />
            </View>
            <TouchableOpacity style={styles.headericon} onPress={() =>  navigation.goBack()}>
                <LeftArrow />
            </TouchableOpacity>
            <View style={styles.subview}>
                <View style={styles.experiencetext}>
                    <TotalPatient />
                    <View style={styles.columnview}>
                        <Text style={styles.yeartext}>1000+</Text>
                        <Text style={styles.patitenttext}>Patients</Text>
                    </View>
                    <View style={styles.verticleLine}></View>
                    <Experiences />
                    <View style={styles.columnview}>
                        <Text style={styles.yeartext}>5 Years</Text>
                        <Text style={styles.patitenttext}>Experiences</Text>
                    </View>
                </View>


                <ScrollView style={styles.scrollcontainer}>

                    <Text style={styles.CooperText}>Dr. Jane Cooper</Text>
                    <Text style={styles.hospitaltext}>Heart Sergon - Surat Medical College
                        Hospital</Text>
                    <Text style={styles.reviewtext}>⭐️ 4.8 ( 25 Reviews)</Text>

                    <Text style={styles.abouttext}>About doctor</Text>
                    <Text style={styles.mosttext}>Dr. Jane Cooper is the top most Cardiologist specialist in Dhaka Medical College Hospital at Accra. SHe achived several awards for her wonderful contribution in her own field. SHe is avaliable for private consultation.</Text>
                    <Text style={styles.Workingtext}>Working time</Text>
                    <Text style={styles.timetext}>Mon - Fri 09.00 AM - 08.00 PM</Text>

                    <MonthOption
                        data={Beds}
                        extraHorizontalPadding={15}
                        selectedAgeIndex={selectedBedsIndex}
                        onSelect={(index) => setselectedBedsIndex(index)}
                        activeTextStyle={{ color: Colors.gray }}
                        inactiveTextStyle={{ color: Colors.bordergray }}
                    />

                    <DateTimeSelector
                        selectedIndex={tempSelectionDate}
                        onSelect={(item) => settempSelectionDate(item.index)}
                        data={[{
                            date: 12,
                            day: "Fri",
                        }, {
                            date: 13,
                            day: "Sat",
                        }, {
                            date: 14,
                            day: "Sun",
                        }, {
                            date: 15,
                            day: "Mon",
                        },
                        {
                            date: 16,
                            day: "Tue",
                        },
                        {
                            date: 17,
                            day: "Wed",
                        }, {
                            date: 18,
                            day: "Thu",
                        },
                        {
                            date: 19,
                            day: "Fri",
                        }
                        ]}
                    />

                </ScrollView>

                <View style={styles.bottomview}>
                    <PatientsHeart />
                    <View width={15} />
                    <ButtonDy
                        onPress={() => navigation.navigate('BookAppointment')}
                        title={'Book appointment'}
                        style={styles.continueButton}
                        textStyle={styles.buttontext}
                    />
                </View>
            </View>


        </SafeAreaView>
    )
}

export default DoctorDetails

