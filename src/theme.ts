import { Colors, DefaultTheme } from 'react-native-paper';
import { SECONDARY_COLOR, WHITE } from './constants';

const theme = {
    ...DefaultTheme,
    roundness: 8,
    colors: {
      ...DefaultTheme.colors,
      primary: SECONDARY_COLOR,
      accent: WHITE,
      text: WHITE,
    },
    
  };

export default theme;