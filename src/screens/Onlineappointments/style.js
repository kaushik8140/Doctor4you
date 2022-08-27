import { StyleSheet } from 'react-native';
import FontFamily from '../../common/FontFamily';
import Colors from '../../common/Colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundGray,
    },
    bodyContainer: {
        marginTop: 20,
        marginHorizontal: 10
    },
    continueButton: {
        marginTop: 50,
        bottom: 10,
    },
    buttontext: {
        fontFamily: FontFamily.bold,
        fontSize: 16,
    },
    title: {
        fontFamily: FontFamily.bold,
        color: Colors.gray,
        fontSize: 24,
    },
    range: {
        fontFamily: FontFamily.semiBold,
        color: Colors.bordergray,
        fontSize: 16,
        paddingTop: 5,
        width:48

    },
    maincontainer: {
        marginVertical: 8,
        paddingHorizontal: 10,
        flexDirection: "row",
    },
    seperatorLine: {
        borderBottomColor: Colors.listgray,
        paddingTop: 24,
        borderBottomWidth: 1,
    },
    rileayText: {
        flex: 1,
        paddingLeft: 10,
        alignSelf: "center"
    },
    iconstyle: {
        alignSelf: "center"
    },
    fourview: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginTop: 24
    },
    morningText: {
        fontFamily: FontFamily.semiBold,
        color: Colors.primary,
        fontSize: 16,
        paddingTop: 5,
    },
    visittext: {
        fontFamily: FontFamily.bold,
        color: Colors.gray,
        fontSize: 18,
    },
    patientInfo: {
        fontFamily: FontFamily.semiBold,
        color: Colors.gray,
        fontSize: 16,
        alignSelf: "center",
        paddingTop: 5
    },
    rowtext: {
        flexDirection: "row"
    },
    topdoctext:{
        fontFamily: FontFamily.semiBold,
        color: Colors.bordergray,
        fontSize: 16,
        paddingTop: 5,
    }

});

export default styles;
