import { Platform, StyleSheet } from 'react-native';
// @ts-ignore
import { DEFAULT_HORIZONTAL_PADDING, FONT_SIZES } from 'constants';
import theme from 'theme';

const isIOS = Platform.OS === 'ios';

export default StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    overflow: 'hidden',
    backgroundColor: theme.WHITE,
    borderBottomWidth: 1,
    borderBottomColor: theme.LIGHT_PRIMARY,
    paddingTop: 10,
  },
  topBar: {
    marginLeft: DEFAULT_HORIZONTAL_PADDING,
    marginRight: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: FONT_SIZES.MEDIUM_LARGE_TEXT,
    fontWeight: 'bold',
    color: theme.DARK_PRIMARY,
  },
  backBtnImage: {
    top: 5,
  },
  goBackArrow: {
    elevation: 100,
    padding: 10,
    top: isIOS ? -5 : -2,
    zIndex: 100,
  },
  titleAndImageContainer: {
    flexDirection: 'row',
  },
});
