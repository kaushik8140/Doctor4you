import React, { useState, useEffect } from 'react';
import { ScrollView, SafeAreaView, FlatList, View, Text, TouchableOpacity } from 'react-native';
import styles from './style';
import { ProfileItems } from './Components/ProfileListItem';
import Colors from '../../common/Colors';
import LinearGradient from 'react-native-linear-gradient';
import Johndoe from '../../assets/Images/SVG/Johndoe';
import EditIcon from '../../assets/Images/SVG/EditIcon';
import ProfileInputBox from '../../common/Components/ProfileInputBox';
import { RightArrow } from '../../assets/Images/SVG/ProfileIcon';
import ButtonDy from '../../common/Components/ButtonDy';



const Settings = ({ navigation }) => {

    const __onItemPress = index => {
        switch (index) {
            case 2:
                navigation.navigate("Favouritedoctors");
                break;
            case 3:
                navigation.navigate('Faqsscreen');
                break;
            case 4:
                navigation.navigate('Help');
                break;
            default:
                break;
        }
    };

    return (
        <SafeAreaView style={styles.container}>

            {/* content */}
            <ScrollView contentContainerStyle={styles.scrollContainer}>


                <LinearGradient colors={['#009899', '#009899']} style={styles.linearview}>
                    <Text style={styles.toptext}>Settings</Text>
                </LinearGradient>

                <View style={styles.topview}>
                    <Johndoe />
                    <View style={styles.subview}>
                        <Text style={styles.jontext}>Hello!</Text>
                        <Text style={styles.subtext}>John Doe</Text>
                    </View>
                    <TouchableOpacity style={styles.touchview} onPress={() => navigation.navigate('EditProfile')}>
                        <EditIcon />
                    </TouchableOpacity>
                </View>

                <FlatList
                    data={ProfileItems}
                    renderItem={({ item, index }) => {
                        return (
                            <View>
                                <ProfileInputBox
                                    onPress={() => __onItemPress(index)}
                                    left={item.icon}
                                    title={item.name}
                                    islanguage
                                    Right={
                                        (item.name !== 'Notification')
                                            ?
                                            <RightArrow color={Colors.gray} />
                                            :
                                            item.right
                                    }
                                    isSwitch={item.name == 'Notification'}

                                />
                            </View>
                        )
                    }}
                    keyExtractor={(_, index) => index + '__profile'}
                />
                <ButtonDy
                    title={'Logout'}
                    style={styles.continueButton}
                    textStyle={styles.buttontext}
                    islogout
                // processing={signinProcess}
                />
                 

            </ScrollView>
        </SafeAreaView>
    );
};

export default Settings;
