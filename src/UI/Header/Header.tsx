import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import {
  TextStyle, TouchableOpacity, View, ViewStyle,
} from 'react-native';
import Icon from '../Icon';
import TextUI from '../TextUI';
import styles from './header.style';

type Props = {
  title: string;
  subTitle?: string;
  onBackClick?: () => void;
  noBackButton? : boolean;
  containerStyles?: ViewStyle;
  subTitleContainerStyle?: ViewStyle;
  headerStyle?: TextStyle;
  isRightIcon?: boolean;
  onRightIconPress?: () => void
};

const Header: FC<Props> = (props: Props) => {
  const navigation = useNavigation();
  const goBack = () => (props.onBackClick ? props.onBackClick() : navigation.goBack());
  const {
    title,
    subTitle,
    noBackButton,
    isRightIcon,
    onRightIconPress = () => {},
    containerStyles = {},
    headerStyle = {},
    subTitleContainerStyle = {},
  } = props;
  return (
    <View
      style={[
        styles.headerContainer,
        isRightIcon && { justifyContent: 'space-between' },
        containerStyles,
      ]}
    >
      {!noBackButton && (
      <TouchableOpacity onPress={goBack}>
        <Icon
          style={styles.leftIconStyle}
          name="chevron-left"
          size={30}
        />
      </TouchableOpacity>
      )}
      <View style={subTitleContainerStyle}>
        <TextUI fontWeight="Bold" style={[styles.headerTitle, headerStyle]}>{title}</TextUI>
        {!!subTitle && <TextUI style={styles.headerSubTitle}>{subTitle}</TextUI>}
      </View>
      {isRightIcon && (
      <TouchableOpacity onPress={onRightIconPress}>
        <Icon
          name="close-circle"
          size={30}
        />
      </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
