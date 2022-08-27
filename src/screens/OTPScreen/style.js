import { StyleSheet } from 'react-native';
import Colors from '../../common/Colors';
import FontFamily from '../../common/FontFamily';

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: Colors.backgroundGray,
    },
    scrollContainer: {
        flexGrow: 1,
        width: '100%',
        paddingVertical: 30,
        paddingHorizontal: '5%',
    },
    verifytext: {
        color: Colors.primary,
        fontSize: 24,
        fontFamily: FontFamily.bold,
        // paddingLeft: 5,
        paddingTop: 30,
    },
    subtextgray: {
        fontFamily: FontFamily.primary,
        fontSize: 16,
        color: Colors.gray,
        paddingTop: 20,
        lineHeight: 25
    },
    bottomtext: {
        fontFamily: FontFamily.primary,
        fontSize: 16,
        color: Colors.subgray,
    },
    mobiletext: {
        fontFamily: FontFamily.semiBold,
        fontSize: 13,
        color: Colors.primary,
    },
    otptext: {
        color: Colors.lightblack,
        fontSize: 18,
        fontFamily: FontFamily.bold,
        paddingLeft: 5,
        paddingTop: 30,
    },
    resendtext: {
        color: Colors.primary,
        fontSize: 16,
        fontFamily: FontFamily.bold,
        alignSelf: 'center',
        paddingTop: 20,
    },
    root: { flex: 1, padding: 20 },
    title: { textAlign: 'center', fontSize: 30 },
    codeFieldRoot: { marginTop: 40 },
    cell: {
        width: 55,
        height: 55,
        lineHeight: 38,
        fontSize: 24,
        color: Colors.bordergray,
        fontFamily: FontFamily.semiBold,
        backgroundColor: Colors.white,
        borderRadius: 12,
        paddingTop: 9,
        textAlign: 'center',
    },
    // focusCell: {
    //     // borderColor: Colors.black,
    //     borderRadius: 12,
    //     borderWidth: 1,
    // },
    button: {
        position: "absolute",
        bottom: 20
    },
    buttontext: {
        fontFamily: FontFamily.bold,
        fontSize: 16,
    },
    bottomtext: {
        fontFamily: FontFamily.primary,
        fontSize: 13,
        color: Colors.gray,
        paddingTop: 20,
        alignSelf: "center"
    }
});
export default styles;