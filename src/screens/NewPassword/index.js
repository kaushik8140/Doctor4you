import React, { useRef, useState } from 'react';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import { Formik, ErrorMessage } from 'formik';
import { resetPasswordValues } from '../../utils/formixInitials';
import { ResetPasswordSchema } from '../../utils/validationSchema';
import { KeyboardAwareView } from 'react-native-keyboard-aware-view';
import styles from './style';
import TextField from '../../common/Components/TextField';
import ErrorTextDY from '../../common/Components/ErrorTextDY';
import PASSWORD_ICON from '../../assets/Images/Temp/password.png';
import ButtonDy from '../../common/Components/ButtonDy';
import HeaderDy from '../../common/Components/HeaderDy';


const NewPassword = ({ navigation }) => {

    const passwordRef = useRef(null);

    return (
        <SafeAreaView style={styles.safeContainer}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>

                {/* header Ip */}
                <HeaderDy isBack istitle />
                {/* Forgot Password Text */}
                <Text style={styles.forgotPasswordText}>{"Recovery password"}</Text>
                <Text style={styles.sendingYouOTPText}>
                    {'Enter your new and confirm password to reset your password.'}
                </Text>


                <Formik
                    initialValues={resetPasswordValues}
                    validationSchema={ResetPasswordSchema}
                    onSubmit={values => {
                        __onSubmitPress(values)
                        console.log(values);
                    }}>
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <>
                            <View style={{ marginHorizontal: "3%" }}>
                                <View height={40} />
                                <TextField
                                    ref={passwordRef}
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    mainplaceholder={"Enter password"}
                                    value={values.password}
                                    iconPath={PASSWORD_ICON}
                                    placeholder={'Password'}
                                    isPassword
                                    isvisible
                                />
                                <ErrorMessage
                                    render={msg => <ErrorTextDY title={msg} />}
                                    name="password"
                                />
                                <View height={30} />

                                <TextField
                                    ref={passwordRef}
                                    onChangeText={handleChange('conformpassword')}
                                    onBlur={handleBlur('conformpassword')}
                                    mainplaceholder={"Enter confirm password"}
                                    value={values.conformpassword}
                                    iconPath={PASSWORD_ICON}
                                    placeholder={'Confirm password'}
                                    isPassword
                                    isvisible
                                />
                                <ErrorMessage
                                    render={msg => <ErrorTextDY title={msg} />}
                                    name="conformpassword"
                                />
                            </View>
                            <ButtonDy
                                onPress={() => navigation.navigate('Login')}
                                title={'Reset Password'}
                                style={styles.continueButton}
                                textStyle={styles.buttontext}
                            // processing={loginProcess}
                            />

                        </>
                    )}
                </Formik>

            </ScrollView>

        </SafeAreaView>
    );
};

export default NewPassword;