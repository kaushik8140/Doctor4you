import React, { useState } from 'react';
import { SafeAreaView, Text, ScrollView } from 'react-native';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import styles from './style';
import HeaderDy from '../../common/Components/HeaderDy';
import ButtonDy from '../../common/Components/ButtonDy';

const OTPScreen = ({ navigation }) => {
    const CELL_COUNT = 4;
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    return (
        <SafeAreaView style={styles.safeContainer}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {/* header Ip */}
                <HeaderDy isBack istitle />

                {/* verify text */}
                <Text style={styles.verifytext}>{'OTP'}</Text>

                {/* send code textview */}
                <Text style={styles.subtextgray}>{'Put the OTP number below sent to your number+254 5684 586 942'}</Text>

                {/* otp code text field */}
                <CodeField
                    ref={ref}
                    {...props}
                    value={value}
                    onChangeText={setValue}
                    cellCount={CELL_COUNT}
                    rootStyle={styles.codeFieldRoot}
                    keyboardType="number-pad"
                    textContentType="oneTimeCode"
                    renderCell={({ index, symbol, isFocused }) => (
                        <Text
                            key={index}
                            style={[styles.cell, isFocused && styles.focusCell]}
                            onLayout={getCellOnLayoutHandler(index)}>
                            {symbol || (isFocused ? <Cursor /> : null)}
                        </Text>
                    )}
                />

                {/* Resend Code Text */}
                <Text style={styles.bottomtext}>
                    {'Code send in 0:29'}
                    {`  `}
                    <Text style={styles.mobiletext}>{'Resend code'}</Text>
                </Text>

                {/* Verify button */}
                <ButtonDy
                    onPress={() => navigation.navigate('NewPassword')}
                    title={'Change Password'}
                    style={styles.button}
                    textStyle={styles.buttontext}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

export default OTPScreen;