import React, { useState, useRef, useEffect } from 'react';
import {
    ScrollView, SafeAreaView, View, Text, TouchableOpacity, Image
} from 'react-native';
import styles from './style';
import FontFamily from '../../common/FontFamily';
import Colors from '../../common/Colors';
import HeaderDy from '../../common/Components/HeaderDy';
import { ErrorMessage, Formik } from 'formik';
import TextField from '../../common/Components/TextField';
import ErrorTextDY from '../../common/Components/ErrorTextDY';
import ButtonDy from '../../common/Components/ButtonDy';
import PHONE_ICON from '../../assets/Images/Temp/phone.png';
import USERNAME_ICON from '../../assets/Images/Temp/username.png';
import CALENDER_ICON from '../../assets/Images/Temp/calender.png';
import { PatientdetailsValues } from '../../utils/formixInitials';
import { PatientProfileSchema } from '../../utils/validationSchema';
import TextInputHelp from '../Help/Components/TextInputHelp';

const Patientdetails = ({ navigation }) => {


    return (
        <SafeAreaView style={styles.container}>
            {/* header Ip */}
            <HeaderDy isBack istitle Headertitle={"Patient’s details"} />

            <ScrollView style={styles.scrollContainer}>

                <Formik
                    initialValues={PatientdetailsValues}
                    validationSchema={PatientProfileSchema}
                // onSubmit={__onLoginPress}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <>
                            {/* Number validation parts */}
                            <TextField
                                onChangeText={handleChange('name')}
                                onBlur={handleBlur('name')}
                                value={values.name}
                                placeholder={'Name'}
                                // keyboardType={"email-address"}
                                mainplaceholder={"John Doe"}
                                autoCapitalize="none"
                                iconPath={USERNAME_ICON}
                                returnKeyType={"next"}
                                onSubmitEditing={() => passwordRef.current.focus()}
                            />

                            <ErrorMessage
                                render={msg => <ErrorTextDY title={msg} />}
                                name="name"
                            />
                            <View height={20} />


                            <View style={styles.topContainer}>
                                <Image
                                    source={CALENDER_ICON}
                                    style={styles.icon}
                                    resizeMode="contain"
                                />

                                {/* placeholder name */}
                                <Text style={styles.placeholderText}>Select your age range or type </Text>
                            </View>


                            {/* password validation parts */}
                            <TextField
                                onChangeText={handleChange('phone')}
                                onBlur={handleBlur('phone')}
                                value={values.phone}
                                placeholder={'Phone number'}
                                keyboardType={"phone-pad"}
                                autoCapitalize="none"
                                iconPath={PHONE_ICON}
                                returnKeyType={"next"}
                                mainplaceholder={"Enter your phone number"}
                                phoneValue={"+91"}
                                onSubmitEditing={() => passwordRef.current.focus()}
                            />

                            <ErrorMessage
                                render={msg => <ErrorTextDY title={msg} />}
                                name="phone"
                            />
                            <Text style={styles.maintext}>Please describe your symptoms </Text>
                            <TextInputHelp
                                onChangeText={handleChange('symptoms')}
                                onBlur={handleBlur('symptoms')}
                                value={values.symptoms}
                                placeholder={'Enter Description...'}
                                returnKeyType={"next"}
                                inputStyle={{
                                    height: 90,
                                    textAlignVertical: 'top'
                                }}
                                multiline
                            // onSubmitEditing={() => countryRef.current.focus()}
                            />
                            <ErrorMessage render={msg => <ErrorTextDY title={msg} />} name="symptoms" />

                            <ButtonDy
                                onPress={() => navigation.navigate("HomeTab")}
                                title={'Sign In'}
                                style={styles.continueButton}
                                textStyle={styles.buttontext}
                            // processing={signinProcess}
                            />





                        </>
                    )}
                </Formik>

            </ScrollView>
        </SafeAreaView>
    )
}

export default Patientdetails;
