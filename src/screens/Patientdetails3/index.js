import React, { useState, useRef, useEffect } from 'react';
import {
    ScrollView, SafeAreaView, View, Text, TouchableOpacity, Image
} from 'react-native';
import styles from './style';
import FontFamily from '../../common/FontFamily';
import Colors from '../../common/Colors';
import HeaderDy from '../../common/Components/HeaderDy';
import ScrollPicker from 'react-native-wheel-scrollview-picker';
import ButtonDy from '../../common/Components/ButtonDy';
import BouncyCheckbox from "react-native-bouncy-checkbox";

const Patientdetails3 = ({ navigation }) => {
    const [checkboxState, setCheckboxState] = React.useState(false);
    const [checkbox1State, setCheckbox1State] = React.useState(false);
    return (
        <SafeAreaView style={styles.container}>
            {/* header Ip */}
            <HeaderDy isBack istitle Headertitle={"Patient’s details"} />

            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.maintext}>Are you currently under any{"\n"}
                    other medication?</Text>


                <View
                    style={{
                        marginTop: 20,
                        borderTopColor: Colors.bordergray,
                        borderTopWidth: 1,
                        marginBottom: 30,
                        marginTop: 50
                    }}
                />
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ flex: 1, color: Colors.black }}>Yes</Text>
                    <BouncyCheckbox
                        // style={{ marginTop: 16 }}
                        unfillColor={Colors.white}
                        fillColor={Colors.primary}
                        // ref={(ref: any) => (bouncyCheckboxRef = ref)}
                        isChecked={checkboxState}
                        // text="Male"
                        disableBuiltInState
                        textStyle={{ textDecorationLine: "none" }}
                        onPress={() => { setCheckboxState(!checkboxState), setCheckbox1State(false) }}
                    />
                </View>
                <View
                    style={{
                        marginTop: 20,
                        borderTopColor: Colors.bordergray,
                        borderTopWidth: 1,
                        marginBottom: 30
                    }}
                />

                <View style={{ flexDirection: "row" }}>
                    <Text style={{ flex: 1, color: Colors.black }}>No</Text>
                    <BouncyCheckbox
                        unfillColor={Colors.white}
                        fillColor={Colors.primary}
                        isChecked={checkbox1State}
                        disableBuiltInState
                        textStyle={{ textDecorationLine: "none" }}
                        onPress={() => { setCheckbox1State(!checkbox1State), setCheckboxState(false) }}
                    />
                </View>
                <View
                    style={{
                        marginTop: 20,
                        borderBottomColor: Colors.bordergray,
                        borderBottomWidth: 1,
                        marginBottom: 50
                    }}
                />

                <ButtonDy
                    onPress={() => navigation.navigate("Patientdetails4")}
                    title={'Next 3/4'}
                    style={styles.continueButton}
                    textStyle={styles.buttontext}
                // processing={signinProcess}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Patientdetails3;
