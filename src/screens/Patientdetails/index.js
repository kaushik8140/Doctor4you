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
import PropertyOptions from '../../common/Components/PropertyOptions';
import BouncyCheckbox from "react-native-bouncy-checkbox";

const Patientdetails = ({ navigation }) => {
    const Beds = ["10+", "20+", "30+", "40+"];
    const [selectedBedsIndex, setselectedBedsIndex] = useState(0);
    const [checkboxState, setCheckboxState] = React.useState(false);
    const [checkbox1State, setCheckbox1State] = React.useState(false);
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
                            <PropertyOptions
                                data={Beds}
                                extraHorizontalPadding={15}
                                selectedAgeIndex={selectedBedsIndex}
                                onSelect={(index) => setselectedBedsIndex(index)}
                                isWrap
                                activeTextStyle={{ color: Colors.white }}
                                inactiveTextStyle={{ color: Colors.gray }}
                            />


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
                            <View height={20} />


                            <View style={styles.topContainer}>
                                <Image
                                    source={CALENDER_ICON}
                                    style={styles.icon}
                                    resizeMode="contain"
                                />

                                {/* placeholder name */}
                                <Text style={styles.placeholderText}>Gender</Text>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <BouncyCheckbox
                                    style={{ marginTop: 16 }}
                                    unfillColor={Colors.white}
                                    fillColor={Colors.primary}
                                    // ref={(ref: any) => (bouncyCheckboxRef = ref)}
                                    isChecked={checkboxState}
                                    text="Male"
                                    disableBuiltInState
                                    textStyle={{ textDecorationLine: "none" }}
                                    onPress={() => { setCheckboxState(!checkboxState), setCheckbox1State(false) }}
                                />
                                <View width={10} />
                                <BouncyCheckbox
                                    style={{ marginTop: 16 }}
                                    unfillColor={Colors.white}
                                    fillColor={Colors.primary}
                                    // ref={(ref: any) => (bouncyCheckboxRef = ref)}
                                    isChecked={checkbox1State}
                                    text="Female"
                                    disableBuiltInState
                                    textStyle={{ textDecorationLine: "none" }}
                                    onPress={() => { setCheckbox1State(!checkbox1State), setCheckboxState(false) }}
                                />
                            </View>

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
                                onPress={() => navigation.navigate("Patientdetails2")}
                                title={'Next 1/4'}
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
