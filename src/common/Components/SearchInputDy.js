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

import Searchdy from '../../assets/Images/SVG/Searchdy';
import Colors from '../Colors';
import FontFamily from '../FontFamily';


const SearchInputDy = (
    { settextSearch, textSearch, onSubmitEditing, placeholdertext, style },
    ref,
) => {
    const navigation = useNavigation();
    return (
        <View style={[styles.searchInputContainer, { ...style }]}>

            <TextInput
                ref={ref}
                style={styles.textInput}
                onChangeText={settextSearch}
                value={textSearch}
                placeholder={placeholdertext}
                placeholderTextColor={Colors.gray}
                onSubmitEditing={onSubmitEditing}
            />
            <Searchdy />
        </View>
    );
};

export default memo(forwardRef(SearchInputDy));

const styles = StyleSheet.create({
    searchInputContainer: {
        borderRadius: 16,
        borderWidth: 0.5,
        borderColor: "#C6E4E4",
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 20,
        paddingHorizontal: 10,
        paddingVertical: Platform.OS === 'ios' ? 16 : 4,
    },
    textInput: {
        flex: 1,
        color: Colors.black,
        fontFamily: FontFamily.primary,
        fontSize: 16,
        paddingLeft: 10,
    },
});
