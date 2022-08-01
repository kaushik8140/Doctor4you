// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import Home from '../screens/Home';
// import Wishlist from '../screens/Wishlist';
// import Cart from './../screens/Cart';
// import Profile from '../screens/Profile';

// import Colors from '../common/Colors';
// import {
//     Home as HomeIcon,
//     Wishlist as WishlistIcon,
//     Cart as CartIcon,
//     Profile as ProfileIcon,
// } from './../assets/Images/SVG/TabIcon';
// import FontFamily from '../common/FontFamily';

// const Tab = createBottomTabNavigator();

// const HomeTab = () => {
//     return (
//         <Tab.Navigator
//             screenOptions={{
//                 tabBarStyle: {
//                     // borderTopLeftRadius: 24,
//                     // borderTopRightRadius: 24,
//                     backgroundColor: Colors.white,
//                     overflow: 'hidden',
//                 },
//                 headerTitleStyle: {
//                     fontFamily: FontFamily.primary,
//                 },
//                 header: () => null,
//                 tabBarInactiveTintColor: Colors.gray,
//                 tabBarActiveTintColor: Colors.primary,
//             }}
//         >
//             {/* home screen */}
//             <Tab.Screen
//                 name="Home"
//                 component={Home}
//                 options={{
//                     tabBarIcon: ({ focused }) => <HomeIcon focused={focused} />,
//                 }}
//             />
//             {/* home screen */}
//             <Tab.Screen
//                 name="Wishlist"
//                 component={Wishlist}
//                 options={{
//                     tabBarIcon: ({ focused }) => <WishlistIcon focused={focused} />,
//                 }}
//             />
//             {/* home screen */}
//             <Tab.Screen
//                 name="Cart"
//                 component={Cart}
//                 options={{
//                     tabBarIcon: ({ focused }) => <CartIcon focused={focused} />,
//                 }}
//             />
//             {/* home screen */}
//             <Tab.Screen
//                 name="Profile"
//                 component={Profile}
//                 options={{
//                     tabBarIcon: ({ focused }) => <ProfileIcon focused={focused} />,
//                 }}
//             />
//         </Tab.Navigator>
//     );
// }

// export default HomeTab;
