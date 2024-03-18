import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import AutoLogout from 'common/AutoLogout';
import HomeScreen from 'screens/HomeScreen';
import RestaurantHomeScreen from 'screens/HomeScreen/RestaurantHomeScreen';
import CartScreen from 'screens/CartScreen';
import LockerScreen from 'screens/LockerScreen';
import PaymentScreen from 'screens/PaymentScreen';
import OrderListScreen from 'screens/OrderListScreen';
import OrderStatusScreen from 'screens/OrderListScreen/OrderStatusScreen';
import ProfileScreen from 'screens/ProfileScreen';
import SettingsScreen from 'screens/ProfileScreen/SettingsScreen';


const HomeStack = createStackNavigator();
const OrderListStack = createStackNavigator();
const ProfileStack = createStackNavigator();


export const HomeStackScreen = () => (

    <HomeStack.Navigator
        screenOptions={{
            headerTitleStyle: styles.headerTitle,
            headerBackTitleVisible: false, // Hides the back title next to the back button (iOS)
            gestureEnabled: true, // Enable gesture navigation
            ...TransitionPresets.SlideFromRightIOS,
            headerShown: false,
        }}
    >
        <HomeStack.Screen
            name="HomeScreen"
            component={HomeScreen}
        />
        <HomeStack.Screen
            name="RestaurantHomeScreen"
            component={RestaurantHomeScreen}
        />
        <HomeStack.Screen
            name="OrderStatusScreen"
            component={OrderStatusScreen}
        />
         <HomeStack.Screen
            name="CartScreen"
            component={CartScreen}
        />
         <HomeStack.Screen
            name="LockerScreen"
            component={LockerScreen}
            options={{ title: 'My Cart', headerTitleStyle: styles.headerSmallTitle }}
        />
        <HomeStack.Screen
            name="PaymentScreen"
            component={PaymentScreen}
            options={{ title: 'My Cart', headerTitleStyle: styles.headerSmallTitle }}
        />
    </HomeStack.Navigator>
);

export const OrderListStackScreen = () => (

    <OrderListStack.Navigator
        screenOptions={{
            headerTitleStyle: styles.headerTitle,
            headerBackTitleVisible: false, // Hides the back title next to the back button (iOS)
            gestureEnabled: true,
            ...TransitionPresets.SlideFromRightIOS,
        }}
    >
        <OrderListStack.Screen
            name="OrderListScreen"
            component={OrderListScreen}
            options={{ title: 'Orders' }}
        />
        <OrderListStack.Screen
            name="OrderStatusScreen"
            component={OrderStatusScreen}
            options={{ title: 'Your Order is Confirmed', headerTitleStyle: styles.headerSmallTitle }}
        />
    </OrderListStack.Navigator>
);


export const ProfileStackScreen = () => (
    <ProfileStack.Navigator
        screenOptions={{
            headerTitleStyle: styles.headerTitle,
            gestureEnabled: true,
            ...TransitionPresets.SlideFromRightIOS,
        }}
    >
        <ProfileStack.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            options={{ headerShown: false }}
        />
        <ProfileStack.Screen
            name="SettingsScreen"
            component={SettingsScreen}
            options={{ title: 'Settings', headerTitleStyle: styles.headerSmallTitle }}
        />
    </ProfileStack.Navigator>
);


const styles = StyleSheet.create({
    headerTitle: {
        fontSize: 38,
        fontWeight: 'bold',
    },
    headerSmallTitle: {
        fontSize: 32,
        fontWeight: 'bold',
    }
})
