import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import Layout from 'common/Layout'
import { GlobalStyles } from 'constants/GlobalStyles'

const CartScreen = ({navigation}) => {
  const [instructions, setInstructions] = useState('')

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
      <View>
        <Text style={styles.title}>Order Summary</Text>
        <View style={[styles.itemsContainer,GlobalStyles.lightBorder]}>
          
        </View>
      </View>

      <View style={styles.priceContainer}>

      </View>

      <View style={styles.discountContainer}>
        <Text style={styles.title}>Discount code</Text>

      </View>

      <View style={styles.instructions}>
        <Text style={styles.title}>Extra instructions</Text>
        <TextInput
          placeholder='Write your special instructions to the chef..'
          placeholderTextColor={'#737373'}
          style={styles.instructionsText}
          onChangeText={(text) => {
              setInstructions(text);
          }}
          value={instructions} />
      </View>
    </Layout>
  )
}

export default CartScreen


const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: 'black'
  },

})