import React, { memo, forwardRef } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    View,
    Platform,
    TextInput,
    Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontFamily from '../../../common/FontFamily';
import Colors from '../../../common/Colors';
import AttachIcon from '../../../assets/Images/SVG/AttachIcon';
import MutevoiceIcon from '../../../assets/Images/SVG/MutevoiceIcon';


const Typesomething = (
    { settextSearch, textSearch, onSubmitEditing, placeholdertext, style },
    ref,
) => {
    const navigation = useNavigation();
    return (
        <View style={[styles.searchInputContainer, { ...style }]}>
            <AttachIcon />
            <TextInput
                ref={ref}
                style={styles.textInput}
                onChangeText={settextSearch}
                value={textSearch}
                placeholder={placeholdertext}
                placeholderTextColor={Colors.primary}
                onSubmitEditing={onSubmitEditing}
            />
            <MutevoiceIcon />
        </View>
    );
};

export default memo(forwardRef(Typesomething));

const styles = StyleSheet.create({
    searchInputContainer: {
        borderRadius: 16,
        borderWidth: 0.5,
        borderColor: "#E5F5F5",
        backgroundColor: '#E5F5F5',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 10,
        paddingHorizontal: 10,
        paddingVertical: Platform.OS === 'ios' ? 16 : 10,
    },
    textInput: {
        flex: 1,
        color: Colors.black,
        fontFamily: FontFamily.primary,
        fontSize: 16,
        paddingLeft: 10,
    },
});
