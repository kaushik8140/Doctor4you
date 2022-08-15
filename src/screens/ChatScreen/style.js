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
    rightview: {
        backgroundColor: Colors.bordergray,
        justifyContent: "flex-end",
        alignSelf: "flex-end",
        paddingHorizontal: 18,
        paddingVertical: 12,
        width: 250,
        borderBottomLeftRadius: 15,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        marginRight: 10
    },
    leftview: {
        backgroundColor: Colors.primary,
        justifyContent: "flex-start",
        alignSelf: "flex-start",
        paddingHorizontal: 18,
        paddingVertical: 12,
        width: 250,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderTopRightRadius: 15
    },
    timetext: {
        color: Colors.bordergray,
        justifyContent: "flex-end",
        alignSelf: "flex-end",
        paddingTop: 10
    },
    rowview: {
        flexDirection: "row"
    },
    typetext: {
        color: Colors.bordergray,
        alignSelf: "center"
    },
    Medamjoneview: {
        flexDirection: "row",
        marginBottom: 20
    }
});

export default styles;
