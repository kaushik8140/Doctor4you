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
    title: {
        fontFamily: FontFamily.bold,
        fontSize: 18,
        color: Colors.primary,
        paddingLeft: 20
    },
    buttontext: {
        fontFamily: FontFamily.bold,
        fontSize: 16,
    },
    button: {
        marginTop: 10,
        width: '90%',
    },
    linearview: {
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        height: 152
    },
    topview: {
        flexDirection: "row",
        paddingTop: 40,
        paddingLeft: 30
    },
    subview: {
        flexDirection: "column",
        paddingLeft: 20,
        flex: 1
    },
    toptext: {
        fontSize: 20,
        fontFamily: FontFamily.bold,
        color: Colors.primary
    },
    subtext: {
        fontSize: 14,
        fontFamily: FontFamily.light,
        color: Colors.gray
    },
    touchview: {
        paddingRight: 28,
        alignSelf: "center"
    },
    searchview: {
        backgroundColor: Colors.offwhite,
        marginHorizontal: 10,
        marginVertical: 10,

    }
});

export default styles;
