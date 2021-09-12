import { Dimensions, StyleSheet } from "react-native";
import { BACKGROUND_COLOR, WHITE } from "../../constants";

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',
        backgroundColor: BACKGROUND_COLOR,
        color: WHITE,
        width: '100%',
        paddingHorizontal: 20,
    },
    headerLabel: {
        color: '#999999'
    },
    absolute: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
      }
})

export default styles;