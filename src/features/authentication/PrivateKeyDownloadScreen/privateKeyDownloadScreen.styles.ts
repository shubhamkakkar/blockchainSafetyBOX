import { StyleSheet } from 'react-native';
// @ts-ignore
import { DEFAULT_HORIZONTAL_PADDING } from 'constants';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  allCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: DEFAULT_HORIZONTAL_PADDING,
  },
  informationTextContainer: {
    marginVertical: 10,
  },
  bottomSpacer: {
    marginBottom: 10,
  },
  downloadButtonContainer: {
    marginTop: 20,
  },
});
