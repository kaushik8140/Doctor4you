import React, { useState, useRef, useEffect } from 'react';
import {
    ScrollView, SafeAreaView, View, Text, TouchableOpacity
} from 'react-native';
import styles from './style';
import HeaderDy from '../../common/Components/HeaderDy';
import { Formik, ErrorMessage } from 'formik';
import { helpValues } from '../../utils/formixInitials';
import { HelpSchema } from '../../utils/validationSchema';
import TextInputHelp from './Components/TextInputHelp';
import ErrorTextDY from '../../common/Components/ErrorTextDY';
import ButtonDy from '../../common/Components/ButtonDy';


const Help = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.safeContainer}>
            {/* header Ip */}
            <HeaderDy isBack istitle Headertitle={"Help"} />

            <ScrollView contentContainerStyle={styles.bodyContainer}>

                <Formik
                    initialValues={helpValues}
                    validationSchema={HelpSchema}
                // onSubmit={__SubmitTicketPress}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <>

                           
                                <TextInputHelp
                                    onChangeText={handleChange('message')}
                                    onBlur={handleBlur('message')}
                                    value={values.message}
                                    placeholder={'Type your message'}
                                    returnKeyType={"next"}
                                    inputStyle={{
                                        height: 250,
                                        textAlignVertical: 'top'
                                    }}
                                    multiline
                                // onSubmitEditing={() => countryRef.current.focus()}
                                />
                                <ErrorMessage render={msg => <ErrorTextDY title={msg} />} name="message" />
                                <Text style={styles.maintext}>Fill out the form above to send an email and one of our team members will address your question as soon as possible. </Text>
                         

                            {/* Add Address  button */}
                            <ButtonDy
                                title={'Send mail'}
                                style={styles.continueButton}
                                textStyle={styles.buttontext}
                            />

                        </>
                    )}
                </Formik>

            </ScrollView>
        </SafeAreaView>
    )
}

export default Help;
