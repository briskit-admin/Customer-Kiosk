import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import colors from '../../../constants/colors';
import Layout from 'common/Layout';


const SettingsScreen = ({navigation}) => {
  const [name, setName] = useState('Kanchana Naidu')
  const [profileImage, setProfileImage] = useState(null)

  // Function to handle name change
  const handleNameChange = (text) => {
    setName(text);
  };

  return (
    <Layout backTitle='Settings' navigation={navigation}>
      <View style={styles.container}>
      <View style={{ width: '50%'}}>
        <Image source={require('images/profile-placeholder.png')} style={styles.userImage} />
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={handleNameChange}
        />

        <Text style={styles.label}>Phone Number</Text>
        <View style={styles.phoneNum}>
          <Text style={styles.phoneNumText}>9894565342</Text>
        </View>
        </View>
        {/* <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Save Changes</Text>
        </TouchableOpacity> */}
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userImage: {
    width: 133,
    height: 133,
    borderRadius: 100,
    marginVertical: 20,
    alignSelf: 'center',
  },
  label: {
    alignSelf: 'flex-start',
    marginBottom: 5,
    color: colors.text,
    fontWeight: '600',
    fontSize: 15,
  },
  input: {
    width: '100%',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: colors.theme,
    padding: 8,
    paddingLeft: 14,
    marginBottom: 20,
    color: colors.theme,
    fontSize: 14,
    fontWeight: '600',
  },
  phoneNum: {
    width: '100%',
    padding: 16,
    paddingLeft: 14,
    backgroundColor: colors.lightGray,
    borderRadius: 5,
    marginBottom: 10,
  },
  phoneNumText: {
    color: colors.theme,
    fontSize: 14,
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
});

export default SettingsScreen;
