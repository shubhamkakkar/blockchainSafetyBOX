import React, { FC } from 'react';
import {
  GestureResponderEvent,
  Modal,
  ModalProps,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import KeyboardAvoidingViewUI from 'UI/KeyboardAvoidingViewUI';

interface Props extends ModalProps {
  isOpen: boolean;
  onPressOutsideChildren?: (_event: GestureResponderEvent) => void;
  children?: any;
  backgroundColor?: string;
  touchableOverlayStyle?: ViewStyle;
  onClose?: () => void;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  overlayButton: {
    width: '100%',
    height: '100%',
  },
});

const Overlay: FC<Props> = (props: Props) => {
  const {
    isOpen,
    children,
    onPressOutsideChildren,
    backgroundColor = 'rgba(0,0,0,0.59)',
    touchableOverlayStyle,
    onClose = () => {
    },
    ...rest
  } = props;

  return (
    <SafeAreaView style={[styles.container]}>
      <Modal
        animationType="fade"
        transparent
        visible={isOpen}
        onRequestClose={onClose}
        {...rest}
      >
        <KeyboardAvoidingViewUI>
          <TouchableOpacity
            style={StyleSheet.flatten([
              styles.overlayButton,
              {
                backgroundColor,
              },
              touchableOverlayStyle,
            ])}
            activeOpacity={1}
            onPress={onPressOutsideChildren || (() => false)}
          />
          {children}
        </KeyboardAvoidingViewUI>
      </Modal>
    </SafeAreaView>
  );
};

export default Overlay;
