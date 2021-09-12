import { Dimensions, StyleSheet } from "react-native";
import { BACKGROUND_COLOR, WHITE } from "../../constants";

const styles = StyleSheet.create({
    root: {
        flex: 1,
        width: '100%',
        alignItems: 'center', 
        justifyContent: 'center'
    },
    section: {
        width: Dimensions.get('window').width,
    },
    titleStyle: {
        color: 'white'
    },
    descriptionStyle: {
        color: 'white'
    }
})

const appbarTheme = {
    colors: {
        primary: BACKGROUND_COLOR
    }
}

const listItemTheme = {
    colors: {
        primary: WHITE
    }
}

export { appbarTheme, listItemTheme }
export default styles