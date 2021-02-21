import { StyleSheet } from 'react-native';
import { DEFAULT_VERTICAL_MARGIN } from 'constants';
import theme from 'theme';

export default StyleSheet.create({
  container: {
    margin: DEFAULT_VERTICAL_MARGIN,
    borderBottomWidth: 0.5,
    borderBottomColor: theme.GREY,
    paddingBottom: DEFAULT_VERTICAL_MARGIN,
  },
  actionRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  requestedAtContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
});
