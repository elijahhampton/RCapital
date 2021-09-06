import React, { ReactNode } from 'react';
import { Dimensions, SafeAreaView, Text, View, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import globalStyles from '../../styles';
import { Caption, Card, Headline, Subheading, Title } from 'react-native-paper';
import { SECONDARY_COLOR, WHITE } from '../../constants';
import { ScrollView } from 'react-native-gesture-handler';
import ValueAccentText from '../../components/ValueAccentText';
import { Chart, Line, Area, HorizontalAxis, VerticalAxis } from 'react-native-responsive-linechart'
import Header from '../../components/Header';
import moment from 'moment';

export default function Portfolio() : ReactNode {
    return (
        <View style={[globalStyles.fullScreen, globalStyles.paddedView]}>
           <Header title='Portfolio' headerLabel={moment(new Date()).format('LL').toString()} />
            <ScrollView>

<Card style={[styles.portfolioCard, globalStyles.displayCard, { padding: 0}]}>
    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={[SECONDARY_COLOR, '#A3D8BC']} style={styles.linearGradient}>
        <View style={styles.portfolioCardLeft}>
            <Caption>
                STAKED FUNDS
            </Caption>
            <ValueAccentText size='large' color='#FFF'>
                50.2384 ALGO
            </ValueAccentText>
        </View>

        <View style={styles.portfolioCardRight}>
            <Caption>
                Profit
            </Caption>
            <Caption style={{color: 'black'}}>
                +2.3%
            </Caption>
            <Caption style={{color: 'black'}}>
            2.34 RCAP
            </Caption>
        </View>
    </LinearGradient>
</Card>

<View style={styles.visualizeContainer}>
    <Title>
        Visualize
    </Title>

    <Card style={[styles.algorandGraphCard, globalStyles.displayCard, { height: 200}]}>
    <Chart
    
  style={{ height: 200, width: Dimensions.get('window').width - 40 }}
  data={[
    { x: -2, y: 15 },
    { x: -1, y: 10 },
    { x: 0, y: 12 },
    { x: 1, y: 7 },
    { x: 2, y: 6 },
    { x: 3, y: 8 },
    { x: 4, y: 10 },
    { x: 5, y: 8 },
    { x: 6, y: 12 },
    { x: 7, y: 14 },
    { x: 8, y: 12 },
    { x: 9, y: 13.5 },
    { x: 10, y: 18 },
  ]}
  padding={{  }}
  xDomain={{ min: -2, max: 10 }}
  yDomain={{ min: 0, max: 20 }}
>
  
  <Area theme={{ gradient: { from: { color: '#fff' }, to: { color: '#fff', opacity: 0 } }}} />
  <Line theme={{ stroke: { color: SECONDARY_COLOR, width: 2 }, scatter: { default: { width: 4, height: 4, rx: 2 }} }} />
</Chart>

<View style={styles.visualizeOverview}>
    <View style={styles.visualizeOverviewData}>
        <Card style={styles.algorandLogoContainer}>
            <Image style={{width: 40, height: 40}} source={require('../../assets/images/algorand_logo.png')} />
        </Card>
        <View style={styles.visualizeTickerContainer}>
        <Text style={styles.algorandTitleText}>
            Algorand
        </Text>
        <Text style={styles.algorandTickerText}>
            ALGO
        </Text>
        </View>
        
    </View>

    <View style={styles.visualizeOverviewText}>
            <Text style={styles.algorandPercentageChangeText}>
                +2.5%
            </Text>
            <ValueAccentText size='small' color='black'>
                $1.06
            </ValueAccentText>
        </View>

</View>
    </Card>
</View>
</ScrollView>
        </View>
    )
}