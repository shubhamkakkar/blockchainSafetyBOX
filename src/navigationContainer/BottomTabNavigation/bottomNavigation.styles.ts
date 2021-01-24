import { StyleSheet } from 'react-native';
import theme from 'theme';

export default StyleSheet.create({
  topShadow: {
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowColor: theme.BLACK,
    elevation: 4,
    shadowOpacity: 0.7,
  },
  centerButtonContainer: {
    position: 'absolute',
    bottom: 25,
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: theme.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconStyle: {
    left: 5,
  },
});
