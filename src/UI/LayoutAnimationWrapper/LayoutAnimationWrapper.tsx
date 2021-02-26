import React, { useEffect, useState } from 'react';
import {
  LayoutAnimation,
  Platform,
  TextStyle,
  TouchableOpacity,
  UIManager,
  View,
  ViewStyle,
} from 'react-native';
import Icon from 'UI/Icon';
import TextUI from '../TextUI';
import styles from './layoutAnimtaionWrapper.styles';

type Props = {
  title: string;
  children: React.ReactElement | React.ReactElement[];
  buttonContainer?: ViewStyle;
  centerTitle?: boolean;
  expanded?: boolean;
  buttonTitleStyle?: TextStyle;
};

export default function LayoutAnimationWrapper(props: Props) {
  const [expanded, setExpanded] = useState<boolean>(!!props.expanded);

  useEffect(() => {
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }, []);

  function toggleLayout() {
    setExpanded(!expanded);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }

  return (
    <View style={styles.container}>
      <View
        style={[styles.buttonContainer,
          props.buttonContainer || {},
          { paddingBottom: expanded ? 5 : 0 },
        ]}
      >
        <TouchableOpacity onPress={toggleLayout}>
          <View style={styles.buttonWrapper}>
            <TextUI
              center={props.centerTitle}
              style={[styles.buttonTitle, props.buttonTitleStyle || {}]}
            >
              {props.title}
            </TextUI>
            <Icon name={`chevron-${expanded ? 'up' : 'down'}`} />
          </View>
        </TouchableOpacity>
        {expanded && (
        <View
          style={[
            styles.childrenContainer,
            {
              opacity: expanded ? 1 : 0,
            },
          ]}
        >
          {props.children}
        </View>
        )}
      </View>
    </View>
  );
}
