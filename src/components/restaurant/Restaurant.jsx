import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { GlobalStyles } from 'constants/GlobalStyles'
import colors from 'constants/colors'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Restaurant = ({data, style, onPress}) => {
    return (
        <TouchableOpacity onPress={() => onPress(data)} style={[styles.container, GlobalStyles.lightBorder, style]}>
            <Image style={styles.thumbnail} source={data.thumbnail} />
            <View>
                <Text style={styles.title}>{data.name}</Text>
                <View style={styles.cuisineContainer}>
                {data.cuisines.map((item, index) => {
                    return (
                        <Text key={index} style={styles.cuisine}>{item}{index < data.cuisines.length - 1 && ', '}</Text>
                    )
                })}
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Restaurant

const styles = StyleSheet.create({
    container: {
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
    cuisineContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    cuisine: {
       color: colors.theme,
       fontSize: 18,
       fontWeight: '500',
    }
})