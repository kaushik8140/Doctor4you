import React, { useEffect, useState, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import Login from '../screens/Login';
import Onboarding from '../screens/Onboarding';
import Signup from '../screens/Signup';
import Forgotpassword from '../screens/Forgotpassword';
import OTPScreen from '../screens/OTPScreen';
import NewPassword from '../screens/NewPassword';
import HomeTab from './HomeTab';
import NearbyDoctors from '../screens/NearbyDoctors';
import EditProfile from '../screens/EditProfile';
import Favouritedoctors from '../screens/Favouritedoctors';
import Faqsscreen from '../screens/Faqsscreen';
import Help from '../screens/Help';
import Notification from '../screens/Notification';
import CardioSpecialist from '../screens/CardioSpecialist';
import Patientdetails from '../screens/Patientdetails';

const Stack = createNativeStackNavigator();

const Router = () => {

    useEffect(() => {
        SplashScreen.hide();
    }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false,
            }} >


                <Stack.Screen name="Onboarding" component={Onboarding} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="Forgotpassword" component={Forgotpassword} />
                <Stack.Screen name="OTPScreen" component={OTPScreen} />
                <Stack.Screen name="NewPassword" component={NewPassword} />
                <Stack.Screen name="HomeTab" component={HomeTab} />
                <Stack.Screen name="NearbyDoctors" component={NearbyDoctors} />
                <Stack.Screen name="EditProfile" component={EditProfile} />
                <Stack.Screen name="Favouritedoctors" component={Favouritedoctors} />
                <Stack.Screen name="Faqsscreen" component={Faqsscreen} />
                <Stack.Screen name="Help" component={Help} />
                <Stack.Screen name="Notification" component={Notification} />
                <Stack.Screen name="CardioSpecialist" component={CardioSpecialist} />
                <Stack.Screen name="Patientdetails" component={Patientdetails} />


            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;
