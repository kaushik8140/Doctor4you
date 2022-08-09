import React, { useState, useRef, useEffect } from 'react';
import {
    ScrollView, SafeAreaView, View, Text, TouchableOpacity
} from 'react-native';
import styles from './style';
import FontFamily from '../../common/FontFamily';
import Colors from '../../common/Colors';
import TabTopDoctorsList from '../TopDoctors/Components/TabTopDoctorsList';
import HeaderDy from '../../common/Components/HeaderDy';
import Mahmud from '../../assets/Images/SVG/Mahmud';
import Cooper from '../../assets/Images/SVG/Cooper';
import Bradford from '../../assets/Images/SVG/Bradford';
import Tierra from '../../assets/Images/SVG/Tierra';
import Ashley from '../../assets/Images/SVG/Ashley';
import Wentworth from '../../assets/Images/SVG/Wentworth';
import SearchInputDy from '../../common/Components/SearchInputDy';

const Search = ({ navigation }) => {

    const searchTextRef = useRef(null);
    const [textSearch, settextSearch] = useState('');

    const Specialist = [
        {
            icon: <Mahmud />,
            name: "Dr. Mahmud Nik Hasan",
            number: "Therapist - Surat Medical City Medical \n College Hospital",
            rating: "⭐️ 4.9 ( 37 Reviews)"
        },
        {
            icon: <Cooper />,
            name: 'Dr. Jane Cooper',
            number: "Heart Sergon - Surat Medical College \n Hospital",
            rating: "⭐️ 4.8 ( 25 Reviews)"
        },
        {
            icon: <Bradford />,
            name: 'Dr. Brycen Bradford',
            number: "Therapist - Surat Medical City Medical \n College Hospital",
            rating: "⭐️ 4.9 ( 42 Reviews)"
        },
        {
            icon: <Tierra />,
            name: 'Dr. Tierra Riley',
            number: "Heart Sergon - Akij Medical \n Hospital, Surat",
            rating: "⭐️ 4.6 ( 31 Reviews)"
        },
        {
            icon: <Ashley />,
            name: 'Dr. Ashley Wentworth',
            number: "Heart Sergon - Surat Medical College \n Hospital",
            rating: "⭐️ 4.5 ( 12 Reviews)"
        },
        {
            icon: <Wentworth />,
            name: 'Dr. Ashley Wentworth',
            number: "Heart Sergon - Surat Medical College \n Hospital",
            rating: "⭐️ 4.5 ( 12 Reviews)"
        },
    ];

    return (
        <SafeAreaView style={styles.container}>

            <ScrollView style={styles.bodyContainer}>
                {/* search field */}
                <SearchInputDy
                    ref={searchTextRef}
                    textSearch={textSearch}
                    settextSearch={settextSearch}
                    placeholdertext={'Search doctor, catagories, topic . . .'}
                    style={styles.searchview}
                />
                <Text style={styles.title}>{"View Favourite Doctors"}</Text>
                {/* Topdoctorlist */}
                <TabTopDoctorsList key={'SpeedMeter'} data={Specialist} />

            </ScrollView>
        </SafeAreaView>
    )
}

export default Search;
