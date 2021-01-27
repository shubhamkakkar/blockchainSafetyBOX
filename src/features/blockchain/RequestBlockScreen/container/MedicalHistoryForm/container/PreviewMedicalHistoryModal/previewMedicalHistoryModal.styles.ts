import { StyleSheet } from 'react-native';
// @ts-ignore
import { DEFAULT_HORIZONTAL_PADDING, DEFAULT_VERTICAL_MARGIN } from 'constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: DEFAULT_VERTICAL_MARGIN,
    paddingHorizontal: DEFAULT_HORIZONTAL_PADDING,
  },
});
