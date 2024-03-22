import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { HomeStackScreen, OrderListStackScreen, ProfileStackScreen } from './StackNavigator';
import { View, StyleSheet, Image, Text } from 'react-native';
import colors from '../constants/colors';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: styles.menuContainer,
        headerShown: false,
      }}
    >
      {/* Home */}
      <Tab.Screen 
        name="HomeStackScreen" 
        component={HomeStackScreen}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate('HomeStackScreen', {
              screen: 'TimeSlotScreen',
            });
          },
        })}
        options={({ route }) => {
          const hideOnScreens = ['TimeSlotScreen', 'RestaurantHomeScreen', 'CartScreen', 'LockerScreen', 'PaymentScreen', 'OrderStatusScreen'];
          const routeName = getFocusedRouteNameFromRoute(route) ?? 'TimeSlotScreen';

          return {
            tabBarStyle: {
              display: hideOnScreens.includes(routeName) ? 'none' : 'flex',
              height: 80,
            },
            tabBarIcon: ({ focused }) => (
              <View style={styles.menuItem}>
                <Image
                  source={require('images/home-icon.png')}
                  resizeMode='contain'
                  style={[styles.menuIcon, { tintColor: focused ? colors.theme : colors.textLight }]} />
                <Text style={[styles.menuText, { color: focused ? colors.theme : colors.textLight }]}>Home</Text>
              </View>
            ),
          };
        }}
      />

      {/* Orders */}
      <Tab.Screen name="OrderListStackScreen" component={OrderListStackScreen}
        options={({ route }) => ({
          tabBarStyle: {
            display: getFocusedRouteNameFromRoute(route) === 'OrderStatusScreen' ? 'none' : 'flex',
            height: 80,
          },
          tabBarIcon: ({ focused }) => (
            <View style={styles.menuItem}>
              <Image
                source={require('images/orders-icon.png')}
                resizeMode='contain'
                style={[styles.menuIcon, { tintColor: focused ? colors.theme : colors.textLight }]} />
              <Text style={[styles.menuText, { color: focused ? colors.theme : colors.textLight }]}>Orders</Text>
            </View>
          )
        })}
      />

      {/* Profile */}
      <Tab.Screen name="ProfileStackScreen" component={ProfileStackScreen}
        options={({ route }) => ({
          tabBarStyle: {
            display: getFocusedRouteNameFromRoute(route) === 'SettingsScreen' ? 'none' : 'flex',
            height: 80,
          },
          tabBarIcon: ({ focused }) => (
            <View style={styles.menuItem}>
              <Image
                source={require('images/user-icon.png')}
                resizeMode='contain'
                style={[styles.menuIcon, { tintColor: focused ? colors.theme : colors.textLight }]} />
              <Text style={[styles.menuText, { color: focused ? colors.theme : colors.textLight }]}>Profile</Text>
            </View>
          )
        })}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  //   menuContainer: {
  //     height: 100,
  //     paddingVertical: 40,
  //     backgroundColor: '#FAFAFA',
  //     borderTopWidth: 1,
  //     borderTopColor: '#E0E0E0',
  //   },
  menuItem: {
    alignItems: 'center',
    paddingVertical: 10,
    width: 100,
  },
  menuIcon: {
    width: 36,
    height: 36,
  },
  menuText: {
    fontSize: 20,
    color: colors.textLight,
  },
});

export default BottomTabNavigator;


