import React, { memo, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, LayoutAnimation, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../../common/Colors';
import FontFamily from '../../../common/FontFamily';
import { RightArrow } from '../../../assets/Images/SVG/ProfileIcon';
import Downarrow from '../../../assets/Images/SVG/Downarrow';


const FaqsListItem = ({ item, index, style }) => {
    const navigation = useNavigation();
    const [isCollapsed, setisCollapsed] = useState(true);

    const __onTouchPress = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
        setisCollapsed(!isCollapsed);
    };

    return (
        <>
            <View style={[styles.container, { ...style }]}>
                <Text style={styles.title}>{item.descriptin}</Text>

                <TouchableOpacity
                    // style={{ alignSelf: 'center' }}
                    onPress={__onTouchPress}>
                    {isCollapsed ? <RightArrow /> : <Downarrow />}
                </TouchableOpacity>
            </View>

            {/* collaped view */}
            {!isCollapsed && (
                <View style={styles.collapsedView}>
                    <Text style={styles.colpantext}>All members of your Pro Membership healthcare plan will have access to their own team of doctros on the DoctotPoint app across 20 Specialisties. You will be able to comunicate with the doctor through messaging, voice and video call. Each consultation will be free of cost, and will be completely private.</Text>
                    <View style={styles.seperatorLine} />
                </View>

            )}
        </>

    );
};

export default memo(FaqsListItem);

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 10,
        marginTop: 15
    },
    title: {
        fontSize: 16,
        fontFamily: FontFamily.primary,
        color: Colors.gray,
        flex: 1,
        paddingRight: 10
    },
    collapsedView: {

    },
    seperatorLine: {
        flex: 1,
        height: 0.6,
        backgroundColor: Colors.bordergray,
        marginTop: 20,
        marginHorizontal: 10
    },
    colpantext: {
        color: Colors.bordergray,
        fontSize: 14,
        textAlign: "center"
    }
});
