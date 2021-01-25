import { StyleSheet } from 'react-native';
import theme from 'theme';

export default StyleSheet.create({
  buttonContainer: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.PRIMARY,
    borderRadius: 5,
  },
  borderButton: {
    borderWidth: 1.5,
    borderColor: theme.PRIMARY,
    backgroundColor: theme.WHITE,
  },
  animatedButton: {
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  upperCaseText: {
    textTransform: 'uppercase',
  },
  row: {
    flexDirection: 'row',
  },
  iconMargin: {
    marginHorizontal: 10,
  },
  leftIconContainer: {
    marginRight: 10,
  },
  rightIconContainer: {
    marginLeft: 10,
  },
  disabledButton: {
    backgroundColor: theme.GREY,
  },
});
