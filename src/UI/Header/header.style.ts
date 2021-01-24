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
    width: '100%',
  },
  flexColumn: {
    flexDirection: 'column',
  },
  titleSubtitleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    left: DEFAULT_ICON_SIZE / 2,
  },
  headerTitle: {
    color: theme.PRIMARY,
    alignItems: 'center',
    fontSize: FONT_SIZES.MEDIUM_TEXT,
  },
  headerSubTitle: {
    fontSize: 13,
    flexDirection: 'row',
    color: theme.LIGHT_BLACK,
    justifyContent: 'center',
    top: -5,
  },
});

export default styles;
