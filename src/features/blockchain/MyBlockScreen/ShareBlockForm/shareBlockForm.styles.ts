import { StyleSheet } from 'react-native';
// @ts-ignore
import { DEFAULT_HORIZONTAL_PADDING } from 'constants';
import theme from "theme";

export default StyleSheet.create({
  spacer: {
    padding: DEFAULT_HORIZONTAL_PADDING / 2,
  },
  searchItem: {
    borderRadius: 10,
    backgroundColor: theme.PRIMARY + 20,
    padding: DEFAULT_HORIZONTAL_PADDING / 2,
  },
  marginBottom10:{
    marginBottom: 10,
  }
});
