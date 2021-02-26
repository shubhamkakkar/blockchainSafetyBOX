import { StyleSheet } from 'react-native';
import theme from 'theme';
// @ts-ignore
import { DEFAULT_ICON_SIZE, FONT_SIZES } from 'constants';

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1.5,
    borderBottomColor: theme.LIGHT_PRIMARY,
  },
  flexColumn: {
    flexDirection: 'column',
  },
  leftIconStyle: {
    marginRight: 0,
  },
  headerTitle: {
    fontSize: FONT_SIZES.MEDIUM_LARGE_TEXT,
    fontWeight: 'bold',
    color: theme.DARK_PRIMARY,
  },
  headerSubTitle: {
    fontSize: FONT_SIZES.SMALL_TEXT,
    flexDirection: 'row',
    color: theme.LIGHT_BLACK,
    justifyContent: 'center',
    top: -5,
  },
});

export default styles;
