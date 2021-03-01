import { StyleSheet } from 'react-native';
import {
  DEFAULT_HORIZONTAL_PADDING,
  FONT_SIZES,
  HEADER_MAX_HEIGHT_WITHOUT_DESCRIPTION_COMPONENT,
} from 'constants';
import theme from 'theme';

export default StyleSheet.create({
  container: {
    paddingHorizontal: DEFAULT_HORIZONTAL_PADDING,
    paddingTop: HEADER_MAX_HEIGHT_WITHOUT_DESCRIPTION_COMPONENT,
  },
  publicKeyTitleStyle: {
    fontWeight: '600',
    color: theme.DARK_PRIMARY,
    fontSize: FONT_SIZES.MEDIUM_TEXT,
    textTransform: 'none',
  },
  flex: {
    flex: 1,
  },
  allCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottie: {
    width: 250,
    height: 200,
  },
  lottieContainer: {
    marginVertical: 30,
  },
  buttonPadding: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 0,
    backgroundColor: theme.RED,
  },
  buttonContainer: {
    marginTop: 20,
  },
});
