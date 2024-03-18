import React, { useRef } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import colors from 'constants/colors'

const SearchBar = ({ placeholder, onSearch, style }) => {
  const inputRef = useRef(null);

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        onPress={() => inputRef.current.focus()}
        style={styles.iconContainer}
      >
        <Image
          source={require('images/search.png')} // Replace with your search icon
          style={styles.icon}
        />
      </TouchableOpacity>
      <TextInput
        ref={inputRef}
        onChangeText={onSearch}
        placeholder={placeholder}
        style={styles.input}
        clearButtonMode="while-editing" // iOS only
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 72,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    paddingLeft: 16,
    borderColor: colors.border,
    borderWidth: 2,
    marginTop: 10,
  },
  iconContainer: {
    marginRight: 20,
  },
  icon: {
    width: 32,
    height: 32,
  },
  input: {
    flex: 1,
    paddingVertical: 8,
    fontSize: 22,
    color: '#333',
  },
});

export default SearchBar;
