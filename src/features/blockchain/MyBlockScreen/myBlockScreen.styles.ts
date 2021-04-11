import { StyleSheet } from 'react-native';
import {
  // @ts-ignore
  DEFAULT_VERTICAL_PADDING,
  // @ts-ignore
  HEADER_MIN_HEIGHT_WITHOUT_DESCRIPTION_COMPONENT,
} from 'constants';
import theme from 'theme';

export default StyleSheet.create({
  spacer: {
    paddingTop: HEADER_MIN_HEIGHT_WITHOUT_DESCRIPTION_COMPONENT,
    paddingHorizontal: DEFAULT_VERTICAL_PADDING,
  },
  allCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonPadding: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 0,
    backgroundColor: theme.DARK_PRIMARY,
  },
  buttonContainer: {
    marginTop: 20,
  },
});
