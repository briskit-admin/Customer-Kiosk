import React, { useState } from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import colors from 'constants/colors';

const Counter = ({ initialValue = 1 }) => {
  const [value, setValue] = useState(initialValue);

  const increment = () => {
    setValue(prevValue => prevValue + 1);
  };

  const decrement = () => {
    setValue(prevValue => prevValue > 0 ? prevValue - 1 : 0);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={decrement} style={styles.button}>
        <Image
          source={require('images/minus.png')}
          style={styles.icon}
        />
      </TouchableOpacity>

      <Text style={styles.value}>{value}</Text>

      <TouchableOpacity onPress={increment} style={styles.button}>
        <Image
          source={require('images/plus.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.themeLight,
    paddingHorizontal: 16,
    paddingRight: 20,
    paddingVertical: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    gap: 4,

  },
  button: {
    
  },
  icon: {
    width: 24, 
    height: 24,
  },
  value: {
    fontSize: 18,
    backgroundColor: 'white',
    color: 'black',
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    borderRadius: 4,
  },
  // ... add other styles if needed
});

export default Counter;
