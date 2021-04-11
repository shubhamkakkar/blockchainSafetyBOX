import { StyleSheet } from 'react-native';
import theme from 'theme';
// @ts-ignore
import { DEFAULT_VERTICAL_MARGIN } from 'constants';

export default StyleSheet.create({
    container: {
    },
    dateSlimSectionHeader: {
        backgroundColor: theme.GREY + 50,
        padding: DEFAULT_VERTICAL_MARGIN / 2,
    },
    cardDescription: {
        paddingTop: DEFAULT_VERTICAL_MARGIN / 2,
        borderBottomWidth: 0.5,
        borderBottomColor: theme.GREY,
        marginLeft: DEFAULT_VERTICAL_MARGIN / 2,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    spaceBetween: {
        justifyContent: 'space-between',
    },
    hMargin5: {
        marginHorizontal: 5,
    },
    tMargin5: {
        marginTop: 5,
    },
});
