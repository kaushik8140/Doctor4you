/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import styled from 'styled-components/native';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Platform,
} from 'react-native';
import PropTypes from 'prop-types';

const Container = styled.View`
  height: ${props => props.wrapperHeight};
  flex: 1;
  overflow: hidden;
  align-self: center;
  width: ${props => props.wrapperWidth};
  background-color: ${props => props.wrapperBackground};
`;
export const HighLightView = styled.View`
  position: absolute;
  top: ${props => (props.wrapperHeight - props.itemHeight) / 2};
  height: ${props => props.itemHeight};
  width: ${props => props.highlightWidth};
  border-top-color: ${props => props.highlightColor};
  border-bottom-color: ${props => props.highlightColor};
  border-top-width: ${props => props.highlightBorderWidth}px;
  border-bottom-width: ${props => props.highlightBorderWidth}px;
`;
export const SelectedItem = styled.View`
  height: 30px;
  justify-content: center;
  align-items: center;
  height: ${props => props.itemHeight};
`;
const deviceWidth = Dimensions.get('window').width;
export default class ScrollPicker extends React.Component {
  constructor(props) {
    super(props);
    this.onMomentumScrollBegin = this.onMomentumScrollBegin.bind(this);
    this.onMomentumScrollEnd = this.onMomentumScrollEnd.bind(this);
    this.onScrollBeginDrag = this.onScrollBeginDrag.bind(this);
    this.onScrollEndDrag = this.onScrollEndDrag.bind(this);
    this.state = {
      selectedIndex: props.selectedIndex || 0,
    };
  }

  componentDidMount() {
    const { selectedIndex } = this.props;

    if (selectedIndex) {
      setTimeout(() => {
        this.scrollToIndex(selectedIndex);
      }, 0);
    }
  }

  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  onScrollBeginDrag() {
    this.dragStarted = true;
    if (Platform.OS === 'ios') {
      this.isScrollTo = false;
    }
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  onScrollEndDrag(e) {
    const { onScrollEndDrag } = this.props;

    onScrollEndDrag();
    this.dragStarted = false;
    // if not used, event will be garbaged
    const element = {
      nativeEvent: {
        contentOffset: {
          y: e.nativeEvent.contentOffset.y,
        },
      },
    };
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(
      () => {
        if (!this.momentumStarted && !this.dragStarted) {
          this.scrollFix(element, 'timeout');
        }
      },
      10,
    );
  }

  onMomentumScrollBegin() {
    this.momentumStarted = true;
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  onMomentumScrollEnd(e) {
    const { onMomentumScrollEnd } = this.props;

    onMomentumScrollEnd();
    this.momentumStarted = false;
    if (!this.isScrollTo && !this.momentumStarted && !this.dragStarted) {
      this.scrollFix(e);
    }
  }

  scrollFix(e) {
    let verticalY = 0;
    const { selectedIndex: stateSelectedIndex } = this.state;
    const { itemHeight: h, dataSource, onValueChange } = this.props;

    if (e.nativeEvent.contentOffset) {
      verticalY = e.nativeEvent.contentOffset.y;
    }
    let selectedIndex = Math.round(verticalY / h);
    let verticalElem = selectedIndex * h;
    if (selectedIndex >= dataSource.length) {
      selectedIndex = dataSource.length - 1;
      verticalElem = (dataSource.length - 1) * h;
    }
    if (verticalElem !== verticalY) {
      // using scrollTo in ios, onMomentumScrollEnd will be invoked
      if (Platform.OS === 'ios') {
        this.isScrollTo = true;
      }
      this.sview.scrollTo({ y: verticalElem });
    }
    if (stateSelectedIndex === selectedIndex) {
      return;
    }
    this.setState({
      selectedIndex,
    });
    // onValueChange
    if (onValueChange) {
      const selectedValue = dataSource[selectedIndex];
      onValueChange(selectedValue, selectedIndex);
    }
  }

  scrollToIndex(ind) {
    const { itemHeight } = this.props;

    this.setState({
      selectedIndex: ind,
    });
    const y = itemHeight * ind;
    this.sview.scrollTo({ y });
  }

  renderItem(data, index) {
    const { selectedIndex } = this.state;
    const { activeItemTextStyle, itemTextStyle, itemHeight } = this.props;
    const isSelected = index === selectedIndex;
    const item = (
      <Text
        style={isSelected ? activeItemTextStyle : itemTextStyle}
      >
        {index}
        <View width={20} />
        {data}
      </Text>
    );

    return (
      <SelectedItem key={index} itemHeight={itemHeight}>
        {item}
      </SelectedItem>
    );
  }

  renderPlaceHolder() {
    const { wrapperHeight, itemHeight } = this.props;
    const height = (wrapperHeight - itemHeight) / 2;
    const header = <View style={{ height, flex: 1 }} />;
    const footer = <View style={{ height, flex: 1 }} />;

    return { header, footer };
  }

  render() {
    const {
      wrapperHeight,
      wrapperWidth,
      wrapperBackground,
      highlightColor,
      highlightWidth,
      itemHeight,
      highlightBorderWidth,
      onTouchStart,
      dataSource
    } = this.props;
    const { header, footer } = this.renderPlaceHolder();
    return (
      <Container
        wrapperHeight={wrapperHeight}
        wrapperWidth={wrapperWidth}
        wrapperBackground={wrapperBackground}
      >
        <HighLightView
          highlightColor={highlightColor}
          highlightWidth={highlightWidth}
          wrapperHeight={wrapperHeight}
          itemHeight={itemHeight}
          highlightBorderWidth={highlightBorderWidth}
        />
        <ScrollView
          ref={(sview) => {
            this.sview = sview;
          }}
          bounces={false}
          showsVerticalScrollIndicator={false}
          onTouchStart={onTouchStart}
          onMomentumScrollBegin={this.onMomentumScrollBegin}
          onMomentumScrollEnd={this.onMomentumScrollEnd}
          onScrollBeginDrag={this.onScrollBeginDrag}
          onScrollEndDrag={this.onScrollEndDrag}
          nestedScrollEnabled={true}
        >
          {header}
          {dataSource.map(this.renderItem.bind(this))}
          {footer}
        </ScrollView>
      </Container>
    );
  }
}
ScrollPicker.propTypes = {
  style: PropTypes.objectOf(PropTypes.any),
  dataSource: PropTypes.arrayOf(PropTypes.any),
  selectedIndex: PropTypes.number,
  onValueChange: PropTypes.func,
  renderItem: PropTypes.func,
  highlightColor: PropTypes.string,
  itemHeight: PropTypes.number,
  wrapperBackground: PropTypes.string,
  wrapperWidth: PropTypes.number,
  wrapperHeight: PropTypes.number,
  highlightWidth: PropTypes.number,
  highlightBorderWidth: PropTypes.number,
  itemTextStyle: PropTypes.objectOf(PropTypes.any),
  activeItemTextStyle: PropTypes.objectOf(PropTypes.any),
  onMomentumScrollEnd: PropTypes.func,
  onScrollEndDrag: PropTypes.func,
};
ScrollPicker.defaultProps = {
  dataSource: [1, 2, 3],
  itemHeight: 60,
  wrapperBackground: '#FFFFFF',
  wrapperHeight: 180,
  wrapperWidth: 150,
  highlightWidth: deviceWidth,
  highlightBorderWidth: 2,
  highlightColor: '#333',
  onMomentumScrollEnd: () => {
  },
  onScrollEndDrag: () => {
  },
  itemTextStyle: {
    fontSize: 20, lineHeight: 26, textAlign: 'center', color: '#B4B4B4'
  },
  activeItemTextStyle: {
    fontSize: 20, lineHeight: 26, textAlign: 'center', color: '#222121'
  }
};
