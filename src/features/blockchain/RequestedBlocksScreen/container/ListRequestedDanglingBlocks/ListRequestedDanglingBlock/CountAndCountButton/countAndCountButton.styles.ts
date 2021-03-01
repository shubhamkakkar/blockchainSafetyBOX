import { StyleSheet } from 'react-native';
import theme from 'theme';

export default StyleSheet.create({
  baseButton: {
    marginTop: 15,
    borderWidth: 1,
    borderColor: theme.SUCCESS,
    borderRadius: 5,
  },
  baseTitle: {
    color: theme.SUCCESS,

  },
  rejectButton: {
    borderColor: theme.RED,
  },
  rejectButtonTitle: {
    color: theme.RED,
  },
});
