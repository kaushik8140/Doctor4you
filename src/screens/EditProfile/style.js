import { StyleSheet } from 'react-native';
import FontFamily from '../../common/FontFamily';
import Colors from '../../common/Colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundGray,
        
    },
    scrollContainer: {
        paddingHorizontal: '3%',
        flexGrow: 1,
    },
    continueButton: {
       marginTop:70,
        bottom: 10,
    },
    buttontext: {
        fontFamily: FontFamily.bold,
        fontSize: 16,
    },
    iconview: {
        position: "absolute",
        right: -15,
        alignSelf: "center",
    }

});

export default styles;
