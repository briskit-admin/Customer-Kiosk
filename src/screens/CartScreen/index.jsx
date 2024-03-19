import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import Layout from 'common/Layout'
import { GlobalStyles } from 'constants/GlobalStyles'
import InputWithButton from 'common/InputWithButton'
import Counter from 'common/Counter'
import colors from 'constants/colors'
import Popup from './DiscountPopup'

const CartScreen = ({ navigation }) => {

  const [instructions, setInstructions] = useState('')
  const [discountCode, setDiscountCode] = useState('')
  const [offerPrice, setOfferPrice] = useState(500)
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleValidate = () => {
    console.log('Validating code:', discountCode);
  };


  const LineItem = () => {
    return (
      <View style={styles.lineItem}>
        <View style={styles.itemWrap}>
          <Text style={styles.itemName}>Burger</Text>
          <View style={styles.priceContainer}>
            {offerPrice && <Text style={[styles.price, { color: 'red', textDecorationLine: 'line-through' }]}>₹{offerPrice}</Text>}
            <Text style={styles.price}>₹400</Text>
          </View>
        </View>
        <Counter />
      </View>
    )
  }

  const BillSummary = () => {
    return (
      <View style={styles.itemsContainer}>
        <View style={styles.row}>
          <Text style={styles.description}>Item(s) total</Text>
          <Text style={styles.amount}>₹150</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.description}>Service cost</Text>
          <Text style={styles.amount}>₹50</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.description}>GST</Text>
          <Text style={styles.amount}>₹20</Text>
        </View>
        <View style={styles.totalRow}>
          <Text style={styles.description}>Total</Text>
          <Text style={[styles.amount]}>₹220</Text>
        </View>
      </View>
    );
  };

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
      <ScrollView>
        {/* Order Summary */}
        <View>
          <Text style={styles.title}>Order Summary</Text>
          <View style={styles.itemsContainer}>
            <LineItem />
            <LineItem />
          </View>
        </View>

        <BillSummary />

        {/* Discount code */}
        <Text style={styles.title}>Discount code</Text>
        <View style={styles.discountContainer}>
          <InputWithButton
            placeholder='Enter Code'
            onChangeText={(text) => {
              setDiscountCode(text);
            }}
            value={discountCode}
            buttonText='Validate'
            handleValidate={handleValidate}
          />
          <TouchableOpacity onPress={() => setPopupVisible(true)} style={styles.button}>
            <Text style={styles.buttonText}>Browse Available Discounts</Text>
          </TouchableOpacity>
        </View>
        <Popup
          isVisible={isPopupVisible}
          onClose={() => setPopupVisible(false)}
        />
        
        {/* Extra Instructions */}
        <Text style={styles.title}>Extra instructions</Text>
        <View style={GlobalStyles.lightBorder}>
          <TextInput
            placeholder='Write your special instructions to the chef..'
            placeholderTextColor={'rgba(0, 0, 0, 0.3)'}
            style={styles.input}
            multiline
            onChangeText={(text) => {
              setInstructions(text);
            }}
            value={instructions} />
        </View>
      </ScrollView>
    </Layout>
  )
}

export default CartScreen


const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: '600',
    color: 'black',
    marginVertical: 20,
  },
  lineItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 24,
    marginHorizontal: 20,
  },
  priceContainer: {
    flexDirection: 'row',
    gap: 6,
  },
  itemName: {
    fontSize: 32,
    color: 'black',
    fontWeight: '600',
  },
  price: {
    color: colors.theme,
    fontSize: 18,
    fontWeight: '500',
  },

  itemsContainer: {
    borderRadius: 10,
    borderColor: colors.border,
    borderWidth: 2,
    marginBottom: 40,
  },

  //Bill summary
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 30,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    borderStyle: 'dashed',
    paddingVertical: 8,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 30,
    paddingVertical: 8,
    borderTopColor: colors.border,
  },
  description: {
    fontSize: 18,
    fontWeight: '600',
    color: '#737373',
    width: '90%',
    textAlign: 'right',
  },
  amount: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.theme,
    width: '10%',
    textAlign: 'left',
  },

  //discount code

  discountContainer: {
    borderRadius: 10,
    borderColor: colors.border,
    borderWidth: 2,
    paddingTop: 20,
    paddingBottom: 30,
    marginBottom: 40,
  },
  button: {
    marginHorizontal: 20,
    backgroundColor: colors.themeLight,
    borderRadius: 6,
    paddingVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.theme,
    fontSize: 18,
  },
  input: {
    fontSize: 18,
    fontWeight: '600',
  }

})