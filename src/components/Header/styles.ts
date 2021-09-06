import { Dimensions, StyleSheet } from "react-native";
import { BACKGROUND_COLOR, WHITE } from "../../constants";

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 20,
        alignSelf: 'center',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',
        backgroundColor: BACKGROUND_COLOR,
        color: WHITE,
        width: Dimensions.get('window').width,
    },
    headerLabel: {
        color: '#999999'
    }
})

export default styles;