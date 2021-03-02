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
  headerStyle?: TextStyle
};

const Header: FC<Props> = (props: Props) => {
  const navigation = useNavigation();
  const goBack = () => (props.onBackClick ? props.onBackClick() : navigation.goBack());
  const {
    title,
    subTitle,
    noBackButton,
    containerStyles = {},
    headerStyle = {},
    subTitleContainerStyle = {},
  } = props;
  return (
    <View style={[styles.headerContainer, containerStyles]}>
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
    </View>
  );
};

export default Header;
