import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import Layout from 'common/Layout'
import colors from 'constants/colors';
import { GlobalStyles } from 'constants/GlobalStyles'

const LockerScreen = ({navigation}) => {
  const [selectedId, setSelectedId] = useState(1);
  const locations = [
    { id: 1, title: 'Front lobby' },
    { id: 2, title: "Women's Hostel" },
  ];

  const renderItem = ({ item }) => {
    const isSelected = item.id === selectedId;
    return (
      <TouchableOpacity
        onPress={() => setSelectedId(item.id)}
        style={[styles.item, isSelected && styles.itemSelected]}
      >
        <View style={styles.radioCircle}>
          {isSelected && <View style={styles.innerCircle} />}
        </View>
        <Text style={styles.title}>
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <Layout
      navigation={navigation}
      backTitle='My Cart'
      bottomBar
      price='400'
      btnText='Payment'
      next
      onBtnPress={() => navigation.navigate('PaymentScreen')}
    >
      <Text style={styles.heading}>Available Lockers</Text>
      <View style={GlobalStyles.lightBorder}>
        <FlatList
          data={locations}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
        />
      </View>
      <View style={GlobalStyles.lightBorder}>

      </View>
    </Layout>
  )
}

export default LockerScreen

const styles = StyleSheet.create({
  heading: {
    fontSize: 34,
    fontWeight: '600',
    color: 'black',
    marginVertical: 30,
  },
  item: {
    flexDirection: 'row',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: 'center',
    borderRadius: 4,
  },
  itemSelected: {
    backgroundColor: colors.selectedLightBg,
  },
  radioCircle: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.theme,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  innerCircle: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: colors.theme,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
})