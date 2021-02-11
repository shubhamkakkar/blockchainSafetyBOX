import { StyleSheet } from 'react-native';
import theme from 'theme';
import { DEFAULT_HORIZONTAL_PADDING } from 'constants';

export default StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  fileUploadButton: {
    borderColor: theme.DARK_PRIMARY,
    paddingVertical: 10,
    borderRadius: 20,
  },
  fileUploadButtonText: {
    color: theme.DARK_PRIMARY,
  },
  actionSheetContentContainer: {
    paddingHorizontal: DEFAULT_HORIZONTAL_PADDING / 2,
    paddingVertical: DEFAULT_HORIZONTAL_PADDING,
  },
  noBorder: {
    borderWidth: 0,
  },
});
