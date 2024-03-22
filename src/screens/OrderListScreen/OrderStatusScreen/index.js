import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Layout from 'common/Layout'

const OrderStatusScreen = ({navigation}) => {
  const handleLogout = () => {
    console.log('logged out')
  }

  const callCustomerCare = () => {
    console.log('called')
  }

  return (
    <Layout
      navigation={navigation}
      title='Your Order is Confirmed'
      title2={`Here's what happens next:`}
      bottomBar
      btnText='Logout'
      onBtnPress={handleLogout}
      leftBtnText='Call Customer care'
      iconLeft={require('images/phone.png')}
      onLeftBtnPress={callCustomerCare}
    >
      <Text>OrderStatusScreen</Text>
    </Layout>
  )
}

export default OrderStatusScreen

const styles = StyleSheet.create({})