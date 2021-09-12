import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    card: {
        padding: 10,
        width: Dimensions.get('window').width - 20
    }
})

export default styles;