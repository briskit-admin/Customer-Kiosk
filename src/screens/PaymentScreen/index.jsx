import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Layout from 'common/Layout'

const PaymentScreen = ({navigation}) => {
  return (
    <Layout
      navigation={navigation}
      backTitle='My Cart'
      bottomBar
      icon={require('images/shopping-bag.png')}
      btnText='Checkout'
      price='400'
      onBtnPress={() => navigation.navigate('OrderStatusScreen')}
    >
      <Text>Order status Screen</Text>
    </Layout>
  )
}

export default PaymentScreen


const styles = StyleSheet.create({})