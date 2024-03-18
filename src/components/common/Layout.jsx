import React from 'react';
import { View, StyleSheet } from 'react-native';
import AutoLogout from './AutoLogout';

const Layout = ({ children }) => {
  return (
  <View style={styles.container}>
    {/* <AutoLogout style={styles.autoLogout}/> */}
    {children}
  </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: '#FFFFFF',
  },
  autoLogout: {
    position: 'absolute',
    top: 10,
    right: 10,
  }
});

export default Layout;
