import React, { memo, useMemo } from 'react';
import { StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
import Colors from '../Colors';
import FontFamily from '../FontFamily';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const PropertyOptionItem = ({
    item, index, onSelect,
    selectedIndex, extraHorizontalPadding = 0, style,
    textStyle, activeStyle, activeTextStyle,
    inactiveStyle, inactiveTextStyle, isTranslation
}) => {


    const selectStyle = useMemo(() => {

        const isSelected = selectedIndex === index;

        const additionalStyle = isSelected ? activeStyle : inactiveStyle;
        const additionalTextStyle = isSelected ? activeTextStyle : inactiveTextStyle;

        let containerStyle = {
            backgroundColor: isSelected ? Colors.primary : Colors.white,
            borderColor: isSelected ? Colors.primary : Colors.bordergray,
        };

        let textStyle = {
            color: isSelected ? Colors.white : Colors.textGray2
        };

        // additional added style
        containerStyle = { ...containerStyle, ...additionalStyle };
        textStyle = { ...textStyle, ...additionalTextStyle };

        return {
            containerStyle,
            textStyle,
        };
    }, [selectedIndex]);

    return (
        <TouchableOpacity
            onPress={() => onSelect(index)}
            style={[
                styles.container,
                selectStyle.containerStyle, {

                    ...style
                }]}
        >
            <Text
                style={[styles.optionTextView, selectStyle.textStyle, {
                    ...textStyle
                }]}
            >
                {
                    isTranslation
                        ?
                        (item)
                        :
                        item
                }
            </Text>
        </TouchableOpacity>
    )
}

export default memo(PropertyOptionItem);

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 6,
        paddingTop: 20,
        alignSelf: "center",

        borderRadius: 42,
        width: windowWidth / 5,
        height: windowHeight / 10
        // width: 84,
        // height: 84
    },
    optionTextView: {
        color: Colors.red,
        fontSize: 20,
        alignSelf: "center",
    },
});





// import React, { memo, useMemo } from 'react';
// import { StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
// import Colors from '../Colors';
// import FontFamily from '../FontFamily';


// const PropertyOptionItem = ({
//     item, index, onSelect,
//     selectedIndex, extraHorizontalPadding = 0, style,
//     textStyle, activeStyle, activeTextStyle,
//     inactiveStyle, inactiveTextStyle, isTranslation
// }) => {

//     const windowWidth = Dimensions.get('window').width;
//     const windowHeight = Dimensions.get('window').height;
//     const selectStyle = useMemo(() => {

//         const isSelected = selectedIndex === index;

//         const additionalStyle = isSelected ? activeStyle : inactiveStyle;
//         const additionalTextStyle = isSelected ? activeTextStyle : inactiveTextStyle;

//         let containerStyle = {
//             backgroundColor: isSelected ? Colors.primary : Colors.white,
//             borderColor: isSelected ? Colors.primary : Colors.bordergray,
//         };

//         let textStyle = {
//             color: isSelected ? Colors.white : Colors.textGray2
//         };

//         // additional added style
//         containerStyle = { ...containerStyle, ...additionalStyle };
//         textStyle = { ...textStyle, ...additionalTextStyle };

//         return {
//             containerStyle,
//             textStyle,
//         };
//     }, [selectedIndex]);

//     return (
//         <TouchableOpacity
//             onPress={() => onSelect(index)}
//             style={[
//                 styles.container,
//                 selectStyle.containerStyle, {
//                     paddingHorizontal: extraHorizontalPadding + 10,
//                     ...style
//                 }]}
//         >
//             <Text
//                 style={[styles.optionTextView, selectStyle.textStyle, {
//                     ...textStyle
//                 }]}
//             >
//                 {
//                     isTranslation
//                         ?
//                         (item)
//                         :
//                         item
//                 }
//             </Text>
//         </TouchableOpacity>
//     )
// }

// export default memo(PropertyOptionItem);

// const styles = StyleSheet.create({
//     container: {
//         marginHorizontal: 6,
//         paddingTop: 30,
//         alignSelf: "center",
//         borderRadius: 42,
//         width: 84,
//         height: 84
//     },
//     optionTextView: {
//         color: Colors.red,
//         fontSize: 20,
//         alignSelf: "center",
//     },
// });
