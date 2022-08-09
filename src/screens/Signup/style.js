import { StyleSheet } from 'react-native';
import Colors from '../../common/Colors';
import FontFamily from '../../common/FontFamily';

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: Colors.backgroundGray,
    },
    imagebackgroundstyle: {
        width: '100%',
        height: 200,
        flex: 1,
    },
    scrollContainer: {
        width: '100%',
    },
    logintext: {
        fontSize: 18,
        textAlign: 'center',
        color: Colors.gray1,
        fontFamily: FontFamily.semiBold,
        paddingTop: 20
    },
    doctortext: {
        fontSize: 28,
        textAlign: 'center',
        color: Colors.lightblack,
        fontFamily: FontFamily.bold,
    },
    container: {
        marginTop: '17%',
        marginHorizontal: 20
    },
    imageview: {
        alignSelf: 'center',
        top: 40
    },
    button: {
        marginTop: 20,
        marginBottom: 30,
        width: '100%',
    },
    buttontext: {
        fontFamily: FontFamily.bold,
        fontSize: 16,
    },
    forgorText: {
        fontSize: 14,
        fontFamily: FontFamily.semiBold,
        color: Colors.bordergray,
        textAlign: 'right',
        marginTop: 8,
    },
    dontHaveText: {
        fontSize: 14,
        fontFamily: FontFamily.primary,
        color: Colors.gray,
        textAlign: 'center',
        // marginTop: 14,
        marginBottom: 20,
    },
    signup: {
        color: Colors.primary,
        fontFamily: FontFamily.semiBold
    },
    googleview: {
        flexDirection: "row",
        alignSelf: "center",
        marginTop: 10
    }
});

export default styles;
