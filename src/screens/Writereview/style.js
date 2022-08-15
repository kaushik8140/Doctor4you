import { StyleSheet } from 'react-native';
import FontFamily from '../../common/FontFamily';
import Colors from '../../common/Colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundGray,
    },
    bodyContainer: {
        marginTop: 30,
        marginHorizontal: 10
    },
    Imageicon: {
        alignSelf: "center"
    },
    textlike: {
        fontSize: 18,
        color: Colors.gray,
        fontFamily: FontFamily.semiBold
    },
    continueButton: {
        marginTop: 50,
        bottom: 10,
    },
    buttontext: {
        fontFamily: FontFamily.bold,
        fontSize: 16,
    },
    drtext: {
        alignSelf: "center",
        color: Colors.gray,
        marginTop: 30,
        fontSize: 24,
        textAlign: "center",
        paddingHorizontal: 20,
        fontFamily: FontFamily.semiBold
    },
    starview: {
        flexDirection: "row",
        alignSelf: "center",
        marginTop: 30
    },
    textinputview: {
        flexDirection: "row",
        marginHorizontal: 10,
        marginTop: 40
    },
    commenttext: {
        flex: 1,
        color: Colors.gray,
        fontSize: 16,
        fontFamily: FontFamily.bold
    },
    wordtext: {
        color: Colors.bordergray,
        fontSize: 16,
        fontFamily: FontFamily.semiBold,
    }
});

export default styles;
