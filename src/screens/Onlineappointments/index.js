import React, { useState, useRef, useEffect } from 'react';
import {
    ScrollView, SafeAreaView, View, Text, TouchableOpacity, Image
} from 'react-native';
import styles from './style';
import FontFamily from '../../common/FontFamily';
import Colors from '../../common/Colors';
import HeaderDy from '../../common/Components/HeaderDy';
import ButtonDy from '../../common/Components/ButtonDy';
import Cooper from '../../assets/Images/SVG/Cooper';
import OnlineCallIcon from '../../assets/Images/SVG/OnlineCallIcon';
import OnlineChat from '../../assets/Images/SVG/OnlineChat';
import OnlineVideoIcon from '../../assets/Images/SVG/OnlineVideoIcon';
import OnlineTimeIcon from '../../assets/Images/SVG/OnlineTimeIcon';
import VisitTimeIcon from '../../assets/Images/SVG/VisitTimeIcon';
import USERNAME_ICON from '../../assets/Images/Temp/username.png';
import FeesIcon from '../../assets/Images/SVG/FeesIcon';

const Onlineappointments = ({ navigation }) => {


    return (
        <SafeAreaView style={styles.container}>
            {/* header Ip */}
            <HeaderDy isBack istitle Headertitle={"Online appointments"} />

            <ScrollView style={styles.bodyContainer}>


                <View style={[styles.maincontainer]}>
                    <View style={styles.iconstyle}><Cooper /></View>

                    <View style={styles.rileayText}>
                        <Text style={styles.title}>Dr. Tierra Riley</Text>

                        <Text style={styles.topdoctext}>Cardiologist - Accra Medical
                            College Hospital</Text>

                    </View>
                </View>
                <View style={styles.seperatorLine} />

                <View style={styles.fourview}>
                    <OnlineCallIcon />
                    <OnlineChat />
                    <OnlineVideoIcon />
                    <OnlineTimeIcon />
                </View>

                <View style={styles.seperatorLine} />
                <View height={30} />
                <View style={styles.rowtext}>
                    <VisitTimeIcon />
                    <View style={styles.rileayText}>
                        <Text style={styles.visittext}>Visit time</Text>
                        <Text style={styles.morningText}>Morning</Text>
                        <Text style={styles.morningText}>Today - 10 June, 2022</Text>
                        <Text style={styles.morningText}>10:00 AM - 11:00 AM</Text>
                    </View>
                </View>
                <View height={30} />
                <View style={styles.rowtext}>
                    <Image
                        source={USERNAME_ICON}
                        resizeMode="cover"
                    />
                    <View style={styles.rileayText}>
                        <Text style={styles.visittext}>Patient information</Text>
                        <View style={styles.rowtext}>
                            <Text style={styles.range}>Name</Text>
                            <View width={15} />
                            <Text style={styles.range}>: </Text>
                            <View style={{marginRight:-30}} />
                            <Text style={styles.patientInfo}>John Doe</Text>
                        </View>
                        <View style={styles.rowtext}>
                            <Text style={styles.range}>Age</Text>
                            <View width={15} />
                            <Text style={styles.range}>: </Text>
                            <View style={{marginRight:-30}} />
                            <Text style={styles.patientInfo}>23</Text>
                        </View>
                        <View style={styles.rowtext}>
                            <Text style={styles.range}>Phone</Text>
                            <View width={15} />
                            <Text style={styles.range}>: </Text>
                            <View style={{marginRight:-30}} />
                            <Text style={styles.patientInfo}>+91 12345 67890</Text>
                        </View>
                    </View>
                </View>
                <View height={30} />
                <View style={styles.rowtext}>
                    <FeesIcon />
                    <View style={styles.rileayText}>
                        <Text style={styles.visittext}>Fees information</Text>
                        <Text style={styles.morningText}>Paid</Text>
                        <Text style={styles.morningText}>₹5</Text>
                    </View>
                </View>

                <ButtonDy
                    onPress={() => navigation.navigate("Writereview")}
                    title={'Write a review'}
                    style={styles.continueButton}
                    textStyle={styles.buttontext}
                />

            </ScrollView>
        </SafeAreaView>
    )
}

export default Onlineappointments;
