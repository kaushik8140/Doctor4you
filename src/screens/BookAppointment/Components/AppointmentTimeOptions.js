import React from 'react';
import { StyleSheet, View } from 'react-native';
import Evening_Icon from '../../../assets/Images/SVG/Evening_Icon';
import Morning_Icon from '../../../assets/Images/SVG/Morning_Icon';
import AppointmentTimeButton from './AppointmentTimeButton';


const AppointmentTimeOptions = ({ accountType, setaccountType }) => {
    return (
        <View style={styles.container}>
            <AppointmentTimeButton
                isActive={accountType === 2}
                onPress={() => setaccountType(2)}
                iconPath={<Morning_Icon />}
                title={"Morning"}
            />

            {/* space */}
            <View width={15} />

            <AppointmentTimeButton
                isActive={accountType === 1}
                onPress={() => setaccountType(1)}
                iconPath={<Evening_Icon />}
                title={"Evening"}
            />
        </View>
    )
}

export default AppointmentTimeOptions

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
});
