import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../Colors';

const HorizontalSeperator = () => {
    return <View style={styles.seperatorLine} />;
};

export default memo(HorizontalSeperator);

const styles = StyleSheet.create({
    seperatorLine: {
        borderBottomColor: Colors.subgray,
        // paddingTop: 10,
        marginTop: 10,
        borderBottomWidth: 1,
    },
});
