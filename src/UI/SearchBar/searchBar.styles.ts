import { StyleSheet } from 'react-native';
import theme from 'theme';

export default StyleSheet.create({
  viewContainer: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 5,
    marginVertical: 10,
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: theme.WHITE,
    alignItems: 'center',
    borderColor: theme.PRIMARY,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginHorizontal: 10,
  },
  flex: {
    flex: 1,
  }
});
