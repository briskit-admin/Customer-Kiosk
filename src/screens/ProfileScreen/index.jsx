import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Layout from 'common/Layout'
import colors from 'constants/colors'
import { GlobalStyles } from 'constants/GlobalStyles'
import { useNavigation } from '@react-navigation/native'

const ProfileScreen = () => {
  const navigation = useNavigation()

  const handleSettingsPress = () => {
    navigation.navigate('SettingsScreen')
  };

  const handleCallCustomerCarePress = () => {

  };

  const handleLogoutPress = () => {
    // navigation.navigate('LoginScreen')
  };

  return (
    <Layout
      showMenu
      navigation={navigation}
      title='Profile'
    >
      <View style={styles.container}>
        <Image source={require('images/profile-placeholder.png')} style={styles.userImage} />
        <Text style={styles.userName}>Raghav Handa</Text>
        <View style={styles.buttonGroup}>
          <TouchableOpacity style={[styles.button, styles.topButton]} onPress={handleSettingsPress}>
            <Text style={styles.buttonText}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleCallCustomerCarePress}>
            <Text style={styles.buttonText}>Call customer care</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={[GlobalStyles.lightBorder, styles.button]} onPress={handleLogoutPress}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </Layout>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    // paddingTop: 60,
  },
  userImage: {
    width: 133,
    height: 133,
    borderRadius: 100,
    marginVertical: 20,
  },
  userName: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  buttonGroup: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.border,
    // alignSelf: 'stretch',
    width: '50%',
    marginVertical: 10,
  },
  button: {
    width: '50%',
    padding: 15,
    marginTop: 10,
  },
  topButton: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  buttonText: {
    fontSize: 22,
    fontWeight: '600',
    color: colors.theme,
  },
})