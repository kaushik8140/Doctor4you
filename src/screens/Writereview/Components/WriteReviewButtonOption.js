import React from 'react';
import { StyleSheet, View } from 'react-native';
import WriteReviewButton from './WriteReviewButton';


const WriteReviewButtonOption = ({ accountType, setaccountType }) => {
    return (
        <View style={styles.container}>
            <WriteReviewButton
                isActive={accountType === 2}
                onPress={() => setaccountType(2)}
              
                title={"Yes"}
            />

            {/* space */}
            <View width={15} />

            <WriteReviewButton
                isActive={accountType === 1}
                onPress={() => setaccountType(1)}
              
                title={"No"}
            />
        </View>
    )
}

export default WriteReviewButtonOption

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
});
