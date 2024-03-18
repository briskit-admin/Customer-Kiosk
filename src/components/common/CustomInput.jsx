import React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';

const CustomInput = ({ placeholder, value, onChangeText, style, label, notEditable }) => (
  <View style={style}>
  {label && 
    <View>
      <Text style={styles.label}>{label}</Text>
    </View> }
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={'rgba(151, 151, 151, 0.49)'}
      value={value}
      onChangeText={onChangeText}
      style={[styles.input, notEditable && {backgroundColor: 'rgba(171, 171, 171, 0.29)'}]}
      readOnly={notEditable}
    />
  </View>
);

const styles = StyleSheet.create({
  input: {
    borderColor: '#DDDDDD',
    borderWidth: 2,
    borderRadius: 8,
    padding: 20,
    marginVertical: 6,
    fontSize: 20,
    color: 'black',
    fontWeight: '600',
  },
  label: {
    fontSize: 22,
    color: 'black',
    fontWeight: '600',
    marginBottom: 6,
  }
});

export default CustomInput;