import { Dimensions, StyleSheet } from "react-native";
import { BACKGROUND_COLOR } from "../../constants";
import globalStyles from '../../styles';
const styles = StyleSheet.create({
    root: {
        backgroundColor: BACKGROUND_COLOR,
        ...globalStyles.fullScreen
    }
})

export default styles;