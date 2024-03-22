import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image, Modal } from 'react-native';
import { CreditCardInput } from 'react-native-credit-card-input';
import Layout from 'common/Layout'
import colors from 'constants/colors';
import { GlobalStyles } from '../../constants/GlobalStyles';

const PaymentScreen = ({navigation}) => {
  const [selectedOption, setSelectedOption] = useState('UPI'); // Default selected option
  const [upiId, setUpiId] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handlePayment = () => {
    // handle the payment logic
    // If payment is successful, set paymentSuccess to true
    setPaymentSuccess(true);
  };

  useEffect(() => {
    let timer;
    if (paymentSuccess) {
      // After 3 seconds, navigate to the OrderStatusScreen
      timer = setTimeout(() => {
        navigation.navigate('OrderStatusScreen');
      }, 3000);
    }
    return () => clearTimeout(timer); // Cleanup the timer when the component unmounts or paymentSuccess changes
  }, [paymentSuccess, navigation]);

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  const validateUpi = () => {
    console.log('validated')
  }

  const handleCreditCardInput = (form) => {
    // handle credit card input changes here
    // form.values contains the credit card input details
  };

  const renderRadioButton = (option, types) => (

    <View style={[styles.optionContainer, selectedOption === option && styles.selectedOptionContainer ]}>
      <TouchableOpacity
        style={styles.radioButton}
        onPress={() => handleSelectOption(option)}
      >
        <View style={[styles.outerCircle, selectedOption === option && styles.selectedOuterCircle]}>
          {selectedOption === option && <View style={styles.innerCircle} />}
        </View>
        <View>
          <Text style={styles.optionText}>{option}</Text>
          <Text style={styles.subText}>{types}</Text>
        </View>
      </TouchableOpacity>
      {selectedOption === option && option === 'UPI' && (
        <View style={[styles.inputContainer]}>
          <TextInput
            autoFocus
            style={styles.input}
            onChangeText={setUpiId}
            value={upiId}
            placeholder="Enter UPI ID"
          />
          <TouchableOpacity onPress={validateUpi} style={styles.tickContainer}>
            <Image style={{ height: 24, width: 24}} source={require('images/tick.png')}/>
          </TouchableOpacity>
        </View>
      )}
      {selectedOption === option && (option === 'Debit Card' || option === 'Credit Card') && (
        <CreditCardInput 
          onChange={handleCreditCardInput}
          autoFocus
          requiresName 
          requiresCVC
          allowScroll
          inputContainerStyle={{ borderColor: 'gray' , borderBottomWidth: 1,}}
          inputStyle={{ fontSize: 18, fontWeight: '600' }}
          placeholderColor={colors.bgLight}
          labelStyle={{ color: 'gray', fontSize: 16, marginBottom: 6}}
        />
      )}
    </View>
  )


  return (
    <Layout
      navigation={navigation}
      backTitle='My Cart'
      bottomBar
      icon={require('images/shopping-bag.png')}
      btnText='Checkout'
      price='400'
      onBtnPress={handlePayment}
    >      
      <Text style={styles.heading}>Choose payment method</Text>
      <View style={GlobalStyles.lightBorder}>
        {renderRadioButton('UPI', 'Google Pay, PayTM, PayMe')}
        {renderRadioButton('Debit Card', 'RuPay, Visa, Mastercard, AmEx')}
        {renderRadioButton('Credit Card', 'Visa, Mastercard, AmEx')}
    </View>
    <Modal
        animationType="fade"
        transparent={true}
        visible={paymentSuccess}
        onRequestClose={() => {
          setPaymentSuccess(false); // This will close the modal when the back button is pressed on Android.
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image style={styles.successImage} source={require('images/success.png')}/>
            <Text style={styles.successText}>Success!</Text>
            <Text style={styles.successSubText}>Your order has been received.</Text>
          </View>
        </View>
      </Modal>
    </Layout>
  )
}

export default PaymentScreen


const styles = StyleSheet.create({
  heading: {
    fontSize: 34,
    fontWeight: '600',
    color: 'black',
    marginVertical: 30,
  },
  container: {
    // padding: 30,
  },
  optionContainer: {
    marginBottom: 30,
    marginHorizontal: 20,
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  selectedOptionContainer: {
    backgroundColor: colors.selectedLightBg,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  outerCircle: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.theme,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  selectedOuterCircle: {
    borderColor: colors.theme, 
  },
  innerCircle: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: colors.theme,
  },
  optionText: {
    fontSize: 24,
    color: 'black',
    fontWeight: '600'
  },
  inputContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 4,
    paddingLeft: 10,
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    padding: 10,
    paddingLeft: 20,
    borderWidth: 2,
    borderColor: colors.border,
    borderRadius: 6,
    backgroundColor: '#fff',
    marginVertical: 10,
  },
  subText: {
    color: colors.theme,
    fontWeight: '600',
    fontSize: 18,
  },
  inputContainer: {
    position: 'relative',
  },
  tickContainer: {
    padding: 6,
    backgroundColor: colors.theme,
    borderRadius: 4,
    position: 'absolute',
    right: 10,
    top: 18,
  },
  // success popup
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.theme,
  },
  modalView: {
    borderRadius: 20,
    alignItems: 'center',
  },
  successImage: {
    width: 450,
    height: 450,
  },
  successText: {
    fontSize: 44,
    fontWeight: 'bold',
    color: 'white',
    marginTop: -60,
    marginBottom: 15,
  },
  successSubText: {
    fontSize: 22,
    fontWeight: '600',
    color: 'rgba(255,255,255,0.4)',
  }
})