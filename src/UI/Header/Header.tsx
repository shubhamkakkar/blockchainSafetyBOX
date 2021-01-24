import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { TouchableOpacity, View, ViewStyle } from 'react-native';
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
};

const Header: FC<Props> = (props: Props) => {
  const navigation = useNavigation();
  const goBack = () => (props.onBackClick ? props.onBackClick() : navigation.goBack());
  const {
    title,
    subTitle,
    noBackButton,
    containerStyles = {},
    subTitleContainerStyle = {},
  } = props;
  return (
    <View style={[styles.headerContainer, containerStyles]}>
      <View style={[styles.titleSubtitleContainer, subTitleContainerStyle]}>
        <TextUI fontWeight="Bold" style={styles.headerTitle}>{title}</TextUI>
        {!!subTitle && <TextUI style={styles.headerSubTitle}>{subTitle}</TextUI>}
      </View>
      {!noBackButton && (
        <TouchableOpacity onPress={goBack}>
          <Icon name="chevron-left" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
