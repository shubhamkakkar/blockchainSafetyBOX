import { StyleSheet } from 'react-native';
import theme from 'theme';

export default StyleSheet.create({
  cardStyle: {
    borderRadius: 12,
    backgroundColor: 'white',
    padding: 25,
    paddingLeft: 10,
    paddingRight: 10,
  },
  cardStyleBorder: {
    borderWidth: 1,
    borderColor: '#8EADF0',
  },
  cardLightShadow: {
    shadowColor: theme.LIGHT_BLACK,
    shadowOffset: {
      width: 0,
      height: 22,
    },
    shadowOpacity: 0.50,
    shadowRadius: 41,
    elevation: 5,
  },
  cardBoldShadow: {
    shadowColor: theme.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  hasNoPadding: {
    borderRadius: 8,
    backgroundColor: theme.WHITE,
  },
});
