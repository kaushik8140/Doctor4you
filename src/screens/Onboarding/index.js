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
    const data = [
        {
            id: 0,
            image: TEMP_ITEM_0,
            title: "Thousands of doctors",
            description: "Access thousands of Doctors instantly.\nYou can easily contact with the doctors\n and contact for your needs."
        },
        {
            id: 1,
            image: TEMP_ITEM_1,
            title: "Live talk with doctor",
            description: "Easily connect with doctor and start\n video chat for your better treatment &\n  Prescription."
        },
        {
            id: 2,
            image: TEMP_ITEM_2,
            title: "Chat with doctors",
            description: "Book an appointment with doctor.\n Chat with doctor via appointment \nletter.Get consultent."
        }
    ]

    return (
        <View style={{ flex: 1 }}>
            <ImageSlider
                data={data}
            />
        </View>
    )
}

export default Onboarding






// import { Text, View, Image, Dimensions } from 'react-native'
// import React from 'react'
// import ImageSlider from './Components/ImageSlider'
// import TEMP_ITEM_0 from '../../assets/Images/Temp/beautifulyoung.png'
// import TEMP_ITEM_1 from '../../assets/Images/Temp/cheerfuldoctor.png'
// import TEMP_ITEM_2 from '../../assets/Images/Temp/nursesarewell.png'
// import Colors from '../../common/Colors'

// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;
// const Onboarding = () => {
//     // const data = [TEMP_ITEM_0, TEMP_ITEM_1, TEMP_ITEM_2]
//     const data = [
//         {
//             id: 0,
//             image: TEMP_ITEM_0,
//             title: "Thousands of doctors",
//             description: "Access thousands of Doctors instantly.You can easily contact with the doctors and contact for your needs."
//         },
//         {
//             id: 1,
//             image: TEMP_ITEM_1,
//             title: "Live talk with doctor",
//             description: "Easily connect with doctor and start video chat for your better treatment & Prescription."
//         },
//         {
//             id: 2,
//             image: TEMP_ITEM_2,
//             title: "Chat with doctors",
//             description: "Book an appointment with doctor. Chat with doctor via appointment letter.Get consultent."
//         }
//     ]

//     return (
//         <View style={{}}>
//             <ImageSlider
//                 data={data}
//             // onImagePress={(index) => setselectedImage(index)}
//             />
//             <View style={{ height: windowHeight,zIndex:1, width: windowWidth, backgroundColor: Colors.red, borderTopLeftRadius: 30, borderTopRightRadius: 30, top: -20 }}>

//             </View>

//         </View>
//     )
// }

// export default Onboarding