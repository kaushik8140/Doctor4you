import { StyleSheet } from 'react-native';
import FontFamily from '../../common/FontFamily';
import Colors from '../../common/Colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundGray,
    },
    continueButton: {
        width: "66%",
        backgroundColor: Colors.gray1,
        borderRadius: 20,
        borderColor: Colors.gray,
        height: 66
    },
    buttontext: {
        fontFamily: FontFamily.bold,
        fontSize: 16,
        paddingTop: 6
    },
    topview: {
        width: "100%",
        height: 373
    },
    subview: {
        backgroundColor: Colors.backgroundGray,
        flex: 1,
        marginTop: -25,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    scrollcontainer: {
        paddingLeft: 24,
        marginBottom: "30%",
        marginTop: -30
    },
    bottomview: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: 104,
        backgroundColor: Colors.white,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",

    },
    headericon: {
        position: "absolute",
        top: 30,
        left: 24
    },
    verticleLine: {
        height: '50%',
        width: 1,
        backgroundColor: Colors.gray,
    },
    experiencetext: {
        backgroundColor: Colors.white,
        height: 82,
        top: -40,
        marginHorizontal: 20,
        borderRadius: 41,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },
    yeartext: {
        color: Colors.gray,
        fontSize: 20,
        fontFamily: FontFamily.semiBold
    },
    patitenttext: {
        color: Colors.gray,
        fontSize: 14,
        fontFamily: FontFamily.primary
    },
    columnview: {
        flexDirection: "column"
    },
    CooperText: {
        color: Colors.gray,
        fontFamily: FontFamily.bold,
        fontSize: 20,
    },
    hospitaltext: {
        color: Colors.gray,
        fontFamily: FontFamily.semiBold,
        fontSize: 14,
        paddingTop: 5
    },
    reviewtext: {
        color: Colors.gray,
        fontFamily: FontFamily.light,
        fontSize: 12,
        paddingTop: 5
    },
    abouttext: {
        color: Colors.gray,
        fontFamily: FontFamily.semiBold,
        fontSize: 16,
        paddingVertical: 10
    },
    mosttext: {
        color: Colors.gray,
        fontFamily: FontFamily.light,
        fontSize: 14,
        justifyContent: "center"
    },
    Workingtext: {
        color: Colors.gray,
        fontFamily: FontFamily.semiBold,
        fontSize: 16,
        paddingVertical: 8
    },
    timetext: {
        color: Colors.gray,
        fontFamily: FontFamily.primary,
        fontSize: 14,
    }
});

export default styles;
