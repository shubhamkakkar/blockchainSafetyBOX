import { StyleSheet, Dimensions } from 'react-native';
import theme from 'theme';
// @ts-ignore
import { DEFAULT_HORIZONTAL_PADDING, FONT_SIZES } from 'constants';

const { width, height } = Dimensions.get('screen');

export default StyleSheet.create({
  flex: {
    flex: 1,
  },
  arcBackground: {
    backgroundColor: theme.PRIMARY,
    borderBottomEndRadius: width,
    borderBottomStartRadius: width,
    transform: [{ scale: 1.5 }],
    width,
    height: height / 4,
    position: 'absolute',
  },
  formContainer: {
    marginHorizontal: 20,
    marginTop: 20,
    flex: 1,
  },
  formCardContainer: {
    flex: 1,
    backgroundColor: theme.WHITE,
    borderRadius: 10,
    shadowColor: theme.GREY,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 25,
    elevation: 5,
    padding: DEFAULT_HORIZONTAL_PADDING,
  },
  switchFormTypeContainer: {
    marginTop: 10,
    alignItems: 'flex-end',
    marginRight: -5,
  },
  switchFormButton: {
    backgroundColor: theme.WHITE,
    borderWidth: 0,
  },
  switchFormButtonText: {
    color: theme.PRIMARY,
    fontWeight: 'bold',
  },
  spacer: {
    marginVertical: 15,
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: FONT_SIZES.LARGE_TEXT_ALTERNATIVE,
    color: theme.LIGHT_BLACK,
  },
});
