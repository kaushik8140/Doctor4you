import React, { useState, useRef, useEffect } from 'react';
import {
    ScrollView, SafeAreaView, View, Text, TouchableOpacity, Image
} from 'react-native';
import styles from './style';
import FontFamily from '../../common/FontFamily';
import Colors from '../../common/Colors';
import HeaderDy from '../../common/Components/HeaderDy';
import ScrollPicker from 'react-native-wheel-scrollview-picker';
import ButtonDy from '../../common/Components/ButtonDy';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import TextInputHelp from '../Help/Components/TextInputHelp';
import ErrorTextDY from '../../common/Components/ErrorTextDY';
import { ErrorMessage, Formik } from 'formik';
import { Patientdetails4Values } from '../../utils/formixInitials';
import { PatientProfile4Schema } from '../../utils/validationSchema';

const Patientdetails4 = ({ navigation }) => {
    const [checkboxState, setCheckboxState] = React.useState(false);
    const [checkbox1State, setCheckbox1State] = React.useState(false);
    return (
        <SafeAreaView style={styles.container}>
            {/* header Ip */}
            <HeaderDy isBack istitle Headertitle={"Patient’s details"} />

            <ScrollView style={styles.scrollContainer}>
                <Text style={styles.maintext}>Do you have any known drug{"\n"}
                    allergies?</Text>


                <View
                    style={{
                        marginTop: 20,
                        borderTopColor: Colors.bordergray,
                        borderTopWidth: 1,
                        marginBottom: 30,
                        marginTop: 50
                    }}
                />
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ flex: 1, color: Colors.black }}>Yes</Text>
                    <BouncyCheckbox
                        // style={{ marginTop: 16 }}
                        unfillColor={Colors.white}
                        fillColor={Colors.primary}
                        // ref={(ref: any) => (bouncyCheckboxRef = ref)}
                        isChecked={checkboxState}
                        // text="Male"
                        disableBuiltInState
                        textStyle={{ textDecorationLine: "none" }}
                        onPress={() => { setCheckboxState(!checkboxState), setCheckbox1State(false) }}
                    />
                </View>
                <View
                    style={{
                        marginTop: 20,
                        borderTopColor: Colors.bordergray,
                        borderTopWidth: 1,
                        marginBottom: 30
                    }}
                />

                <View style={{ flexDirection: "row" }}>
                    <Text style={{ flex: 1, color: Colors.black }}>No</Text>
                    <BouncyCheckbox
                        unfillColor={Colors.white}
                        fillColor={Colors.primary}
                        isChecked={checkbox1State}
                        disableBuiltInState
                        textStyle={{ textDecorationLine: "none" }}
                        onPress={() => { setCheckbox1State(!checkbox1State), setCheckboxState(false) }}
                    />
                </View>
                <View
                    style={{
                        marginTop: 20,
                        borderBottomColor: Colors.bordergray,
                        borderBottomWidth: 1,
                        marginBottom: 50
                    }}
                />
                <Formik
                    initialValues={Patientdetails4Values}
                    validationSchema={PatientProfile4Schema}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <>
                            <Text style={styles.allergenstext}>List out known allergens</Text>
                            <TextInputHelp
                                onChangeText={handleChange('Chloroquine')}
                                onBlur={handleBlur('Chloroquine')}
                                value={values.Chloroquine}
                                placeholder={'Enter known allergens...'}
                                returnKeyType={"next"}
                                inputStyle={{
                                    height: 90,
                                    textAlignVertical: 'top'
                                }}
                                multiline
                            />
                            <ErrorMessage render={msg => <ErrorTextDY title={msg} />} name="Chloroquine" />
                            <Text style={styles.locationtext}>Current Location</Text>
                            <TextInputHelp
                                onChangeText={handleChange('location')}
                                onBlur={handleBlur('location')}
                                value={values.location}
                                placeholder={'Enter Current Location...'}
                                returnKeyType={"next"}
                                inputStyle={{
                                    height: 90,
                                    textAlignVertical: 'top'
                                }}
                                multiline
                            />
                            <ErrorMessage render={msg => <ErrorTextDY title={msg} />} name="location" />

                            <ButtonDy
                                onPress={() => navigation.navigate("NearbyDoctors")}
                                title={'Request'}
                                style={styles.continueButton}
                                textStyle={styles.buttontext}
                            />
                        </>
                    )}
                </Formik>

            </ScrollView>
        </SafeAreaView>
    )
}

export default Patientdetails4;
