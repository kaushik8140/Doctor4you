import React, { memo, useState, useRef, useEffect } from 'react';
import {
    StyleSheet, TouchableOpacity, View,
    Image,
    FlatList,
    Text
} from 'react-native';
import PagerView from 'react-native-pager-view';
import Colors from '../../../common/Colors';
import DotsKS from '../../../common/Components/DotsKS';
import { Dimensions } from 'react-native';
import ButtonDy from '../../../common/Components/ButtonDy';
import FontFamily from '../../../common/FontFamily';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const ImageSlider = ({ data = [], onImagePress }) => {
    const [pageDotNumber, setpageDotNumber] = useState(0)
    const [currentSlideIndex, setcurrentSlideIndex] = useState(0);
    const navigation = useNavigation();

    const flatlistDataRef = useRef(null);

    const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

    const onViewRef = React.useRef(({ viewableItems }) => {
        // console.log("visible items :: ", viewableItems);
        if (viewableItems.length === 0) {
            return;
        } else {
            setpageDotNumber(viewableItems[0].index);
        }
    })




    // event on slider change
    const __onSliderChange = (index) => {
        setcurrentSlideIndex(index);
        console.log(index, "data from the index>>>")
    }



    return (
        // <View style={styles.container}>
        //     <PagerView
        //         style={styles.pagerView}
        //         initialPage={0}
        //         onPageSelected={(event) => {
        //             setpageDotNumber(event.nativeEvent.position);
        //         }}
        //     >
        //         {
        //             data.map((image, index) => (
        //                 <>
        //                     <TouchableOpacity
        //                         key={image + index}
        //                         style={styles.imageContainer}
        //                     >
        //                         <Image
        //                             source={image.image}
        //                             style={styles.image}
        //                             resizeMode="contain"
        //                         />
        //                     </TouchableOpacity>
        //                 </>
        //             ))

        //         }
        //     </PagerView>


        //     <View style={{ position: "absolute", height: 300, width: 300, backgroundColor: Colors.white, top: windowHeight / 2.1, borderRadius: 30, zIndex: 1, alignSelf: "center" }}>

        //         <Text style={{ color: Colors.primary, alignSelf: "center", fontFamily: FontFamily.semiBold, fontSize: 24, paddingVertical: 20 }}>Live talk with doctor</Text>

        //         <Text style={{ color: Colors.bordergray, alignSelf: "center", fontFamily: FontFamily.primary, fontSize: 14, textAlign: "center", paddingVertical: 10, paddingBottom: 20 }}>Access thousands of Doctors instantly.{'\n'}You can easily contact with the doctors {'\n'} and contact for your needs.</Text>

        //         <DotsKS
        //             length={data.length}
        //             pageDotNumber={pageDotNumber}
        //         />

        //         <ButtonDy
        //             onPress={() => navigation.navigate('Login')}
        //             title={"Get started"}
        //             style={{ width: "90%", marginTop: 20 }}
        //         />

        //         <Text style={{ color: Colors.listgray, alignSelf: "center", fontFamily: FontFamily.light, fontSize: 15, paddingVertical: 20 }}>Skip for now</Text>

        //     </View>
        // </View>


        <FlatList
            ref={flatlistDataRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onViewableItemsChanged={onViewRef.current}
            viewabilityConfig={viewConfigRef.current}
            // windowSize={3}
            style={{}}
            keyExtractor={(image, index) => image + index}
            data={data}
            renderItem={({ item, index }) => (
                <View
                    style={styles.imageContainer}
                >
                    <Image
                        source={item.image}
                        style={styles.image}
                        resizeMode="cover"
                    />
                    <View style={styles.backgroundbottom}>

                    </View>
                    <View style={styles.bottomview}>
                        <Text style={styles.titlestyle}>{item.title}</Text>

                        <Text style={styles.description}>{item.description}</Text>

                        <DotsKS
                            length={data.length}
                            pageDotNumber={pageDotNumber}
                        />
                        {
                            (
                                index == 0 ? <ButtonDy
                                    onPress={() => flatlistDataRef.current.scrollToIndex({ index: 1 })}
                                    // onPress={() => { __onSliderChange(flatlistDataRef.current.scrollToIndex(currentSlideIndex + 1)) }}
                                    title={"Get started"}
                                    style={styles.button}
                                    textStyle={styles.buttontext}
                                /> :
                                    index == 1 ? <ButtonDy
                                        onPress={() => flatlistDataRef.current.scrollToIndex({ index: 2 })}
                                        // onPress={() => { __onSliderChange(flatlistDataRef.current.scrollToIndex(currentSlideIndex + 1)) }}
                                        title={"Get started"}
                                        style={styles.button}
                                        textStyle={styles.buttontext}
                                    /> :
                                        index == 2 ? <ButtonDy
                                            onPress={() => navigation.navigate('Login')}
                                            title={"Get started"}
                                            style={styles.button}
                                            textStyle={styles.buttontext}
                                        /> :
                                            null
                            )
                        }


                        {/* {
                            (index !== 2) ?
                                <ButtonDy
                                    onPress={() => flatlistDataRef.current.scrollToIndex({ index: 1 })}
                                    // onPress={() => { __onSliderChange(flatlistDataRef.current.scrollToIndex(currentSlideIndex + 1)) }}
                                    title={"Get started"}
                                    style={styles.button}
                                    textStyle={styles.buttontext}
                                />
                                : <ButtonDy
                                    // onPress={() => flatlistDataRef.current.scrollToIndex({ index: 1 })}
                                    // onPress={() => { __onSliderChange(flatlistDataRef.current.scrollToIndex(currentSlideIndex + 1)) }}
                                    onPress={() => navigation.navigate('Login')}
                                    title={"Get started"}
                                    style={styles.button}
                                    textStyle={styles.buttontext}
                                />
                        } */}
                        {
                            index !== 2 &&
                            <Text style={styles.skiptext} onPress={() => navigation.navigate('Login')}>Skip for now</Text>
                        }
                    </View>

                </View>


            )}
        />
    )
}

export default memo(ImageSlider);

const styles = StyleSheet.create({
    pagerView: {
        width: windowWidth,
        height: windowHeight / 1.4,
        alignSelf: "center",
    },
    imageContainer: {
        backgroundColor: Colors.subgray,
        height: windowHeight,
        width: windowWidth
    },
    image: {
        width: windowWidth,
        height: windowHeight / 1.4,
    },
    titlestyle: {
        color: Colors.primary,
        alignSelf: "center",
        fontFamily: FontFamily.bold,
        fontSize: 24,
        paddingVertical: 20
    },
    description: {
        color: Colors.bordergray,
        alignSelf: "center",
        fontFamily: FontFamily.primary,
        fontSize: 14,
        textAlign: "center",
        paddingVertical: 10,
        paddingBottom: 20,
        lineHeight: 20,
    },
    skiptext: {
        color: Colors.listgray,
        alignSelf: "center",
        fontFamily: FontFamily.semiBold,
        fontSize: 15,
        paddingVertical: 20,
        // paddingBottom:30,
    },
    bottomview: {
        position: "absolute",
        height: 320,
        width: 300,
        backgroundColor: Colors.white,
        top: windowHeight / 2,
        borderRadius: 30,
        alignSelf: "center",
        justifyContent: "center"
    },
    button: {
        marginTop: 20,
        width: "90%",
        marginTop: 20
    },
    buttontext: {
        fontFamily: FontFamily.bold,
        fontSize: 16,
    },
    backgroundbottom: {
        backgroundColor: Colors.subgray,
        flex: 1,
        borderWidth: 1,
        borderColor: Colors.white,
        marginTop: -20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    }

})


















// OLD

// import React, { memo, useState, useRef, useEffect } from 'react';
// import {
//     StyleSheet, TouchableOpacity, View,
//     Image,
//     FlatList,
//     Text
// } from 'react-native';
// import PagerView from 'react-native-pager-view';
// import Colors from '../../../common/Colors';
// import DotsKS from '../../../common/Components/DotsKS';
// import { Dimensions } from 'react-native';
// import ButtonDy from '../../../common/Components/ButtonDy';
// import FontFamily from '../../../common/FontFamily';
// import { useNavigation } from '@react-navigation/native';

// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;



// const ImageSlider = ({ data = [], onImagePress }) => {

//     const [pageDotNumber, setpageDotNumber] = useState(0)
//     const navigation = useNavigation();

//     useEffect(() => {
//         console.log(data)
//     }, [])


//     const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

//     const onViewRef = React.useRef(({ viewableItems }) => {
//         console.log("visible items :: ", viewableItems);
//         if (viewableItems.length === 0) {
//             return;
//         } else {
//             setpageDotNumber(viewableItems[0].index);
//         }
//     })

//     return (
//         <View style={styles.container}>
//             <PagerView
//                 style={styles.pagerView}
//                 initialPage={0}
//                 onPageSelected={(event) => {
//                     setpageDotNumber(event.nativeEvent.position);
//                 }}
//             >
//                 {
//                     data.map((image, index) => (
//                         <>
//                             <TouchableOpacity
//                                 key={image + index}
//                                 style={styles.imageContainer}
//                             >
//                                 <Image
//                                     source={image.image}
//                                     style={styles.image}
//                                     resizeMode="cover"
//                                 />
//                             </TouchableOpacity>
//                         </>
//                     ))

//                 }
//             </PagerView>


//             <View style={{ position: "absolute", height: 300, width: 300, backgroundColor: Colors.white, top: windowHeight / 2.1, borderRadius: 30, zIndex: 1, alignSelf: "center" }}>

//                 <Text style={{ color: Colors.primary, alignSelf: "center", fontFamily: FontFamily.semiBold, fontSize: 24, paddingVertical: 20 }}>Live talk with doctor</Text>

//                 <Text style={{ color: Colors.bordergray, alignSelf: "center", fontFamily: FontFamily.primary, fontSize: 14, textAlign: "center", paddingVertical: 10, paddingBottom: 20 }}>Access thousands of Doctors instantly.{'\n'}You can easily contact with the doctors {'\n'} and contact for your needs.</Text>

//                 <DotsKS
//                     length={data.length}
//                     pageDotNumber={pageDotNumber}
//                 />

//                 <ButtonDy
//                     onPress={() => navigation.navigate('Login')}
//                     title={"Get started"}
//                     style={{ width: "90%", marginTop: 20 }}
//                 />

//                 <Text style={{ color: Colors.listgray, alignSelf: "center", fontFamily: FontFamily.light, fontSize: 15, paddingVertical: 20 }}>Skip for now</Text>

//             </View>
//         </View>


//     )
// }

// export default memo(ImageSlider);

// const styles = StyleSheet.create({
//     container: {
//         // height: 320,
//         // justifyContent: "center",
//         // borderRadius: 0.1,
//         // backgroundColor: Colors.white,

//         // shadowColor: "#000",
//         // shadowOffset: {
//         //     width: 0,
//         //     height: 1,
//         // },
//         // shadowOpacity: 0.18,
//         // shadowRadius: 1.00,

//         // elevation: 1,
//     },
//     pagerView: {
//         width: windowWidth,
//         height: windowHeight / 1.4,
//         alignSelf: "center",
//     },
//     imageContainer: {
//         // backgroundColor: "red",
//         alignItems: "center",
//         justifyContent: "center",

//     },
//     image: {
//         width: windowWidth,
//         height: windowHeight / 1.4,
//     },
// })
