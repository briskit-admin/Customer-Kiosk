import React from 'react';
import { View, StyleSheet } from 'react-native';

const Layout = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40, // Fixed padding for the whole app
    backgroundColor: '#FFFFFF', // Fixed background color for the whole app
  },
});

export default Layout;
