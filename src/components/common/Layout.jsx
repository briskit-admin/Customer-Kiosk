import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import AutoLogout from './AutoLogout';
import BottomBar from './BottomBar';
import colors from 'constants/colors';

const Layout = (
  {
    children,
    navigation,
    title,
    title2,
    backTitle,
    onBtnPress,
    isCartScreen,
    bottomBar,
    price,
    icon,
    next,
    btnText,
    iconLeft,
    leftBtnText,
    onLeftBtnPress
  }) =>

   (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
    >
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          {backTitle ?
            <View style={styles.headerLeft}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image style={styles.backBtn} source={require('images/back.png')} />
              </TouchableOpacity>
              <Text style={styles.backTitle}>{backTitle}</Text>
            </View> :
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{title}</Text>
              {title2 && <Text style={styles.title2}>{title2}</Text>}
            </View>
          }
          <AutoLogout isCartScreen={isCartScreen} style={styles.autoLogout} />
        </View>
        {children}
      </View>
      {bottomBar &&
        <View style={styles.bottomBarContainer}>
          {price &&
            <View style={styles.leftSection}>
              <Text style={styles.total}>Total</Text>
              <Text style={styles.price}>{`₹${price}`}</Text>
            </View>}
          {leftBtnText &&
            <TouchableOpacity style={styles.btnContainer} onPress={onLeftBtnPress}>
              <Image source={iconLeft} style={styles.iconLeft} />
              <Text style={styles.btnText}>{leftBtnText}</Text>
          </TouchableOpacity>
          }
          {btnText &&
            <View style={styles.rightSection}>
              <TouchableOpacity style={styles.btnContainer} onPress={onBtnPress}>
                {icon && <Image source={icon} style={styles.icon} />}
                <Text style={styles.btnText}>{btnText}</Text>
                {next && <Image style={styles.next} source={require('images/next.png')} />}
              </TouchableOpacity>
            </View>}
        </View>}
    </KeyboardAvoidingView>
  )

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  backBtn: {
    width: 64,
    height: 64,
  },
  backTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  titleContainer: {
    flexDirection: 'column'
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    color: 'black',
  },
  title2: {
    color: colors.theme,
    fontSize: 20,
    fontWeight: '600'
  },
  // bottom bar
  bottomBarContainer: {
    backgroundColor: colors.theme,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 40,
    paddingVertical: 15,
  },
  total: {
    fontSize: 22,
    fontWeight: '600',
    color: '#D8D8D8',
  },
  price: {
    fontSize: 44,
    fontWeight: 'bold',
    color: 'white',
  },
  // bottom bar button
  rightSection: {
    flex: 1,
  },

  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    backgroundColor: '#3F80B0',
    borderRadius: 10,
    borderWidth: 4,
    borderColor: '#9CDCFF',
    paddingHorizontal: 34,
    paddingVertical: 14,
    gap: 20,
  },
  icon: {
    width: 28,
    height: 28,
  },
  next: {
    width: 22,
    height: 22,
  },
  btnText: {
    color: '#9CDCFF',
    fontSize: 26,
    fontWeight: 'bold',
  },
  iconLeft: {
    tintColor: '#9CDCFF',
    width: 28,
    height: 28,
  }
})

export default Layout;
