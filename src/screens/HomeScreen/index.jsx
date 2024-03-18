import { StyleSheet, FlatList } from 'react-native'
import React from 'react'
import Layout from 'common/Layout'
import SearchBar from 'common/SearchBar'
import Restaurant from 'components/restaurant/Restaurant'

const HomeScreen = ({navigation}) => {

  const restaurants = [
    {
      id: '1',
      name: 'Happy Sushi',
      cuisines: ['Japanese', 'Indian', 'Mughal'],
      thumbnail: require('images/restaurant.jpg'),
      rating: 4.5,
    },
    {
      id: '2',
      name: 'Burger Town',
      cuisines: ['American', 'Italian', 'Indian', 'Yemeni'],
      thumbnail: require('images/restaurant.jpg'),
      rating: 4.0,
    },
    {
      id: '3',
      name: 'La Belle',
      cuisines: ['Taiwanese', 'Italian', 'Indian', 'Yemeni'],
      thumbnail: require('images/restaurant.jpg'),
      rating: 4.0,
    },
    {
      id: '4',
      name: 'Hardees',
      cuisines: ['Indonesian', 'Indian', 'Yemeni'],
      thumbnail: require('images/restaurant.jpg'),
      rating: 4.0,
    },
    {
      id: '5',
      name: 'Laffah',
      cuisines: ['American', 'Italian', 'Indian', 'Yemeni'],
      thumbnail: require('images/restaurant.jpg'),
      rating: 4.0,
    },

  ];

  const onPressHandler = (restaurant) => {
      navigation.navigate('RestaurantHomeScreen', {data: restaurant})
  }

  return (
    <Layout
      title='Home'
    >
        <SearchBar style={{marginBottom: 40}} placeholder='Search Restaurants..'/>
        <FlatList
          data={restaurants}
          renderItem={({ item }) => <Restaurant onPress={onPressHandler} data={item} style={styles.card} />}
          keyExtractor={item => item.id}
        />
    </Layout>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
  }
})