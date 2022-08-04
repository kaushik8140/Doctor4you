import React, { memo } from 'react';
import { StyleSheet, Text } from 'react-native';

import Colors from '../Colors';
import FontFamily from '../FontFamily';

const ErrorTextDY = ({ title }) => {
    return <Text style={styles.text}>{title || ''}</Text>;
};

export default memo(ErrorTextDY);

const styles = StyleSheet.create({
    text: {
        color: Colors.red,
        // fontFamily: FontFamily.primary,
        // marginHorizontal: 30,
        marginTop: 5
    },
});
