import { StyleSheet } from 'react-native';
// @ts-ignore
import { DEFAULT_VERTICAL_MARGIN, DEFAULT_HORIZONTAL_PADDING } from 'constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: DEFAULT_VERTICAL_MARGIN / 2,
    paddingHorizontal: DEFAULT_HORIZONTAL_PADDING / 2,
  },
  submitButtonContainer: {
    marginBottom: 15,
  },
});
