import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, Image, TouchableOpacity } from 'react-native'
import styles from './style'
import YOUND_WOMAN from '../../assets/Images/Temp/youngwoman.png'
import Shape_Icon from '../../assets/Images/Temp/Shape.png'
import BOTTOM_SHAPE from '../../assets/Images/Temp/bottombackground.png'
import LightVoice from '../../assets/Images/SVG/LightVoice'
import Mute from '../../assets/Images/SVG/Mute'
import Offvideo from '../../assets/Images/SVG/Offvideo'
import Chat from '../../assets/Images/SVG/Chat'
import PhoneFill from '../../assets/Images/SVG/PhoneFill'





const ContactDoctor = ({ navigation }) => {

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    return (
        <SafeAreaView style={styles.container}>

            <View>
                <Image
                    source={YOUND_WOMAN}
                    style={styles.image}
                    resizeMode="cover"
                />
                <Image
                    source={Shape_Icon}
                    style={styles.shapeImage}
                    resizeMode="cover"
                />
            </View>

            <View style={styles.mainview}>
                <Image
                    source={BOTTOM_SHAPE}
                    style={styles.bottomshape}
                    resizeMode="cover"
                />
                <View style={styles.subview}>
                    <TouchableOpacity>
                        <LightVoice />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Mute />
                    </TouchableOpacity>
                    <View width={windowWidth / 5} />
                    <TouchableOpacity onPress={() => navigation.navigate("Videocall")}>
                        <Offvideo />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("ChatScreen")}>
                        <Chat />
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={styles.phonefillview} onPress={() => navigation.navigate("AppointmentEnded")}>
                <PhoneFill />
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomtouchview}>
                <Text style={styles.janetext}>Dr. Jane Cooper</Text>
                <Text style={styles.subjaintext}>12:08</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}

export default ContactDoctor

