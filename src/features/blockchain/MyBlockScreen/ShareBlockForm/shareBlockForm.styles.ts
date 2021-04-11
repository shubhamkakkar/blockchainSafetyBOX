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
  },
  textArea: {
    height:200,
    textAlignVertical: 'top',
  },
  textAreaContainer: {
    marginHorizontal: 5,
  },
  baseButton: {
    position:'absolute',
    bottom: 0,
    width: '100%',
    left: 10
  },
  flex: {
    flex: 1,
  }
});
