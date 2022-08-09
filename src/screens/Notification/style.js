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
    },
    title: {
        fontFamily: FontFamily.semiBold,
        fontSize: 12,
        color: Colors.gray,
        paddingLeft: 20,
        paddingTop: 5
    },
    pasttext: {
        fontFamily: FontFamily.roman,
        fontSize: 16,
        color: Colors.gray,
        textAlign: "center",
        paddingTop: 50
    }
});

export default styles;
