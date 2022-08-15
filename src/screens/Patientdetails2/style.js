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
        marginTop: 100,

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
        textAlign: "center"
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
});

export default styles;
