import {StyleSheet, Platform} from 'react-native';
import * as defaultStyle from '../../style';
import {Theme} from '../../types';

export default function styleConstructor(theme: Theme = {}) {
  const appStyle = {...defaultStyle, ...theme};
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    innerContainer: {
      flex: 1
    },
    dayNum: {
      fontSize: 28,
      fontWeight: '200',
      fontFamily: appStyle.textDayFontFamily,
      color: appStyle.agendaDayNumColor,
    },
    dayText: {
      fontSize: 14,
      fontWeight: appStyle.textDayFontWeight,
      fontFamily: appStyle.textDayFontFamily,
      color: appStyle.agendaDayTextColor,
      backgroundColor: 'rgba(0,0,0,0)',
      marginTop: Platform.OS === "ios" ? -5 : -20,
    },
    day: {
      width: 63,
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    today: {
      color: appStyle.agendaTodayColor,
    },
    indicator: {
      marginTop: 80
    },
    // @ts-expect-error
    ...(theme['stylesheet.agenda.list'] || {})
  });
}
