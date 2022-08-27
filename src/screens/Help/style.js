import { StyleSheet } from 'react-native';
import FontFamily from '../../common/FontFamily';
import Colors from '../../common/Colors';

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: Colors.backgroundGray,
    },
    bodyContainer: {
        paddingHorizontal: '3%',
        flexGrow: 1
    },
    continueButton: {
        position: 'absolute',
        bottom: 10,
        backgroundColor:Colors.bordergray,
        
    },
    buttontext: {
        fontFamily: FontFamily.bold,
        fontSize: 16,
    },
    maintext: {
        paddingTop: 10,
        fontFamily: FontFamily.primary,
        fontSize: 16,
        color: Colors.gray
    }
});

export default styles;
