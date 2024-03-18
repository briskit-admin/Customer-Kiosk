import { StyleSheet, FlatList } from 'react-native'
import React from 'react'
import FoodItem from 'components/restaurant/FoodItem'
import Layout from 'common/Layout'
import SearchBar from 'common/SearchBar'

const RestaurantHomeScreen = ({navigation, route}) => {

  const foodMenu = [
    {
      id: '1',
      name: 'Reshmi kebab',
      thumbnail: require('images/food.jpg'),
      price: '₹320',
    },
    {
      id: '2',
      name: 'Burger',
      thumbnail: require('images/food.jpg'),
      price: '₹310',
    },
    {
      id: '3',
      name: 'Black Forest',
      thumbnail: require('images/food.jpg'),
      price: '₹340',
    },
    {
      id: '4',
      name: 'Macn and Cheese',
      thumbnail: require('images/food.jpg'),
      price: '₹120',
    },
    {
      id: '5',
      name: 'Sandwich',
      thumbnail: require('images/food.jpg'),
      price: '₹80',
    },
  ];

  const onPressHandler = () => {
    console.log('added')
  }

  return (
    <Layout>
      <SearchBar style={{marginBottom: 40}} placeholder='Search Food..'/>
      <FlatList
          data={foodMenu}
          renderItem={({ item }) => <FoodItem onPress={onPressHandler} data={item} style={styles.card} />}
          keyExtractor={item => item.id}
        />
    </Layout>
  )
}

export default RestaurantHomeScreen

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
  }
})