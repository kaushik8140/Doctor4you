import { StyleSheet } from 'react-native';
import FontFamily from '../../common/FontFamily';
import Colors from '../../common/Colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundGray,
    },
    bodyContainer: {

    },
    title: {
        fontFamily: FontFamily.bold,
        fontSize: 18,
        color: Colors.gray,
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
});

export default styles;
