import { Dimensions, StyleSheet } from "react-native";
import { BACKGROUND_COLOR, PRIMARY_COLOR, SECONDARY_COLOR, WHITE } from "../../constants";
import globalStyles from '../../styles';
const styles = StyleSheet.create({
    root: {
        backgroundColor: BACKGROUND_COLOR,
        ...globalStyles.fullScreen
    },
    tabs: {
        backgroundColor: BACKGROUND_COLOR,
        color: WHITE,
        elevation: 0
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor: SECONDARY_COLOR,
        color: WHITE
      },
})

export default styles;