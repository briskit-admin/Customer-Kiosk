import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState} from 'react'
import colors from 'constants/colors'


const AutoLogout = ({onLogout, isCartScreen, style}) => {
  const [secondsLeft, setSecondsLeft] = useState(60)

  // useEffect(() => {
  //   let timer = null;
  //   if (secondsLeft > 0) {
  //     timer = setTimeout(() => setSecondsLeft(secondsLeft - 1), 1000)
  //   } else {
  //     onLogout();
  //   }
  //   return () => clearTimeout(timer);
  // }, [secondsLeft, onLogout]);

  // const formatTime = (seconds) => {
  //   const mins = Math.floor(seconds / 60);
  //   const secs = seconds % 60;
  //   return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  // };

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.text}>{isCartScreen ? 'Time remaining' : 'If no activity, logout automatically in'}</Text>
      <Text style={styles.timer}>01.03</Text>
    </View>
  )
}

export default AutoLogout

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.themeLight,
    borderRadius: 12,
    padding: 20,
    alignSelf: 'flex-end',
  },
  text: {
    color: '#3F80B0',
    fontSize: 20,
    fontWeight: '600'
  },
  timer:{
    fontSize: 28,
    color: colors.theme,
    fontWeight: '700'

  }
})