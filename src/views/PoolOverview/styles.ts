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
        color: '#fff',
        fontSize: 17,
        fontWeight: '500',
        paddingVertical: 5
    },
    subLabel: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: 14
    },
    tabs: {
        backgroundColor: BACKGROUND_COLOR,
        color: WHITE,
        elevation: 0
    },
})
 export default styles;