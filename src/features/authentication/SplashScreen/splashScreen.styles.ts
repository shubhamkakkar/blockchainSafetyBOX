import { StyleSheet } from 'react-native';
import theme from 'theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.WHITE,
  },
  lottieContainer: {
    flex: 2,
  },
  appNameContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appNameText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: theme.PRIMARY,
  },
});
