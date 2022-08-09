import { StyleSheet } from 'react-native';
import FontFamily from '../../common/FontFamily';
import Colors from '../../common/Colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundGray,
    },
    scrollContainer: {
        // paddingHorizontal: '3%',
        flexGrow: 1
    },
    title: {
        fontFamily: FontFamily.bold,
        fontSize: 18,
        color: Colors.gray,
        paddingLeft: 20
    },
    button: {
        marginTop: 10,
        width: '90%',
    },
    linearview: {
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        height: 152
    },
    topview: {
        flexDirection: "row",
        // paddingTop: 40,
        paddingLeft: 12,
        marginHorizontal: 24,
        height: 94,
        backgroundColor: Colors.white,
        borderWidth: 1,
        alignItems: "center",
        borderRadius: 20,
        borderColor: Colors.white,
        marginTop: -55
    },
    subview: {
        flexDirection: "column",
        paddingLeft: 20,
        flex: 1,
    },
    toptext: {
        fontSize: 24,
        fontFamily: FontFamily.primary,
        top: 40,
        color: Colors.white,
        alignSelf: "center"
    },
    subtext: {
        fontSize: 24,
        fontFamily: FontFamily.bold,
        color: Colors.primary
    },
    touchview: {
        paddingRight: 28,
        alignSelf: "center"
    },
    searchview: {
        backgroundColor: Colors.offwhite,
        marginHorizontal: 10,
        marginVertical: 10,
        marginTop: -32,
    },
    jontext: {
        fontSize: 16,
        fontFamily: FontFamily.primary,
        // top: 40,
        color: Colors.primary,
        // alignSelf: "center"  
    },
    continueButton: {
        marginTop: 50,
        marginBottom: 20,
        width: "90%",
        backgroundColor:'rgba(242, 29, 82, 0.1)',
        borderRadius:10,
        borderColor:Colors.red
        // borderColor:
        // position: 'absolute',
        // bottom: 10,
    },
    buttontext: {
        fontFamily: FontFamily.semiBold,
        fontSize: 16,
        color:Colors.red
    },
});

export default styles;
