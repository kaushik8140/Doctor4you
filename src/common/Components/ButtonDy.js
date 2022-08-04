import React, { memo } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    ActivityIndicator,
    Text,
} from 'react-native';
import Colors from '../Colors';
import FontFamily from '../FontFamily';

const ButtonDy = ({ title, style, textStyle, onPress, processing, ...props }) => {
    return (
        <TouchableOpacity
            style={[styles.button, { borderColor: Colors.primary }, style]}
            onPress={onPress}>
            {processing ? (
                <ActivityIndicator style={styles.processing} color={Colors.white} />
            ) : (
                <Text style={[styles.title, textStyle]}>{title}</Text>
            )}
        </TouchableOpacity>
    );
};

export default memo(ButtonDy);

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: Colors.primary,
        borderRadius: 10,
        borderWidth: 1,
        padding: 15,
        width: '100%',
        alignSelf: 'center',
    },
    title: {
        color: Colors.white,
    },
    processing: {
        marginVertical: 1,
    },
});
