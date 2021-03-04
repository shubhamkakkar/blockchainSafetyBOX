import React, { FC } from 'react';
import {
  GestureResponderEvent,
  Modal,
  ModalProps,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

interface Props extends ModalProps {
  isOpen: boolean;
  onPressOutsideChildren?: (_event: GestureResponderEvent) => void;
  children?: any;
  backgroundColor?: string;
  touchableOverlayStyle?: ViewStyle;
  onClose?: () => void;
}

const Overlay: FC<Props> = (props: Props) => {
  const {
    isOpen,
    children,
    onPressOutsideChildren,
    backgroundColor = 'rgba(0,0,0,0.59)',
    touchableOverlayStyle,
    onClose = () => {},
    ...rest
  } = props;

  return (
    <Modal
      animationType="fade"
      transparent
      visible={isOpen}
      onRequestClose={onClose}
      {...rest}
    >
      <TouchableOpacity
        style={StyleSheet.flatten([
          {
            width: '100%',
            height: '100%',
            backgroundColor,
          },
          touchableOverlayStyle,
        ])}
        activeOpacity={1}
        onPress={onPressOutsideChildren || (() => false)}
      />
      { children}
    </Modal>
  );
};

export default Overlay;
