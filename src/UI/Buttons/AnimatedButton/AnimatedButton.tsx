import React from 'react';
import { View } from 'react-native';
import Button, { ButtonProps } from 'UI/Buttons/Button';
// @ts-ignore
import { FONT_SIZES } from 'constants';
import TextUI from 'UI/TextUI';
import theme from 'theme';
import Icon from 'UI/Icon';
import Loader from 'UI/Loader';
import styles from '../button.style';

interface Props extends ButtonProps {
  isSuccess?: boolean;
  isLoading?: boolean;
  isFailed?: boolean;
}
export default function AnimatedButton({
  title,
  children,
  fontSize = FONT_SIZES.MEDIUM_TEXT,
  fontWeight = 'SemiBold',
  titleColor = theme.WHITE,
  style = {},
  isFailed,
  isLoading,
  isSuccess,
  ...rest
}: Props) {
  function iconRender() {
    if (isSuccess) {
      return <Icon style={styles.iconMargin} name="check-circle-outline" color={theme.WHITE} />;
    }
    if (isFailed) {
      return <Icon style={styles.iconMargin} name="alert-circle-outline" isError />;
    }
    return <></>;
  }

  return (
    <Button
      style={[styles.animatedButton, style]}
      fontWeight="Bold"
      fontSize={FONT_SIZES.MEDIUM_TEXT}
      textStyle={styles.upperCaseText}
      {...rest}
    >
      {children
      || isLoading
        ? <Loader color={theme.WHITE} />
        : (
          <View style={styles.row}>
            <TextUI color={titleColor} fontSize={fontSize} fontWeight={fontWeight}>
              {title}
            </TextUI>
            {iconRender()}
          </View>
        )}
    </Button>
  );
}
