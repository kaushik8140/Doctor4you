import React, { useRef, useState } from 'react';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import { Formik, ErrorMessage } from 'formik';
import { forgotPasswordValues } from '../../utils/formixInitials';
import { ForgotPasswordSchema } from '../../utils/validationSchema';
import { KeyboardAwareView } from 'react-native-keyboard-aware-view';
import styles from './style';
import PHONE_ICON from '../../assets/Images/Temp/phone.png';
import TextField from '../../common/Components/TextField';
import ErrorTextDY from '../../common/Components/ErrorTextDY';
import ButtonDy from '../../common/Components/ButtonDy';
import HeaderDy from '../../common/Components/HeaderDy';


const Forgotpassword = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.safeContainer}>
            <KeyboardAwareView animated={true}>

                <ScrollView contentContainerStyle={styles.scrollcontainer}>
                    <HeaderDy isBack istitle />
                    {/* Forgot Password Text */}
                    <Text style={styles.forgotPasswordText}>{'Forgot password'}</Text>
                    <Text style={styles.sendingYouOTPText}>
                        {'Please enter your phone number below to receive your OTP number.'}
                    </Text>

                    <Formik
                        initialValues={forgotPasswordValues}
                        validationSchema={ForgotPasswordSchema}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values }) => (
                            <>
                                <View height={30} />
                                <View style={{ marginHorizontal: "3%" }}>
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

                                    />

                                    <ErrorMessage
                                        render={msg => <ErrorTextDY title={msg} />}
                                        name="phone"
                                    />
                                </View>

                                <ButtonDy
                                    onPress={() => navigation.navigate('OTPScreen')}
                                    style={styles.continueButton}
                                    title={'Send OTP'}
                                />
                            </>
                        )}
                    </Formik>
                </ScrollView>
            </KeyboardAwareView>
        </SafeAreaView>
    );
};

export default Forgotpassword;

