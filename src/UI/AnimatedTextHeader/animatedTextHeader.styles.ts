import { StyleSheet } from 'react-native';
import theme from 'theme';
// @ts-ignore
import { DEFAULT_HORIZONTAL_PADDING, FONT_SIZES } from 'constants';

const styles = StyleSheet.create({
  headerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    overflow: 'hidden',
    backgroundColor: theme.WHITE,
    borderBottomWidth: 1,
    borderBottomColor: theme.LIGHT_PRIMARY,
    flexDirection: 'row',
    alignItems: 'center',
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
  textContainerStyle: {
    flex: 1,
  },
  allCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  goBackButton: {
    position: 'absolute',
    zIndex: 100,
    elevation: 100,
    padding: 10,
  },
  rightContainerStyle: {
    position: 'absolute',
    zIndex: 100,
    elevation: 100,
    padding: 10,
    right: 0,
  },
});

export default styles;
