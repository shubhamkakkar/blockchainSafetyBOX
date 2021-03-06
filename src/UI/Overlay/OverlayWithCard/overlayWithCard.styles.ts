import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
  cardContainer: {
    flex: 1,
    position: 'absolute',
    bottom: -50,
    height: height / 2,
    width: '100%',
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    paddingLeft: 28,
    paddingRight: 28,
    paddingBottom: 80,
    paddingTop: 30,
  },
});
