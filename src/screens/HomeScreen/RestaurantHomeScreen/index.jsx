import { StyleSheet, FlatList, TouchableOpacity, View, Text, Image } from 'react-native'
import React,{ useState } from 'react'
import { GlobalStyles } from 'constants/GlobalStyles'
import Layout from 'common/Layout'
import SearchBar from 'common/SearchBar'
import Add from 'common/Add'
import Counter from 'common/Counter'
import colors from 'constants/colors'


const RestaurantHomeScreen = ({navigation, route}) => {

  const foodCategories = ['Deserts', 'Pizza', 'Starters', 'Beverages', 'Rolls', 'Burgers' ]
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
      name: 'Mac and Cheese',
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

  const Tag = ({text}) => { 
    return (
    <TouchableOpacity style={styles.tag}>
      <Text style={styles.tagText}>{text}</Text>
    </TouchableOpacity>
  )}

  const FoodItem = ({data}) => {
    const [count, setCount] = useState(0)
    const onAdd = () => {
        setCount(prevCount => prevCount + 1 )
    }

    return (
      <View style={[styles.foodItemcontainer, GlobalStyles.lightBorder]}>
          <View style={styles.itemWrap}>
              <Image style={styles.thumbnail} source={data.thumbnail} />
              <View>
                  <Text style={styles.title}>{data.name}</Text>
                  <Text style={styles.price}>{data.price}</Text>
              </View>
          </View>
          {count === 0? <Add onPress={onAdd}/> : <Counter /> }
      </View>
  )}

  return (
    <Layout
      backTitle={route.params.data.name}
      navigation={navigation}
      bottomBar
      price='400'
      icon={require('images/shopping-cart.png')}
      next
      btnText='My Cart'
      onBtnPress={() => navigation.navigate('CartScreen')}
    >
      <SearchBar style={{marginBottom: 30}} placeholder='Search Food..'/>
      <View style={styles.tagContainer}>
        {foodCategories.map((item, index) => {
          return <Tag key={index} text={item}/>
        })}
      </View>
      <FlatList
          data={foodMenu}
          renderItem={({ item }) => <FoodItem data={item}/>}
          keyExtractor={item => item.id}
        />
    </Layout>
  )
}

export default RestaurantHomeScreen

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 20,
  },
  tag: {
    backgroundColor: colors.themeLight,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    alignSelf: 'flex-start',
  },
  tagText: {
    color: colors.theme,
    fontSize: 20,
    fontWeight: '600',
  },
  // fooditem
  foodItemcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 20,
    marginBottom: 40,
},
itemWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,

},
thumbnail: {
    width: 125,
    height: 125,
    resizeMode: 'cover',
    borderRadius: 8,
},
title: {
    fontSize: 32,
    color: 'black',
    fontWeight: '600',
},
price: {
   color: colors.theme,
   fontSize: 18,
   fontWeight: '500',
},
})