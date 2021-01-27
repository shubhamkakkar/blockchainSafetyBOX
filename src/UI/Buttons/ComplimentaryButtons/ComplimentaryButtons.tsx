import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import theme from 'theme';
import TextUI from '../../TextUI';
import Icon from '../../Icon';
import styles from './complimentaryButtons.styles';

type Props = {
  complimentaryButtonTitle: string;
  primaryButtonTitle: string;
  primaryButtonIcon: string;
  complimentaryButtonIcon: string;
  onComplimentaryButtonPresHandler: () => void;
  onPrimaryButtonPressHandler: () => void;
  dontShowIcons?: boolean
};
export default function ComplimentaryButtons(props: Props) {
  return (
    <View style={styles.row}>
      <TouchableOpacity
        style={[styles.buttonCommon, styles.complimentaryButton]}
        onPress={props.onComplimentaryButtonPresHandler}
      >
        {!props.dontShowIcons && <Icon name={props.complimentaryButtonIcon} />}
        <TextUI color={theme.DARK_PRIMARY}>{props.complimentaryButtonTitle}</TextUI>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.buttonCommon, styles.primaryButton]}
        onPress={props.onPrimaryButtonPressHandler}
      >
        {!props.dontShowIcons && <Icon name={props.primaryButtonIcon} color={theme.WHITE} />}
        <TextUI color={theme.WHITE}>{props.primaryButtonTitle}</TextUI>
      </TouchableOpacity>
    </View>
  );
}
