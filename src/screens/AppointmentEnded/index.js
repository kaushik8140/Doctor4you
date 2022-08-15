import React, { useState, useRef, useEffect } from 'react';
import {
    ScrollView, SafeAreaView, View, Text, TouchableOpacity
} from 'react-native';
import styles from './style';
import FontFamily from '../../common/FontFamily';
import Colors from '../../common/Colors';
import EndedJane from '../../assets/Images/SVG/EndedJane';
import ButtonDy from '../../common/Components/ButtonDy';

const AppointmentEnded = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>

            <ScrollView style={styles.bodyContainer}>

                <Text style={styles.maintext}>Appointment Ended</Text>

                <View style={styles.subview}>
                    <EndedJane />
                </View>
                <Text style={styles.nametext}>Dr. Jane Cooper</Text>
                <ButtonDy
                    onPress={() => navigation.navigate("Writereview")}
                    title={'Write a review'}
                    style={styles.continueButton}
                    textStyle={styles.buttontext}
                />
                <ButtonDy
                    onPress={() => navigation.navigate("Home")}
                    title={'Go to dashboard'}
                    style={styles.dashboardbutton}
                    textStyle={styles.dashboardtext}
                />
            </ScrollView>

        </SafeAreaView>
    )
}

export default AppointmentEnded;
