import { StyleSheet } from 'react-native';
import FontFamily from '../../common/FontFamily';
import Colors from '../../common/Colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundGray,
    },
    bodyContainer: {
        marginTop: 20
    },
    maintext: {
        color: Colors.bordergray,
        alignSelf: "center",
        paddingTop: 100,
        fontSize: 16,
        fontFamily: FontFamily.bold
    },
    subview: {
        alignSelf: "center",
        marginTop: 50
    },
    nametext: {
        color: Colors.gray,
        alignSelf: "center",
        paddingTop: 20,
        fontSize: 24,
        fontFamily: FontFamily.bold
    },
    continueButton: {
        bottom: 10,
        marginTop: 50,
        width: "80%"
    },
    buttontext: {
        fontFamily: FontFamily.bold,
        fontSize: 16,
    },
    dashboardbutton: {
        bottom: 10,
        marginTop: 20,
        width: "80%",
        backgroundColor: Colors.white,
        borderColor: Colors.white
    },
    dashboardtext: {
        fontFamily: FontFamily.bold,
        color: Colors.primary,
        fontSize: 16,
    }
});

export default styles;
