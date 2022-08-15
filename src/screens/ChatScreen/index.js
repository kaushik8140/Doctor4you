import React, { useState, useRef, useEffect } from 'react';
import {
    ScrollView, SafeAreaView, View, Text, TouchableOpacity
} from 'react-native';
import styles from './style';
import FontFamily from '../../common/FontFamily';
import Colors from '../../common/Colors';
import HeaderDy from '../../common/Components/HeaderDy';
import Medamjone from '../../assets/Images/SVG/Medamjone';
import Medicalreport from '../../assets/Images/SVG/Medicalreport';
import Chataudio from '../../assets/Images/SVG/Chataudio';
import Typesomething from './Components/Typesomething';

const ChatScreen = ({ navigation }) => {
    const searchTextRef = useRef(null);
    const [textSearch, settextSearch] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            {/* header Ip */}
            <HeaderDy isBack ischaticon istitle Headertitle={"Dr. Jane Cooper"} />

            <ScrollView style={styles.bodyContainer}>

                <View style={styles.rightview}>
                    <Text>Hi Doctor, I am a cardio patient. I need your help imidiately.</Text>
                </View>
                <View height={30} />
                <View style={styles.rowview}>
                    <Medamjone />
                    <View width={10} />
                    <View>
                        <Text style={styles.leftview}>Hi, dont worry I am here. Let me know your situation now.</Text>
                        <Text style={styles.timetext}>Jan 23, 20:34</Text>
                    </View>
                </View>
                <View height={30} />
                <View style={{ alignSelf: "flex-end" }}>
                    <Medicalreport />
                </View>
                <View height={30} />
                <View style={styles.rowview}>
                    <Medamjone />
                    <View width={10} />
                    <View>
                        <Chataudio />
                        <Text style={styles.timetext}>Jan 23, 20:34</Text>
                    </View>
                </View>

                <View height={30} />
                <View style={styles.Medamjoneview}>
                    <Medamjone />
                    <View width={10} />
                    <Text style={styles.typetext}>Dr. Jane is typing . . .</Text>

                </View>

            </ScrollView>
            <Typesomething
                ref={searchTextRef}
                textSearch={textSearch}
                settextSearch={settextSearch}
                placeholdertext={'Type something . . .'}
                style={styles.searchview}
            />
        </SafeAreaView>
    )
}

export default ChatScreen;
