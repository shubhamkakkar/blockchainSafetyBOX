import React from 'react';
import {
  ScrollView, View, TouchableOpacity, Dimensions,
} from 'react-native';
import TextUI from 'UI/TextUI';
import styles from './segmentedTab.styles';

type Props = {
  values: string[],
  selectedIndex: number,
  onTabPressHandler: (_index: number) => void
};

export default function SegmentedTab(props: Props) {
  const tabWidth = Dimensions.get('window').width / props.values.length;
  return (
    <View style={styles.tabsContainerStyle}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {props.values.map((value, index) => (
          <TouchableOpacity
            onPress={() => props.onTabPressHandler(index)}
            key={value}
            style={[
              styles.tabStyle,
              { width: tabWidth },
              index === props.selectedIndex && styles.activeTabStyle]}
          >
            <TextUI style={[
              styles.tabTextStyle, index === props.selectedIndex ? styles.activeTextStyle : {}]}
            >
              {value}
            </TextUI>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
