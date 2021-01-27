import React from 'react';
import { Modal, ModalProps, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props extends ModalProps {
  children: React.ReactElement | React.ReactElement[];
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});

export default ({
  children,
  animationType = 'slide',
  ...rest
}: Props) => (
  <Modal
    animationType={animationType}
    {...rest}
  >
    <SafeAreaView style={styles.flex}>{children}</SafeAreaView>
  </Modal>
);
