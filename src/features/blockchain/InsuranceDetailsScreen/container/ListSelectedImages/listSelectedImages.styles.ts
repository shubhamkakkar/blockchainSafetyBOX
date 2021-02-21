import { StyleSheet } from 'react-native';
// @ts-ignore
import { DEFAULT_VERTICAL_MARGIN } from 'constants';
import theme from 'theme';

export default StyleSheet.create({
  image: {
    height: 130,
    width: 100,
    marginRight: 10,
    alignItems: 'flex-end',
  },
  contentContainerStyle: {
    marginTop: DEFAULT_VERTICAL_MARGIN,
  },
  deleteIconButton: {
    borderRadius: 50,
    backgroundColor: theme.WHITE,
    padding: 5,
  },
  deleteIcon: {
    marginRight: 0,
    color: theme.BLACK,
  },
});
