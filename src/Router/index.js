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
import Patientdetails2 from '../screens/Patientdetails2';
import Patientdetails3 from '../screens/Patientdetails3';
import Patientdetails4 from '../screens/Patientdetails4';
import DoctorDetails from '../screens/DoctorDetails';
import BookAppointment from '../screens/BookAppointment';
import Payment from '../screens/Payment';
import ContactDoctor from '../screens/ContactDoctor';
import Videocall from '../screens/Videocall';
import ChatScreen from '../screens/ChatScreen';
import AppointmentEnded from '../screens/AppointmentEnded';
import Writereview from '../screens/Writereview';
import Onlineappointments from '../screens/Onlineappointments';

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
                <Stack.Screen name="Patientdetails2" component={Patientdetails2} />
                <Stack.Screen name="Patientdetails3" component={Patientdetails3} />
                <Stack.Screen name="Patientdetails4" component={Patientdetails4} />
                <Stack.Screen name="DoctorDetails" component={DoctorDetails} />
                <Stack.Screen name="BookAppointment" component={BookAppointment} />
                <Stack.Screen name="Payment" component={Payment} />
                <Stack.Screen name="ContactDoctor" component={ContactDoctor} />
                <Stack.Screen name="Videocall" component={Videocall} />
                <Stack.Screen name="ChatScreen" component={ChatScreen} />
                <Stack.Screen name="AppointmentEnded" component={AppointmentEnded} />
                <Stack.Screen name="Writereview" component={Writereview} />
                <Stack.Screen name="Onlineappointments" component={Onlineappointments} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;
