import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Home from '../screens/Home';
// import Wishlist from '../screens/Wishlist';
// import Cart from './../screens/Cart';
// import Profile from '../screens/Profile';
import Home from '../screens/Home';
import TopDoctors from '../screens/TopDoctors';
import Search from '../screens/Search';
import MyAppointments from '../screens/MyAppointments';
import Settings from '../screens/Settings';

import Colors from '../common/Colors';
import {
    Home as HomeIcon,
    TopDoctors as TopDoctorsIcon,
    Search as SearchIcon,
    Document as DocumentIcon,
    Setting as SettingIcon,
} from './../assets/Images/SVG/TabIcon';
import FontFamily from '../common/FontFamily';
import FocusHome from '../assets/Images/SVG/FocusHome';
import FocusTopDoctors from '../assets/Images/SVG/FocusTopDoctors';
import FocusDocument from '../assets/Images/SVG/FocusDocument';
import FocusSearch from '../assets/Images/SVG/FocusSearch';
import FocusSetting from '../assets/Images/SVG/FocusSetting';
import { Platform } from 'react-native';


const Tab = createBottomTabNavigator();

const HomeTab = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    // borderTopLeftRadius: 24,
                    // borderTopRightRadius: 24,
                    height: Platform.OS === 'ios' ? 70 : 70,
                    backgroundColor: Colors.white,
                    overflow: 'hidden',
                },
                headerTitleStyle: {
                    fontFamily: FontFamily.primary,
                },
                header: () => null,
                tabBarInactiveTintColor: Colors.gray,
                tabBarActiveTintColor: Colors.primary,
            }}
        >
            {/* home screen */}
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) =>
                        focused ? <FocusHome /> : <HomeIcon />
                }}
            />
            {/* home screen */}
            <Tab.Screen
                name="TopDoctors"
                component={TopDoctors}
                options={{
                    tabBarIcon: ({ focused }) =>
                        focused ? <FocusTopDoctors /> : <TopDoctorsIcon />
                }}
            />
            {/* home screen */}
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarIcon: ({ focused }) =>
                        focused ? <FocusSearch /> : <SearchIcon />
                }}
            />
            {/* home screen */}
            <Tab.Screen
                name="MyAppointments"
                component={MyAppointments}
                options={{
                    tabBarIcon: ({ focused }) =>
                        focused ? <FocusDocument /> : <DocumentIcon />
                }}
            />


            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarIcon: ({ focused }) =>
                        focused ? <FocusSetting /> : <SettingIcon />
                }}
            />
        </Tab.Navigator>
    );
}

export default HomeTab;
