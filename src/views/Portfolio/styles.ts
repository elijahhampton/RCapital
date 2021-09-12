import { Dimensions, StyleSheet } from "react-native";
import { BACKGROUND_COLOR, SECONDARY_COLOR, WHITE } from "../../constants";
import globalStyles from '../../styles';
const styles = StyleSheet.create({
    root: {
        ...globalStyles.fullScreen
    },
    linearGradient: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        borderRadius: 8,
        width: '100%',
        height: 'auto',
    },
    portfolioCard: {
        width: '100%',
        marginVertical: 50,
    },
    portfolioCardLeft: {
        flexDirection: 'column',
        flex: 3
    },
    portfolioCardRight: {
        flexDirection: 'column',
        flex: 1,
    },
    visualizeContainer: {
        marginVertical: 80,
    },
    algorandGraphCard: {
        width: Dimensions.get('window').width,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: BACKGROUND_COLOR,
    },
    algorandTitleText: {
        fontSize: 14,
        padding: 0,
         margin: 0,
         color: WHITE,
         fontWeight: 'bold',
         paddingVertical: 4
    },
    algorandTickerText: {
        fontSize: 10,
        color: '#999999',
        padding: 0,
        margin: 0,
    },
    algorandPercentageChangeText: {
        color: SECONDARY_COLOR,
        paddingHorizontal: 10
    },
    visualizeOverviewText: {
        flexDirection: 'row', 
        alignItems: 'center'
    },
    visualizeTickerContainer: {
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'flex-start',
        paddingHorizontal: 10,
    },
    visualizeOverview: {
        position: 'absolute', 
        top: 0, 
        height: 40, 
        width: '100%', 
        alignSelf: 'center', 
        backgroundColor: 'transparent', 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        paddingHorizontal: 20
    },
    algorandLogoContainer: {
        borderRadius: 1000, 
        width: 40, 
        height: 40, 
        alignItems: 'center', 
        justifyContent: 'center',

    },
    visualizeOverviewData: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    rewards: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-evenly',
        marginVertical: 20
    },
    verticalAlign: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    switch: {
        marginVertical: 5
    },
    titles: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginVertical: 10,
    },
    title: {
        color: 'white',
        fontWeight: '600'
    },
    rewardAmount: {
        color: 'white',
        fontWeight: '400'
    },
    rewardOptionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
        marginVertical: 20
    },
    textInput: {
        width: '70%',
        height: 35,
        borderRadius: 20,
        padding: 10,
        backgroundColor: '#999',
        borderColor: 'red',
        alignSelf: 'center',
    },
    inputCharacteristic: {
        color: 'white',
    },
    notice: {
        width: Dimensions.get('window').width,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    absolute: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: 'green',
        width: '100%',
        height: '100%'
      },

})

export default styles;