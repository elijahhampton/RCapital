import { Dimensions, StyleSheet } from "react-native";
import { SECONDARY_COLOR } from "../../constants";

const styles = StyleSheet.create({
    poolCard: {
        marginHorizontal: 20,
        width: Dimensions.get('window').width - 40,
        marginVertical: 20
    },
    poolCardTopView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center'
    },
    poolTitle: {
        fontWeight: 'bold',
        color: 'black',
    },
    percentFinanced: {
        color: SECONDARY_COLOR
    },
    chip: {
       height: 30,
    },
    chipTextStyle: {
        color: 'black'
    }
})

export default styles;