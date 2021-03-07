import { StyleSheet } from 'react-native';
import {
  // @ts-ignore
  DEFAULT_VERTICAL_PADDING,
  // @ts-ignore
  HEADER_MIN_HEIGHT_WITHOUT_DESCRIPTION_COMPONENT,
} from 'constants';

export default StyleSheet.create({
  spacer: {
    paddingTop: HEADER_MIN_HEIGHT_WITHOUT_DESCRIPTION_COMPONENT,
    paddingHorizontal: DEFAULT_VERTICAL_PADDING,
  },
});
