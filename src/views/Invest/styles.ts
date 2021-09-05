import { Dimensions, StyleSheet } from "react-native";
import { BACKGROUND_COLOR, SECONDARY_COLOR } from "../../constants";
import globalStyles from '../../styles';
const styles = StyleSheet.create({
    root: {
        backgroundColor: BACKGROUND_COLOR,
        ...globalStyles.fullScreen
    },
    poolsScrollView: {
        padding: 0,
        width: Dimensions.get('window').width
    },
    accountBalanceView: {
        marginTop: 50
    },
    buyAlgorandCard: {
        alignSelf: 'center',
        width: Dimensions.get('window').width - 40,
        marginVertical: 20
    }
})

export default styles;