import React, { useState, useRef, useEffect } from 'react';
import {
    ScrollView, SafeAreaView, View, Text, TouchableOpacity, Image
} from 'react-native';
import styles from './style';
import FontFamily from '../../common/FontFamily';
import Colors from '../../common/Colors';
import HeaderDy from '../../common/Components/HeaderDy';
import ReviewJone from '../../assets/Images/Temp/reviewicon.png'
import Starrating from '../../assets/Images/SVG/Starrating';
import Withoutrating from '../../assets/Images/SVG/Withoutrating';
import TextInputHelp from '../Help/Components/TextInputHelp';
import { ErrorMessage, Formik } from 'formik';
import ErrorTextDY from '../../common/Components/ErrorTextDY';
import ButtonDy from '../../common/Components/ButtonDy';
import { ReviewSchema } from '../../utils/validationSchema';
import { ReviewValues } from '../../utils/formixInitials';
import WriteReviewButtonOption from './Components/WriteReviewButtonOption';
import ReviewModal from './Components/ReviewModal';

const Writereview = ({ navigation }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };
    const [accountType, setaccountType] = useState(1);
    return (
        <SafeAreaView style={styles.container}>
            {/* header Ip */}
            <HeaderDy isBack istitle Headertitle={"Write a review"} />

            <ScrollView style={styles.bodyContainer}>
                <Image
                    source={ReviewJone}
                    style={styles.Imageicon}
                    resizeMode="cover"
                />
                <Text style={styles.drtext}>How was your experience
                    with Dr. Jane Cooper ?</Text>
                <View style={styles.starview}>
                    <Starrating />
                    <View width={10} />
                    <Starrating />
                    <View width={10} />
                    <Starrating />
                    <View width={10} />
                    <Starrating />
                    <View width={10} />
                    <Withoutrating />
                </View>
                <View style={styles.textinputview}>
                    <Text style={styles.commenttext}>Write a comment</Text>
                    <Text style={styles.wordtext}>Max 450 Words</Text>
                </View>
                <Formik
                    initialValues={ReviewValues}
                    validationSchema={ReviewSchema}
                // onSubmit={__SubmitTicketPress}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <>

                            <View height={10} />
                            <TextInputHelp
                                onChangeText={handleChange('message')}
                                onBlur={handleBlur('message')}
                                value={values.message}
                                placeholder={'Tell People about your experience'}
                                returnKeyType={"next"}
                                inputStyle={{
                                    height: 140,
                                    textAlignVertical: 'top',
                                }}
                                multiline
                            />
                            <ErrorMessage render={msg => <ErrorTextDY title={msg} />} name="message" />
                            <View height={20} />

                            <Text style={styles.textlike}>Would you recommend Dr. Jane Cooper to your freiends?</Text>

                            <View height={20} />

                            <WriteReviewButtonOption
                                accountType={accountType}
                                setaccountType={setaccountType}
                            />
                            <ButtonDy
                                onPress={toggleModal}
                                title={'Submit review'}
                                style={styles.continueButton}
                                textStyle={styles.buttontext}
                            />

                        </>
                    )}
                </Formik>
                <ReviewModal iscustomModalVisible={isModalVisible} modaltoggle={toggleModal} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Writereview;
