import { StyleSheet, Dimensions } from 'react-native';
import FontFamily from '../../common/FontFamily';
import Colors from '../../common/Colors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundGray,
    },
    image: {
        width: '100%',
        height: "100%",
    },
    shapeImage: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: 361
    },
    mainview: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: 110,
        flexDirection: "row",
        alignItems: "center",
    },
    bottomshape: {
        position: "absolute",
        bottom: 0,
        width: "100%",
    },
    subview: {
        flexDirection: "row",
        justifyContent: "space-around",
        flex: 1
    },
    phonefillview: {
        position: "absolute",
        bottom: windowHeight / 11,
        alignSelf: "center",
        flex: 1
    },
    bottomtouchview: {
        position: "absolute",
        bottom: windowHeight / 5,
        flex: 1
    },
    janetext: {
        color: Colors.white,
        fontSize: 30,
        fontFamily: FontFamily.bold,
        paddingLeft: 20
    },
    subjaintext: {
        color: Colors.white,
        fontSize: 20,
        fontFamily: FontFamily.semiBold,
        paddingLeft: 20
    }
});

export default styles;
