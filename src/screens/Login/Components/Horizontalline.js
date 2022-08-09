import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../../common/Colors';
import FontFamily from '../../../common/FontFamily';

const Horizontalline = () => {
    return <View style={styles.seperatorLine}>
        <View style={styles.subline} />
        <View>
            <Text style={styles.ortext}>Or</Text>
        </View>
        <View style={styles.subline} />
    </View>;
};

export default memo(Horizontalline);

const styles = StyleSheet.create({
    seperatorLine: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    ortext: {
        width: 50,
        textAlign: 'center',
        color: Colors.black,
        fontFamily: FontFamily.roman,
        fontSize: 12
    },
    subline: {
        flex: 1,
        height: 1,
        backgroundColor: Colors.orgray
    }
});
