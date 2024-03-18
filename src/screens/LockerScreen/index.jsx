import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Layout from 'common/Layout'

const LockerScreen = ({navigation}) => {
  return (
    <Layout
      navigation={navigation}
      backTitle='My Cart'
      bottomBar
      price='400'
    >
      <Text>Locker Screen</Text>
    </Layout>
  )
}

export default LockerScreen

const styles = StyleSheet.create({})