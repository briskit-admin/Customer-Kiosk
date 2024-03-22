import React from 'react';
import { View, FlatList, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Layout from 'common/Layout'
import SearchBar from 'common/SearchBar'
import { GlobalStyles } from 'constants/GlobalStyles';
import colors from 'constants/colors';

const orders = [
  {
    id: '1',
    name: 'Rajdhani Express',
    image: require('images/restaurant.jpg'), 
    date: '2024-03-20T12:00:00Z',
    status: 'Ongoing',
  },
  {
    id: '2',
    name: 'Buhari',
    image: require('images/restaurant.jpg'), 
    date: '2024-03-19T15:45:00Z',
    status: 'Delivered',
  },
  {
    id: '3',
    name: 'The Jain Express',
    image: require('images/restaurant.jpg'), 
    date: '2024-03-18T09:30:00Z',
    status: 'Delivered',
  },
];

const formatDate = (date) => {
  const suffixes = ["th", "st", "nd", "rd"];
  const dateObj = new Date(date);
  const day = dateObj.getDate();
  const month = dateObj.toLocaleString('default', { month: 'long' });
  const year = dateObj.getFullYear();
  let hour = dateObj.getHours();
  const minutes = dateObj.getMinutes();
  const ampm = hour >= 12 ? 'PM' : 'AM';
  
  hour = hour % 12;
  hour = hour ? hour : 12; // the hour '0' should be '12'
  const minutesStr = minutes < 10 ? `0${minutes}` : minutes;
  
  // Determine the appropriate ordinal suffix
  const ordinal = (day % 10) <= 3 && day < 21 ? suffixes[day % 10] : suffixes[0];
  
  return `${day}${ordinal} of ${month}, ${year} at ${hour}:${minutesStr} ${ampm}`;
};

// Sort the orders by date in ascending order
const sortedOrders = orders.sort((b, a) => new Date(a.date) - new Date(b.date));



const OrderListScreen = ({navigation}) => {

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[GlobalStyles.lightBorder, styles.orderItem]}
      onPress={() => navigation.navigate('OrderStatusScreen', { orderId: item.id })}
    >
      <Image source={item.image} style={styles.thumbnail} />
      <View style={styles.infoContainer}>
        <View>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.subtitle}>{formatDate(item.date)}</Text>
        </View>
        <Text style={[styles.status, item.status === 'Ongoing' && {color: '#407305'}]}>{item.status}</Text>
      </View>
    </TouchableOpacity>
  )

  return (
    <Layout
      navigation
      title='Orders'
    >
      <SearchBar style={{marginBottom: 40}} placeholder='Search Restaurants..'/>
      <FlatList
      data={sortedOrders}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
    </Layout>
  )
}

export default OrderListScreen

const styles = StyleSheet.create({
  orderItem: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  thumbnail: {
    width: 125,
    height: 125,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'space-between',
    marginLeft: 20,
    paddingVertical: 4,
  },
  title: {
    fontSize: 32,
    color: 'black',
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.gray,
  },
  status: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.theme,
  },
})