import React, { memo } from 'react';
import { StyleSheet, ScrollView, Dimensions } from 'react-native';
import PropertyOptionItem from './PropertyOptionItem';


const PropertyOptions = ({
    data, selectedAgeIndex, onSelect,
    extraHorizontalPadding, isWrap, itemStyle,
    itemTextStyle, activeStyle, activeTextStyle,
    inactiveStyle, inactiveTextStyle, style,
    isTranslation,
}) => {
    const windowWidth = Dimensions.get('window').width;
    return (
        <ScrollView
            // style={[styles.container, { ...style }]}
            // contentContainerStyle={isWrap && {
            //     flexWrap: 'wrap',
            //     width: '100%',
            // }}
            // scrollEnabled={!isWrap}
            // horizontal
            // showsHorizontalScrollIndicator={false}
            style={[styles.container, { ...style }]}
            contentContainerStyle={{
                // flexWrap: 'wrap',
                width: windowWidth,
            }}
            scrollEnabled={!isWrap}
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            {
                data.map((item, index) => {
                    return (
                        <PropertyOptionItem
                            key={index + "_option_item"}
                            item={item}
                            index={index}
                            selectedIndex={selectedAgeIndex}
                            extraHorizontalPadding={extraHorizontalPadding}
                            onSelect={onSelect}
                            style={{ ...itemStyle, marginTop: isWrap ? 10 : undefined }}
                            textStyle={itemTextStyle}
                            // active style
                            activeStyle={{ ...activeStyle }}
                            activeTextStyle={{ ...activeTextStyle }}

                            // inactive style
                            inactiveStyle={{ ...inactiveStyle }}
                            inactiveTextStyle={{ ...inactiveTextStyle }}

                            // for translation
                            isTranslation={isTranslation}
                        />
                    );
                })
            }
        </ScrollView>
    )
}

export default memo(PropertyOptions);

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginBottom: 20,
    },
});
