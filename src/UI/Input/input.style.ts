import { StyleSheet } from 'react-native';
import theme from 'theme';
// @ts-ignore
import { FONT_SIZES } from 'constants';

export default StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  inputContainer: {
    marginBottom: 15,
    alignItems: 'flex-end',
  },
  inputFieldContainer: {
    borderWidth: 0.5,
    borderColor: theme.GREY,
    borderRadius: 5,
    padding: 10,
    marginBottom: 2,
  },
  inputFieldContainerActive: {
    borderWidth: 1,
    borderColor: theme.PRIMARY,
  },
  inputFieldContainerError: {
    borderWidth: 1,
    borderColor: theme.RED,
  },
  textInputStyle: {
    flex: 1,
    fontSize: FONT_SIZES.SMALL_TEXT_ALTERNATE,
  },
  errorText: {
    marginLeft: 5,
  },
});
