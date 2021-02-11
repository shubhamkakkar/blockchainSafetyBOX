import { StyleSheet } from 'react-native';
import { DEFAULT_VERTICAL_MARGIN } from 'constants';

export default StyleSheet.create({
  image: {
    height: 150,
    width: 100,
  },
  contentContainerStyle: {
    marginTop: DEFAULT_VERTICAL_MARGIN,
  },
  deleteIconButton: {
    alignItems: 'flex-end',
  },
});
