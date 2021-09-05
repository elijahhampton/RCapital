import { Dimensions, StyleSheet, ViewStyle } from "react-native";

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    app: {
        paddingHorizontal: 20
    },
    displayCard: {
        height: 'auto',
        borderRadius: 8,
        elevation: 2,
        padding: 10
    },
    fullScreen: {
        width,
        height,
    },
    paddedView: {
        paddingHorizontal: 20
    }
})

export default styles;