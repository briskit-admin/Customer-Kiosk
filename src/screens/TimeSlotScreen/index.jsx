import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import Layout from 'common/Layout'
import CustomButton from 'common/CustomButton'
import { GlobalStyles } from 'constants/GlobalStyles'
import colors from 'constants/colors'

const TimeSlotScreen = () => {
    const [timeSlots, setTimeSlots] = useState([]);
    const [selectedTime, setSelectedTime] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
  
    useEffect(() => {
      const currentTime = new Date();
      const minutesToNextQuarter = 15 - (currentTime.getMinutes() % 15);
      const nextQuarter = new Date(currentTime.getTime() + minutesToNextQuarter * 60000);
  
      populateTimeSlots(nextQuarter);
      setSelectedTime(formatTime(nextQuarter)); // Set the initial selected time
    }, []);
  
    const populateTimeSlots = (startFromTime) => {
        const slots = [];
        const endOfDay = new Date(startFromTime);
        endOfDay.setHours(23, 30); // Set the cutoff time to 11:30 PM
      
        for (let i = 0; i < 96; i++) {
          const timeSlot = new Date(startFromTime.getTime() + i * 15 * 60000);
          if (timeSlot <= endOfDay) {
            slots.push(formatTime(timeSlot));
          } else {
            break; // Exit the loop if the time exceeds 11:30 PM
          }
        }
        setTimeSlots(slots);
      };
  
    const formatTime = (date) => {
      return date.toTimeString().substring(0, 5);
    };
  
    const handleSelectTime = (time) => {
      setSelectedTime(time);
      setShowDropdown(false); // Close the dropdown
    };

    return (
        <Layout
            title='Choose a Time slot'
        >
            <View style={[GlobalStyles.lightBorder, {paddingHorizontal: 40, paddingVertical: 50}]}>
                <Text style={styles.title}>Set your pickuptime</Text>
                <Text style={styles.text}>Let us know when would like to pick up your food from this station and we’ll curate the listing of available restaurants at your selected time accordingly.</Text>

                {/* Time slot dropdown */}  
                    <Text style={styles.label}>Pickup Time</Text>
                    <TouchableOpacity style={styles.dropdown} onPress={() => setShowDropdown(!showDropdown)}>
                        <Text style={styles.time}>{selectedTime}</Text>
                        <Image style={styles.icon} source={require('images/dropdown.png')} />
                    </TouchableOpacity>
                    {showDropdown && (
                        <FlatList
                            data={timeSlots}
                            renderItem={({ item }) => (
                                <TouchableOpacity style={styles.dropdownItem} onPress={() => handleSelectTime(item)}>
                                    <Text style={styles.time}>{item}</Text>
                                </TouchableOpacity>
                            )}
                            keyExtractor={item => item}
                            contentContainerStyle={{ paddingBottom: 400}}
                        />
                    )}
            </View>

            <View style={styles.btnContainer}>
                <CustomButton title='Get Started' onPress={() => console.log('pressed')} />
            </View>
        </Layout>
    )
}

export default TimeSlotScreen

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: '600',
        color: 'black',
        marginBottom: 20,
    },
    text: {
        fontSize: 20,
        fontWeight: '600',
        color: '#575757',
        marginBottom: 30,
    },
    label: {
        fontSize: 22,
        fontWeight: '600',
        color: 'black',
        marginBottom: 10,
    },
    dropdown: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 3,
        borderRadius: 8,
        borderColor: 'rgba(171, 171, 171, 0.29)',
        padding: 16,
    },
    time: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.theme,
    },
    icon: {
      width: 32,
      height: 32,
    },
    dropdownItem: {
        alignSelf: 'flex-start',
        paddingLeft: 20,
        paddingTop: 4,
    },
    btnContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        marginVertical: 0,
        paddingHorizontal: 40,
        marginHorizontal: 'auto',
        bottom: 0,
        alignItems: 'center',
    }
})