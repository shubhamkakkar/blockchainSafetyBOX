import { StyleSheet } from 'react-native';
import theme from 'theme';
import { DEFAULT_VERTICAL_MARGIN } from 'constants';

export default StyleSheet.create({
  container: {
  },
  dateSlimSectionHeader: {
    backgroundColor: theme.GREY + 50,
    padding: DEFAULT_VERTICAL_MARGIN / 2,
  },
  cardDescription: {
    padding: DEFAULT_VERTICAL_MARGIN / 2,
    borderBottomWidth: 0.5,
    borderBottomColor: theme.GREY,
    marginLeft: DEFAULT_VERTICAL_MARGIN / 2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
});
