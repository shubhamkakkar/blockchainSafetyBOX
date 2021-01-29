import { StyleSheet } from 'react-native';
import theme from 'theme';

export default StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  inputContainer: {
    marginBottom: 15,
  },
  inputFieldContainer: {
    borderWidth: 0.5,
    borderColor: theme.GREY,
    borderRadius: 5,
    padding: 10,
    marginBottom: 2,
  },
  formikErrorContainer: {
    alignItems: 'flex-end',
  },
  inputFieldContainerError: {
    borderWidth: 1,
    borderColor: theme.RED,
  },
});
