import { StyleSheet } from 'react-native';
import { DEFAULT_VERTICAL_MARGIN } from 'constants';
import theme from 'theme';

export default StyleSheet.create({
  container: {
    // marginBottom: DEFAULT_VERTICAL_MARGIN,
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
});
