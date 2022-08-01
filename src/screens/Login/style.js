import { StyleSheet } from 'react-native';
import Colors from '../../common/Colors';
import FontFamily from '../../common/FontFamily';

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    textstyle: {
        color: Colors.red,
        fontFamily: FontFamily.bold,
        fontSize: 20,
        alignSelf: "center",
    }
});

export default styles;
