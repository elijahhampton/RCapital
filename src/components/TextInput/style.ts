import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formControl: {
        width: '100%'
    },
    label: {
        marginVertical: 5,
        fontSize: 12,
        color: '#999'
      },
      input: {
        paddingHorizontal: 2,
        paddingVertical: 5,
        color: 'black',
        fontSize: 14
      },
      errorContainer: {
        marginVertical: 5
      },
      errorText: {
        color: 'red',
        fontSize: 13
      }
})

export default styles;