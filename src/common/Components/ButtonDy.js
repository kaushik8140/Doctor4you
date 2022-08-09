import React, { memo } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    ActivityIndicator,
    Text, View
} from 'react-native';
import Colors from '../Colors';
import FontFamily from '../FontFamily';
import { LogOut } from '../../assets/Images/SVG/ProfileIcon';

const ButtonDy = ({ title, style, textStyle, onPress, processing, islogout, ...props }) => {
    return (
        <TouchableOpacity
            style={[styles.button, { borderColor: Colors.primary }, style]}
            onPress={onPress}>
            {processing ? (
                <ActivityIndicator style={styles.processing} color={Colors.white} />
            ) : (
                <View style={{ flexDirection: 'row' }}>
                    {islogout && <LogOut />}

                    <Text style={[styles.title, textStyle]}>{title}</Text>
                </View>

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
