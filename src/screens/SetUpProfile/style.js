import { StyleSheet } from 'react-native';
import Colors from '../../common/Colors';
import FontFamily from '../../common/FontFamily';

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        paddingVertical: 30,
        backgroundColor: Colors.white,
    },
    scrollContainer: {
        paddingHorizontal: '3%',
        flexGrow: 1
    },
    continueButton: {
        position: 'absolute',
        bottom: 0,
    },
    buttontext: {
        fontFamily: FontFamily.bold,
        fontSize: 16,
    },
    forgotPasswordText: {
        color: Colors.primary,
        fontSize: 24,
        fontFamily: FontFamily.bold,
        paddingLeft: 5,
        paddingTop: 10,
        marginHorizontal: "3%"
    },
    sendingYouOTPText: {
        color: Colors.bordergray,
        fontSize: 16,
        fontFamily: FontFamily.primary,
        paddingLeft: 5,
        paddingTop: 15,
        marginHorizontal: "3%"
    },
    iconview: {
        position: "absolute",
        right: -15,
        alignSelf: "center",
    },
    iconmainview:{
        alignSelf: "center",
        marginTop: 50
    }

});

export default styles;
