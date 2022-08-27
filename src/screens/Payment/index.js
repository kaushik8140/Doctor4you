import React, { useState, useRef, useEffect } from 'react';
import {
    ScrollView, SafeAreaView, View, Text, TouchableOpacity, Image
} from 'react-native';
import styles from './style';
import HeaderDy from '../../common/Components/HeaderDy';
import ButtonDy from '../../common/Components/ButtonDy';
import bank_card from '../../assets/Images/Temp/bank_card.png'
import TextField from '../../common/Components/TextField';
import { ErrorMessage, Formik } from 'formik';
import ErrorTextDY from '../../common/Components/ErrorTextDY';
import { CarddetailsSchema } from '../../utils/validationSchema';
import { CarddetailsValues } from '../../utils/formixInitials';
import USERNAME_ICON from '../../assets/Images/Temp/username.png';
import CARD_ICON from '../../assets/Images/Temp/card_icon.png';
import PaymentModal from './Components/PaymentModal';

const Payment = ({ navigation }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };
    return (
        <SafeAreaView style={styles.safeContainer}>
            {/* header Ip */}
            <HeaderDy isBack istitle Headertitle={"Payment"} iconstylestyles={{ paddingLeft: 10 }} />

            <ScrollView contentContainerStyle={styles.bodyContainer}>
                <Image
                    source={bank_card}
                    style={styles.image}
                    resizeMode='contain'
                />
                <Text style={styles.title}>{"By adding debit / credit card, you agree to the"}</Text>
                <Text style={styles.termstext}>{"Terms & Condition "}</Text>


                <Formik
                    initialValues={CarddetailsValues}
                    validationSchema={CarddetailsSchema}
                // onSubmit={__onLoginPress}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <>

                            <View height={50} />

                            <TextField
                                onChangeText={handleChange('name')}
                                onBlur={handleBlur('name')}
                                value={values.name}
                                placeholder={'Name'}
                                mainplaceholder={"Enter card holder full name"}
                                autoCapitalize="none"
                                iconPath={USERNAME_ICON}
                                returnKeyType={"next"}
                                onSubmitEditing={() => passwordRef.current.focus()}
                            />

                            <ErrorMessage
                                render={msg => <ErrorTextDY title={msg} />}
                                name="name"
                            />
                            <View height={20} />
                            {/* password validation parts */}


                            <TextField
                                onChangeText={handleChange('cardnumber')}
                                onBlur={handleBlur('cardnumber')}
                                value={values.cardnumber}
                                placeholder={'Card number'}
                                // keyboardType={"email-address"}
                                mainplaceholder={"Enter card number"}
                                autoCapitalize="none"
                                iconPath={CARD_ICON}
                                returnKeyType={"next"}
                                onSubmitEditing={() => passwordRef.current.focus()}
                            />

                            <ErrorMessage
                                render={msg => <ErrorTextDY title={msg} />}
                                name="name"
                            />
                            <View height={30} />

                            <View style={{ flexDirection: "row" }}>
                                <TextField
                                    onChangeText={handleChange('expiredate')}
                                    onBlur={handleBlur('expiredate')}
                                    value={values.expiredate}
                                    placeholder={'Expire date'}
                                    mainplaceholder={"DD - MM - YYYY"}
                                    autoCapitalize="none"
                                    iconPath={CARD_ICON}
                                    returnKeyType={"next"}
                                    style={{ width: "50%" }}
                                    onSubmitEditing={() => passwordRef.current.focus()}
                                />

                                {/* <ErrorMessage
                                    render={msg => <ErrorTextDY title={msg} />}
                                    name="name"
                                /> */}
                                <View width={10} />
                                <TextField
                                    onChangeText={handleChange('cvv')}
                                    onBlur={handleBlur('cvv')}
                                    value={values.cvv}
                                    placeholder={'CVV'}
                                    // keyboardType={"email-address"}
                                    mainplaceholder={"Enter CVV number"}
                                    autoCapitalize="none"
                                    iconPath={CARD_ICON}
                                    returnKeyType={"next"}
                                    onSubmitEditing={() => passwordRef.current.focus()}
                                />

                                {/* <ErrorMessage
                                    render={msg => <ErrorTextDY title={msg} />}
                                    name="name"
                                /> */}
                            </View>



                            <ButtonDy
                                onPress={toggleModal}
                                title={'Continue'}
                                style={styles.continueButton}
                                textStyle={styles.buttontext}
                            />
                        </>
                    )}
                </Formik>

                <PaymentModal iscustomModalVisible={isModalVisible} modaltoggle={toggleModal} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Payment;
