// import { Text, View, Image, Dimensions } from 'react-native'
// import React, { useState, useRef } from 'react'
// // import { useDispatch } from 'react-redux';
// import styles from './style';
// import AppIntroSlider from 'react-native-app-intro-slider';
// import Colors from '../../common/Colors';
// import ButtonDy from '../../common/Components/ButtonDy';
// import { slides } from './Components/slides';
// // import { doneOnboarding } from '../../store/slices/user';


// const Onboarding = ({ navigation }) => {
//     const slider = useRef();
//     const windowWidth = Dimensions.get('window').width;
//     const windowHeight = Dimensions.get('window').height;
//     //   const dispatch = useDispatch();

//     const [currentSlideIndex, setcurrentSlideIndex] = useState(0);

//     // event on slider change
//     const __onSliderChange = (index) => {
//         setcurrentSlideIndex(index);
//     }

//     const onSkip = () => {
//         // dispatch(doneOnboarding());
//     };


//     const _renderNextButton = () => {
//         return (
//             <ButtonDy
//                 onPress={() => slider.current.goToSlide(currentSlideIndex + 1, true)}
//                 title={"Next"}
//             />
//         );
//     };

//     const _renderDoneButton = () => {
//         return (
//             <ButtonDy
//                 onPress={() => onSkip()}
//                 title={"Done"}
//             />
//         );
//     };

//     const RenderItem = ({ item }) => {
//         return (

//             <View style={styles.container}>

//                 {/* {
//                     currentSlideIndex !== 4 &&
//                     <Text style={styles.skiptext} onPress={onSkip}>Skip</Text>
//                 } */}

//                 <Image
//                     style={styles.introImageStyle}
//                     source={item.image}
//                 // resizeMode="contain"
//                 />

//                 <View style={{ width: windowWidth, backgroundColor: Colors.white, flex: 1, borderTopLeftRadius: 30, borderTopRightRadius: 30, marginTop: -20 }}>

//                 </View>

//                 {/* <Text style={styles.introTextStyle}>
//                     {item.text}
//                 </Text>

//                 <View style={styles.seperatorLine} />

//                 <Text style={styles.introsubtext}>
//                     {item.subtext}
//                 </Text> */}

//             </View>
//         );
//     };
//     return (
//         <AppIntroSlider
//             data={slides}
//             renderItem={RenderItem}
//             onSlideChange={__onSliderChange}
//             renderDoneButton={_renderDoneButton}
//             renderNextButton={_renderNextButton}
//             dotStyle={{ backgroundColor: Colors.dotGray }}
//             activeDotStyle={{ backgroundColor: Colors.primary }}
//             bottomButton
//             ref={slider}
//         />
//     );
// };


// export default Onboarding


import { Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import ImageSlider from './Components/ImageSlider'
import TEMP_ITEM_0 from '../../assets/Images/Temp/beautifulyoung.png'
import TEMP_ITEM_1 from '../../assets/Images/Temp/cheerfuldoctor.png'
import TEMP_ITEM_2 from '../../assets/Images/Temp/nursesarewell.png'
import Colors from '../../common/Colors'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Onboarding = () => {
    // const data = [TEMP_ITEM_0, TEMP_ITEM_1, TEMP_ITEM_2]
    const data = [
        {
            id: 0,
            image: TEMP_ITEM_0,
            title: "Thousands of doctors",
            description: "Access thousands of Doctors instantly.You can easily contact with the doctors and contact for your needs."
        },
        {
            id: 1,
            image: TEMP_ITEM_1,
            title: "Live talk with doctor",
            description: "Easily connect with doctor and start video chat for your better treatment & Prescription."
        },
        {
            id: 2,
            image: TEMP_ITEM_2,
            title: "Chat with doctors",
            description: "Book an appointment with doctor. Chat with doctor via appointment letter.Get consultent."
        }
    ]

    return (
        <View>
            <ImageSlider
                data={data}
            // onImagePress={(index) => setselectedImage(index)}
            />
            <View style={{ height: windowHeight, width: windowWidth, backgroundColor: Colors.subgray, borderTopLeftRadius: 30, borderTopRightRadius: 30, top: -20 }}>

            </View>

        </View>
    )
}

export default Onboarding

