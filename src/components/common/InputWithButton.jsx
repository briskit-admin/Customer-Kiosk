import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import colors from 'constants/colors';

const InputWithButton = ({placeholder, onChangeText, value, buttonText, handleValidate }) => {

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholderTextColor={'rgba(0, 0, 0, 0.3)'}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
      />
      <TouchableOpacity style={styles.button} onPress={handleValidate}>
        <Image style={{ width: 20, height: 20 }} source={require('images/tick.png')}/>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingRight: 10,
      paddingLeft: 20,
      paddingVertical: 20,
      position: 'relative',
    },
    input: {
      flex: 1,
      height: 60,
      paddingVertical: 10,
      paddingLeft: 20,
      borderColor: colors.border,
      borderRadius: 6,
      borderWidth: 3,
      marginRight: 10, // Spacing between input and button
      fontSize: 18,
      fontWeight: '600'
    },
    button: {
      position: 'absolute',
      right: 34,
      top: 30,
      bottom: 5,
      paddingVertical: 6,
      paddingHorizontal: 12,
      backgroundColor: colors.theme,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 6,
      height: 40,
      borderRadius: 4,
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
    },
  });
  

export default InputWithButton;
