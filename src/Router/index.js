import React, { useEffect, useState, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import Login from '../screens/Login';

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

                {/* <Stack.Screen name="HomeTab" component={HomeTab} /> */}
                <Stack.Screen name="Login" component={Login} />
                {/* <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="OTPScreen" component={OTPScreen} />
                <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
                <Stack.Screen name="ResetPassword" component={ResetPassword} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;
