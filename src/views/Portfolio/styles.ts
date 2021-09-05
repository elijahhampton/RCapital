import { Dimensions, StyleSheet } from "react-native";
import { BACKGROUND_COLOR } from "../../constants";
import globalStyles from '../../styles';
const styles = StyleSheet.create({
    root: {
        backgroundColor: BACKGROUND_COLOR,
        ...globalStyles.fullScreen
    },
    linearGradient: {
        position: 'absolute',
        flex: 1,
        padding: 10,
        borderRadius: 8,
        width: '100%',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',
    },
    portfolioCard: {
        width: '100%',
        marginVertical: 50,
    },
    portfolioCardLeft: {
        flexDirection: 'column',
        flex: 3
    },
    portfolioCardRight: {
        flexDirection: 'column',
        flex: 1,
    },
    visualizeContainer: {
        marginVertical: 50,
    },
    algorandGraphCard: {
        width: '100%',
        flexDirection: 'column'
    }
})

export default styles;