import { StyleSheet } from 'react-native';
import theme from 'theme';

export default StyleSheet.create({
  menuContainer: {
    margin: 10,
    position: 'absolute',
    bottom: 0,
    right: 0,
    zIndex: 10,
  },
  buttonContainer: {
    backgroundColor: theme.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
    marginTop: 10,
  },
  buttonIcon: {
    marginRight: 0,
    color: theme.WHITE,
  },
  menuIcon: {
    width: 20,
    height: 20,
  },
});
