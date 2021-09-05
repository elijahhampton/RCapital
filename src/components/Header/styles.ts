import { StyleSheet } from "react-native";
import { BACKGROUND_COLOR, WHITE } from "../../constants";

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        backgroundColor: BACKGROUND_COLOR,
        color: WHITE,
        paddingTop: 45,
        height: 80,

    }
})

export default styles;