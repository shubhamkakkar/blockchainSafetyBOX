import { StyleSheet } from 'react-native';
import theme from 'theme';

export default StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    margin: 8,
    backgroundColor: theme.WHITE,
  },
  buttonCommon: {
    borderWidth: 1,
    borderColor: theme.DARK_PRIMARY,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 5,
    borderRadius: 5,
    padding: 5,
  },
  complimentaryButton: {
    marginRight: 5,
  },
  primaryButton: {
    marginLeft: 5,
    backgroundColor: theme.DARK_PRIMARY,
  },
});
