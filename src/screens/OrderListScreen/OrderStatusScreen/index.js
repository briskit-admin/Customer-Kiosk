import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React, { useState } from 'react'
import Layout from 'common/Layout'
import colors from 'constants/colors'
import CustomButton from 'common/CustomButton'
import { GlobalStyles } from '../../../constants/GlobalStyles'

const OrderStatusScreen = ({navigation}) => {

  // style={{fontWeight: 'bold', color: currentStep? '#fff' : '#000'}

  const [currentStep, setCurrentStep] = useState(3);

  const handleLogout = () => {
    console.log('logged out')
  }

  const callCustomerCare = () => {
    console.log('called')
  }

  // Render each step
  const renderStep = (stepNumber, title, description, isLast) => (
    <View style={styles.stepContainer}>
      <View style={styles.iconContainer}>
        <View
          style={[
            styles.stepNumberContainer,
            currentStep >= stepNumber ? styles.activeStepNumberContainer : {},
          ]}
        >
          {currentStep >= stepNumber ? (
            <Image style={{ height: 34, width: 34}}source={require('images/tick.png')}/>
          ) : (
            <Text style={styles.stepCheckMark}>{stepNumber}</Text>
          )}
        </View>
        {!isLast && (
          <View
            style={[
              styles.dashLine,
              currentStep > stepNumber ? styles.activeDashLine : {},
              currentStep === stepNumber-3 ? styles.lastDashLine : {},
            ]}
          />
        )}
      </View>
      <View style={styles.stepContent}>
        <Text style={styles.stepTitle}>{title}</Text>
        <Text style={styles.stepDescription}>{description}</Text>
      </View>
    </View>
  )

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
      <View style={styles.container}>
        {renderStep(1, 'Order Placed', 'Your order has been successfully placed.', false)}
        {renderStep(2, 'Delivery to Locker', "Sit back and relax. We're getting your food delivered to the chosen Locker station.", false)}
        {renderStep(3, 'Receive Your PIN by SMS', "You'll get a text message with a PIN once your order is safely in the locker.", false)}
        {renderStep(4, 'Pick Up Your Order', 'Enter the PIN at the locker to retrieve your delicious meal. Enjoy it fresh and at the perfect temperature!', true)}
      </View>
      <CustomButton title='View all Orders' style={{marginTop: 40}} onPress={() => navigation.navigate('OrderListStackScreen', {screen: 'OrderListScreen'})} />
    </Layout>
  )
}

export default OrderStatusScreen

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: colors.border,
    borderRadius: 4,
    marginTop: 40,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  stepContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 10,
  },
  stepNumberContainer: {
    width: 90,
    height: 90,
    borderRadius: 100,
    borderColor: colors.theme,
    borderWidth: 2,
    backgroundColor: colors.themeLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeStepNumberContainer: {
    backgroundColor: colors.theme,
  },
  dashLine: {
    height: 30,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: colors.themeLight,
  },
  activeDashLine: {
    borderColor: colors.theme,
  },
  stepContent: {
    flex: 1,
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginTop: 10,
  },
  stepTitle: {
    fontWeight: 'bold',
    fontSize: 26,
    color: 'black',
    marginBottom: 2,
  },
  stepDescription: {
    color: colors.theme,
    fontSize: 18,
    fontWeight: '600',
  },
  stepCheckMark: {
    fontSize: 40,
    fontWeight: '600',
    color: colors.theme,
  },
  lastDashLine: {
    // borderColor: 'transparent',
  },
})