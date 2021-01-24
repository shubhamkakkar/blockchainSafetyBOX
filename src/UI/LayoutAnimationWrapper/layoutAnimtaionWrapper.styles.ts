import { StyleSheet } from 'react-native';
import theme from 'theme';

export default StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    justifyContent: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 17,
    color: 'black',
    padding: 10,
  },
  buttonTitle: {
    fontWeight: 'bold',
    color: theme.PRIMARY,
    textTransform: 'uppercase',
  },
  buttonContainer: {
    borderRadius: 20,
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    borderRadius: 10,
  },
  childrenContainer: {
    overflow: 'hidden',
    marginTop: 20,
    paddingHorizontal: 5,
  },
});
