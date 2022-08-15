import React, { memo } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../../common/Colors';
import Modal from 'react-native-modal';
import FontFamily from '../../../common/FontFamily';
import PaymentSuccess from '../../../assets/Images/SVG/PaymentSuccess';
import ButtonDy from '../../../common/Components/ButtonDy';


const PaymentModal = props => {
    const { iscustomModalVisible, modaltoggle } = props;
    const navigation = useNavigation();

    return (
        <Modal
            isVisible={iscustomModalVisible}
            backdropOpacity={0.5}>
            <View style={styles.mainview}>
                <View style={{ alignSelf: 'center', marginBottom: 20 }}>
                    <PaymentSuccess />
                </View>


                <Text style={styles.logouttext}>{'Completed'}</Text>
                <Text style={styles.appoitext}>{'Your appointment booking successfully completed. Dr. Jane Cooper will Contact you soon'}</Text>
                <ButtonDy
                    onPress={async () => {
                        modaltoggle();
                        navigation.navigate("ContactDoctor");
                    }}
                    style={styles.touchableview}
                    title={'Contact Doctor'}
                    textStyle={styles.yestext}
                />
            </View>
        </Modal>
    );
};

export default memo(PaymentModal);

const styles = StyleSheet.create({
    mainview: {
        backgroundColor: Colors.white,
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderRadius: 15,
        paddingTop: 100
    },
    logouttext: {
        textAlign: 'center',
        color: Colors.gray,
        fontSize: 26,
        fontFamily: FontFamily.semiBold,
        marginTop: 30
    },
    rowview: { flexDirection: 'row', marginTop: 20, paddingHorizontal: 20 },
    yestext: {
        textAlign: 'center',
        fontSize: 18,
        color: Colors.white,
        fontFamily: FontFamily.primary,
    },
    touchableview: {
        marginTop: 30
    },
    touchablesubview: {
        flex: 1,
        borderWidth: 1,
        paddingVertical: 10,
        marginLeft: 20,
        borderRadius: 29,
        backgroundColor: Colors.white,
        borderColor: Colors.gray,
    },
    appoitext: {
        textAlign: 'center',
        color: Colors.gray,
        fontSize: 16,
        fontFamily: FontFamily.primary,
        paddingTop: 20
    }
});
