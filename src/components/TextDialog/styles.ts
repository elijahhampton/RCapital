import { StyleSheet } from "react-native";
import { SECONDARY_COLOR } from "../../constants";

const styles = StyleSheet.create({
    labelStyle: {
        color: SECONDARY_COLOR
    }
})

const textDialogTheme = {
    colors: {
        text: SECONDARY_COLOR,
    }
}

export { textDialogTheme }
export default styles;