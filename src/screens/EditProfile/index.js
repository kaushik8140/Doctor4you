import React, { useState, useRef, useEffect } from 'react';
import {
    ScrollView, SafeAreaView, View, Text, TouchableOpacity
} from 'react-native';
import styles from './style';
import FontFamily from '../../common/FontFamily';
import Colors from '../../common/Colors';
import HeaderDy from '../../common/Components/HeaderDy';
import Editmain from '../../assets/Images/SVG/Editmain';
import { ErrorMessage, Formik } from 'formik';
import ButtonDy from '../../common/Components/ButtonDy';
import TextField from '../../common/Components/TextField';
import CameraIcon from '../../assets/Images/SVG/CameraIcon';
import ErrorTextDY from '../../common/Components/ErrorTextDY';
import { editProfileSchema } from '../../utils/validationSchema';
import { editProfileValues } from '../../utils/formixInitials';
import EMAIL_ICON from '../../assets/Images/Temp/email.png';
import PHONE_ICON from '../../assets/Images/Temp/phone.png';
import USERNAME_ICON from '../../assets/Images/Temp/username.png';
import GENDER_ICON from '../../assets/Images/Temp/gender.png';
import CALENDER_ICON from '../../assets/Images/Temp/calender.png';
import LOCATION_ICON from '../../assets/Images/Temp/location.png';


const EditProfile = ({ navigation }) => {
    const [testValue, setTestValue] = useState("");

    const passwordRef = useRef(null);
    return (
        <SafeAreaView style={styles.container}>
            {/* header Ip */}
            <HeaderDy isBack istitle Headertitle={"Edit profile"} />

            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={{
                    alignSelf: "center",
                }}>
                    <Editmain />
                    <View style={{ position: "absolute", right: -15, alignSelf: "center", }}>
                        <CameraIcon />
                    </View>

                </View>

                <Formik
                    initialValues={editProfileValues}
                    validationSchema={editProfileSchema}
                // onSubmit={__onLoginPress}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <>
                            <View height={10} />
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
                            <View height={30} />


                            <TextField
                                onChangeText={handleChange('phone')}
                                onBlur={handleBlur('phone')}
                                value={values.phone}
                                placeholder={'Phone number'}
                                keyboardType={"phone-pad"}
                                autoCapitalize="none"
                                iconPath={PHONE_ICON}
                                returnKeyType={"next"}
                                mainplaceholder={"12345 67890"}
                                phoneValue={"+91"}
                                onSubmitEditing={() => passwordRef.current.focus()}
                            />

                            <ErrorMessage
                                render={msg => <ErrorTextDY title={msg} />}
                                name="phone"
                            />

                            <View height={30} />

                            <TextField
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                placeholder={'Email'}
                                keyboardType={"email-address"}
                                mainplaceholder={"johndoe@gmail.com"}
                                autoCapitalize="none"
                                iconPath={EMAIL_ICON}
                                returnKeyType={"next"}
                                onSubmitEditing={() => passwordRef.current.focus()}
                            />

                            <ErrorMessage
                                render={msg => <ErrorTextDY title={msg} />}
                                name="email"
                            />

                            <View height={30} />

                            {/* password validation parts */}
                            <TextField
                                iconPath={GENDER_ICON}
                                placeholder={'Gender'}
                                genderValue
                            />
                            <View height={20} />
                            <TextField
                                iconPath={CALENDER_ICON}
                                placeholder={'Date of birth'}
                                value={testValue}
                                changeValue={setTestValue}
                                datepickerValue
                            />
                            <View height={20} />

                            <View height={10} />
                            {/* Number validation parts */}
                            <TextField
                                onChangeText={handleChange('address')}
                                onBlur={handleBlur('address')}
                                value={values.address}
                                placeholder={'Address'}
                                // keyboardType={"email-address"}
                                mainplaceholder={"Lal Darwaja, Surat"}
                                autoCapitalize="none"
                                iconPath={LOCATION_ICON}
                                returnKeyType={"next"}
                                onSubmitEditing={() => passwordRef.current.focus()}
                            />

                            <ErrorMessage
                                render={msg => <ErrorTextDY title={msg} />}
                                name="address"
                            />

                            <ButtonDy
                                onPress={handleSubmit}
                                title={'Save'}
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

export default EditProfile;
