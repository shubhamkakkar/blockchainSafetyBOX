import { StyleSheet } from 'react-native';
// @ts-ignore
import { DEFAULT_VERTICAL_MARGIN, DEFAULT_HORIZONTAL_PADDING } from 'constants';

export default StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  marginTop: {
    marginTop: DEFAULT_VERTICAL_MARGIN,
  },
  flex: {
    flex: 1,
  },
  allCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  horizontalSpacer: {
    paddingHorizontal: DEFAULT_HORIZONTAL_PADDING,
  },
});
