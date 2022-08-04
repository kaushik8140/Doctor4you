import { StyleSheet } from 'react-native';
import Colors from '../../common/Colors';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: "space-evenly",
        // paddingBottom: 100,
    },

    introImageStyle: {
        width: windowWidth,
        height: windowHeight/1.4,
       
    },
    introTextStyle: {
        fontSize: 25,
        color: Colors.black,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    seperatorLine: {
        height: 4,
        width: 100,
        backgroundColor: Colors.primary,
    },
    introsubtext: {
        fontSize: 16,
        color: Colors.disableGray,
        textAlign: 'center',
        paddingHorizontal: 40,
        justifyContent: "center"
    },
    skiptext: {
        position: "absolute",
        top: 20,
        right: 40,
        borderRadius: 15,
        paddingVertical: 3,
        borderColor: Colors.primary,
        paddingHorizontal: 13,
        borderWidth: 1,
        color: Colors.black02
    }

});

export default styles;