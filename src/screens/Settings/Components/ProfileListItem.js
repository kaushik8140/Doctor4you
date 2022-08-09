import React from 'react';
import {
    ProfileNotification,
    Language,
    Favouritedoctors,
    FAQs,
    Help,
    RightArrow,
    LogOut,
} from './../../../assets/Images/SVG/ProfileIcon';

export const ProfileItems = [
    { icon: <ProfileNotification />, name: 'Notification', },
    { icon: <Language />, name: 'Language', right: <RightArrow /> },
    { icon: <Favouritedoctors />, name: 'Favourite doctors', right: <RightArrow /> },
    { icon: <FAQs />, name: 'FAQs', right: <RightArrow /> },
    { icon: <Help />, name: 'Help', right: <RightArrow /> },
];
