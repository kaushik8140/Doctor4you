import { StyleSheet } from 'react-native';
import FontFamily from '../../common/FontFamily';
import Colors from '../../common/Colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundGray,

    },
    scrollContainer: {
        paddingHorizontal: '4%',
        paddingTop: 40,
        flexGrow: 1,
    },
    continueButton: {

        marginTop: 250,
        bottom: 100
    },
    buttontext: {
        fontFamily: FontFamily.bold,
        fontSize: 16,
    },
    maintext: {
        // paddingTop: 30,
        fontFamily: FontFamily.semiBold,
        fontSize: 16,
        color: Colors.gray,
        alignSelf: "center",
        textAlign: "center",
        lineHeight: 25
    },
    icon: {
        height: 16,
        width: 20,
        marginRight: 10,
    },
    topContainer: {
        flexDirection: 'row',
        alignItems: "center",
    },
    placeholderText: {
        color: Colors.gray,
        fontSize: 16,
        fontFamily: FontFamily.semiBold
    },
    textstyle: {
        color: Colors.primary,
        fontFamily: FontFamily.bold,
        fontSize: 18
    },
    itemstyle: {
        color: Colors.primary,
        fontFamily: FontFamily.light,
        fontSize: 16,
    },
    mainview: {
        marginTop: 50,
        color: Colors.primary,
        alignSelf: "center",
        fontSize: 16,
        fontFamily: FontFamily.semiBold
    },
    borderview: {
        marginTop: 20,
        borderBottomColor: Colors.bordergray,
        borderBottomWidth: 1,
        marginBottom: 50
    }

});

export default styles;
