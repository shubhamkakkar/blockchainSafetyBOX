import { StyleSheet } from 'react-native';
import theme from 'theme';
// @ts-ignore
import { FONT_SIZES } from 'constants';

export default StyleSheet.create({
  activeTabStyle: {
    borderBottomWidth: 2,
    borderBottomColor: theme.DARK_PRIMARY,
  },
  tabStyle: {
    padding: 5,
    backgroundColor: theme.WHITE,
  },
  activeTextStyle: {
    color: theme.DARK_PRIMARY,
    fontWeight: '700',
  },
  tabTextStyle: {
    fontWeight: '500',
    fontSize: FONT_SIZES.MEDIUM_TEXT,
    textAlign: 'center',
  },
  tabsContainerStyle: {
  },
});
