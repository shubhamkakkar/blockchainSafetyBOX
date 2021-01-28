import React from 'react';
import {
  KeyboardAvoidingView, ScrollView, StyleSheet, Platform, ViewStyle,
} from 'react-native';

type Props = {
  customStyleScrollView?: ViewStyle;
  children: React.ReactElement | React.ReactElement[];
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    justifyContent: 'space-around',
  },
  scrollViewContentContainerStyle: {
    flexGrow: 1,
  },
});

export default function KeyboardAvoidingViewUI({
  children,
  customStyleScrollView,
}: Props) {
  return (
    <KeyboardAvoidingView
      style={styles.flex}
      enabled
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={[styles.scrollViewContentContainerStyle, customStyleScrollView]}
      >
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
