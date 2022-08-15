import React, { memo } from 'react';
import { StyleSheet, ScrollView, Dimensions } from 'react-native';
import MonthSelectorOptionItem from './MonthSelectorOptionItem';


const MonthOption = ({
    data, selectedAgeIndex, onSelect,
    extraHorizontalPadding, isWrap, itemStyle,
    itemTextStyle, activeStyle, activeTextStyle,
    inactiveStyle, inactiveTextStyle, style,
    isTranslation,
}) => {
    const windowWidth = Dimensions.get('window').width;
    return (
        <ScrollView
            style={[styles.container, { ...style }]}
            contentContainerStyle={{
                // flexWrap: 'wrap',
                // width: windowWidth,
            }}
            scrollEnabled
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            {
                data.map((item, index) => {
                    return (
                        <MonthSelectorOptionItem
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

export default memo(MonthOption);

const styles = StyleSheet.create({
    container: {
        // marginTop: 20,
        // marginBottom: 20,
    },
});
