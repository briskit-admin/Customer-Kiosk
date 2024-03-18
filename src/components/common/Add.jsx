import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import colors from 'constants/colors';

const Add = ({ onPress }) => {
  return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
          <Image style={styles.icon} source={require('images/plus.png')}/>
          <Text style={styles.text}>Add</Text>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.themeLight,
    paddingHorizontal: 22,
    paddingRight: 24,
    paddingVertical: 14,
    borderRadius: 10,
    flexDirection: 'row',
    gap: 4,
    alignSelf: 'center',
  },
  icon: {
    width: 28,
    height: 28,
  },
  text: {
    fontSize: 22,
    fontWeight: '600',
    color: colors.theme,
  },
});

export default Add;
