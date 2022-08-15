import { StyleSheet } from 'react-native';
import FontFamily from '../../common/FontFamily';
import Colors from '../../common/Colors';

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: Colors.backgroundGray,
    },
    bodyContainer: {
        marginHorizontal: "3%",
        flexGrow: 1
    },
    continueButton: {
        // position: 'absolute',
        bottom: 10,
        marginTop: 100
    },
    buttontext: {
        fontFamily: FontFamily.bold,
        fontSize: 16,
    },
    termstext: {
        fontFamily: FontFamily.primary,
        fontSize: 14,
        color: Colors.primary,
        textAlign: "center"
    },
    title: {
        fontFamily: FontFamily.semiBold,
        fontSize: 14,
        color: Colors.bordergray,
        paddingVertical: 10,
        textAlign: "center"
    },
    image: {
        width: '100%',
        height: 212,
    }
});

export default styles;
