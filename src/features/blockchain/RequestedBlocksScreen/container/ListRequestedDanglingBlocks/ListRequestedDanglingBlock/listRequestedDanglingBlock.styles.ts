import { StyleSheet } from 'react-native';
// @ts-ignore
import { DEFAULT_VERTICAL_MARGIN } from 'constants';
import theme from 'theme';

export default StyleSheet.create({
  container: {
    borderBottomWidth: 0.5,
    borderBottomColor: theme.GREY,
    paddingHorizontal: DEFAULT_VERTICAL_MARGIN,
    paddingVertical: DEFAULT_VERTICAL_MARGIN / 2,
  },
  actionRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  requestedAtContainer: {
    marginBottom: 10,
  },
  isOwnerIcon: {
    marginLeft: 10,
  },
  row: {
    flexDirection: 'row',
  },
});
