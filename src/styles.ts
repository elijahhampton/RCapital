import { Dimensions, StyleSheet, ViewStyle } from "react-native";
import { BACKGROUND_COLOR } from "./constants";

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
        flex: 1,
        backgroundColor: BACKGROUND_COLOR
    },
    paddedView: {
        paddingHorizontal: 20
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})

const appbarTheme = {
    colors: {
        primary: BACKGROUND_COLOR
    }
}

export { appbarTheme }
export default styles;