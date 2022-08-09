import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropertyTypeButton from '../../../common/Components/PropertyTypeButton';
import Colors from '../../../common/Colors';

const PropertyTypeOptions = ({ accountType, setaccountType, style }) => {
    return (
        <View style={[styles.container, { ...style }]}>
            <PropertyTypeButton
                isActive={accountType === 2}
                onPress={() => setaccountType(2)}
                title={"Upcoming"}
                activeStyle={Colors.primary}
                inactiveStyle={Colors.white}
                activeTextStyle={Colors.white}
                inactiveTextStyle={Colors.gray}
            />

            {/* space */}
            {/* <View width={10} /> */}

            <PropertyTypeButton
                isActive={accountType === 1}
                onPress={() => setaccountType(1)}
                title={"Past"}
                activeStyle={Colors.primary}
                inactiveStyle={Colors.white}
                activeTextStyle={Colors.white}
                inactiveTextStyle={Colors.gray}
            />
        </View>
    )
}

export default PropertyTypeOptions

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderColor: Colors.white,
        borderRadius: 8,
        marginHorizontal: 15,
        paddingHorizontal: 1,
        paddingVertical: 1,
        backgroundColor: Colors.white,
        marginTop: 20,
        borderWidth: 1,
    },
});
