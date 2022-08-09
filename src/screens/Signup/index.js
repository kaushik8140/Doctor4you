import {
    Text,
    View,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    Dimensions,
} from 'react-native';
import React, { useRef, useState } from 'react';
import { SvgXml } from 'react-native-svg';
import styles from './style';
import Loginlogo from '../../assets/Images/SVG/Loginlogo';
import Background from '../../assets/Images/Temp/background_image.png';
import { KeyboardAwareView } from 'react-native-keyboard-aware-view';
import EMAIL_ICON from '../../assets/Images/Temp/email.png';
import PASSWORD_ICON from '../../assets/Images/Temp/password.png';
import PHONE_ICON from '../../assets/Images/Temp/phone.png';
import USERNAME_ICON from '../../assets/Images/Temp/username.png';
import ButtonDy from '../../common/Components/ButtonDy';
import TextField from '../../common/Components/TextField';
import { ErrorMessage, Formik } from 'formik';
import { CommonActions } from '@react-navigation/native';
import { signupValues } from '../../utils/formixInitials';
import { SignupSchema } from '../../utils/validationSchema';
import ErrorTextDY from '../../common/Components/ErrorTextDY';
// import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Horizontalline from '../Login/Components/Horizontalline';
import Google from '../../assets/Images/SVG/Google';
import Facebook from '../../assets/Images/SVG/Facebook';


const Signup = ({ navigation }) => {

    const passwordRef = useRef(null);
    const windowHeight = Dimensions.get('window').height;
    const [signinProcess, setsigninProcess] = useState(false);


    return (
        <SafeAreaView style={styles.safeContainer}>
            <KeyboardAwareView animated={true}>
                <ImageBackground
                    source={Background}
                    resizeMode="stretch"
                    style={styles.imagebackgroundstyle}>
                    <ScrollView contentContainerStyle={styles.scrollContainer}>
                        {/* logo image */}
                        <View style={{ alignSelf: "center", top: windowHeight / 8 }}>
                            <Loginlogo />
                        </View>
                        {/* hightview */}
                        <View style={{ height: windowHeight / 7 }} />

                        {/* login text */}
                        <Text style={styles.logintext}>Welcome to</Text>
                        <Text style={styles.doctortext}>Doctor4you</Text>

                        <View style={styles.container}>
                            <Formik
                                initialValues={signupValues}
                                validationSchema={SignupSchema}
                            // onSubmit={__onLoginPress}
                            >
                                {({ handleChange, handleBlur, handleSubmit, values }) => (
                                    <>
                                        {/* Number validation parts */}
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
                                        <View height={20} />

                                        <TextField
                                            onChangeText={handleChange('name')}
                                            onBlur={handleBlur('name')}
                                            value={values.name}
                                            placeholder={'Name'}
                                            // keyboardType={"email-address"}
                                            mainplaceholder={"Enter your full name"}
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

                                        {/* password validation parts */}
                                        <TextField
                                            ref={passwordRef}
                                            onChangeText={handleChange('password')}
                                            onBlur={handleBlur('password')}
                                            value={values.password}
                                            iconPath={PASSWORD_ICON}
                                            placeholder={'Password'}
                                            mainplaceholder={"Enter password"}
                                            isPassword
                                            isvisible
                                        />
                                        <ErrorMessage
                                            render={msg => <ErrorTextDY title={msg} />}
                                            name="password"
                                        />



                                        <ButtonDy
                                            onPress={handleSubmit}
                                            title={'Create account'}
                                            style={styles.button}
                                            textStyle={styles.buttontext}
                                            processing={signinProcess}
                                        />

                                        <Horizontalline />
                                        <View style={styles.googleview}>
                                            <Google />
                                            <View width={30} />
                                            <Facebook />
                                        </View>
                                        <View height={20} />

                                        <Text style={styles.dontHaveText}>
                                            {'Already have an account?'}
                                            {`  `}
                                            <Text style={styles.signup}
                                                onPress={() => navigation.navigate('Login')}
                                            >
                                                {'SignIn'}
                                            </Text>
                                        </Text>

                                    </>
                                )}
                            </Formik>
                        </View>
                    </ScrollView>
                </ImageBackground>
            </KeyboardAwareView>
        </SafeAreaView>
    );
};

export default Signup;

