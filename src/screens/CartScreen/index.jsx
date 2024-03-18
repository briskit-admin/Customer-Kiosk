import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Layout from 'common/Layout'

const CartScreen = ({navigation}) => {
  return (
    <Layout
      navigation={navigation}
      backTitle='My Cart'
      bottomBar
      btnText='Choose Locker'
      next
      price='400'
      onBtnPress={() => navigation.navigate('LockerScreen')}
    >
      <Text>Cart Screen</Text>
    </Layout>
  )
}

export default CartScreen


const styles = StyleSheet.create({})