import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import Layout from 'common/Layout'
import { GlobalStyles } from 'constants/GlobalStyles'
import CustomInput from 'common/CustomInput'
import CustomButton from 'common/CustomButton'
import AutoLogout from 'common/AutoLogout'

const IntroScreen = ({navigation, authenticate}) => {
    
    const [ name, setName] = useState('')
    const [ email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    return (
    <Layout 
        title='Introduce yourself'
    >
        {/* <View style={styles.header}>
            <Text style={styles.headerTitle}>Introduce Yourself</Text>
            <AutoLogout style={styles.autoLogout}/>
        </View> */}
        <View style={GlobalStyles.lightBorder}>
            <CustomInput 
                label='Name'
                placeholder='Full Name'
                onChangeText={(text) => {
                    setName(text)
                }}
                style={styles.input}
                value={name}         
            />
            <CustomInput 
                label='*Phone Number'
                placeholder='+919884713342'
                onChangeText={(text) => {
                    setPhoneNumber(text)
                }}
                notEditable
                style={styles.input}
                value={phoneNumber}         
            />
            <CustomInput 
                label='Email Address'
                placeholder='youremail@host.com'
                onChangeText={(text) => {
                    setEmail(text)
                }}
                style={styles.input}
                value={email}         
            />
        </View>
        <View style={styles.btnContainer}>
            <CustomButton title='Next' onPress={() => navigation.navigate('TimeSlotScreen')}/>
        </View>
    </Layout>
    )
}

export default IntroScreen

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 40,
    },
    headerTitle: {
        fontSize: 38,
        fontWeight: 'bold',
        color: 'black',
    },
    input: {
        marginVertical: 20,
        marginHorizontal: 30,
    },
    btnContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        marginVertical: 0,
        marginHorizontal: 'auto',
        bottom: 10,
        alignItems: 'center',
        paddingHorizontal: 40,
    }
})