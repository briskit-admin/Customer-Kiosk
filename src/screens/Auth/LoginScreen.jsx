import React, { useState } from 'react';
import { View, Text, TextInput, ImageBackground, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView } from 'react-native';
import colors from 'constants/colors';
import auth from '@react-native-firebase/auth';

let confirmationObject = null;

async function sendOtp(phoneNumber) {
    try {
        const confirmation = await auth().signInWithPhoneNumber(phoneNumber, true); // `true` for invisible reCAPTCHA
        console.log('OTP sent');
        confirmationObject = confirmation;
    } catch (error) {
        console.error('Failed to send OTP:', error);
        throw error;
    }
}

async function verifyOtp(confirmation, code) {
    try {
        const result = await confirmation.confirm(code);
        console.log('User authenticated:', result.user);
    } catch (error) {
        console.error('Failed to verify OTP:', error);
        throw error;
    }
}

const LoginScreen = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');
    const isButtonDisabled = phoneNumber.length < 10;
    const isButton2Disabled = otp.length < 6;
    const [loginScreen, setLoginScreen] = useState(false)

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <ImageBackground
                source={require('images/home.png')}
                style={styles.backgroundImage}
            >
                <View style={styles.content}>
                    <Image style={styles.logo} source={require('images/logo.png')} />
                    <View style={{ paddingLeft: 30, paddingBottom: 4 }}>
                        <Text style={styles.tagline1}>Quick & Instant Food Delivery for</Text>
                    </View>
                    <Text style={styles.tagline2}> A Fast Paced World</Text>

                    {loginScreen ?

                        <>
                            <View style={styles.inputContainer}>
                                <View style={[styles.phoneNumberInput, { flex: 1 }]}>
                                    <Text style={styles.code}>+91</Text>
                                </View>
                                <TextInput
                                    placeholder='Your Phone Number'
                                    placeholderTextColor={'rgba(255,255,255,0.25)'}
                                    keyboardType='phone-pad'
                                    inputMode='numeric'
                                    maxLength={10}
                                    style={[styles.phoneNumberInput, { paddingLeft: 24 }]}
                                    onChangeText={(text) => {
                                        const filteredText = text.replace(/[^0-9]/g, '');
                                        setPhoneNumber(filteredText);
                                    }}
                                    value={phoneNumber} />
                            </View>
                            <View style={{ width: '100%', paddingHorizontal: 40, alignItems: 'center' }}>
                                <TouchableOpacity
                                    style={[styles.button, isButtonDisabled && styles.buttonDisabled]}
                                    onPress={() => {
                                        sendOtp(`+91${phoneNumber}`);
                                        setLoginScreen(false)
                                    }}
                                    disabled={isButtonDisabled}
                                >
                                    <Text style={[styles.code, isButtonDisabled && { color: 'rgba(255,255,255,0.15)', fontSize: 28 }]}>Continue</Text>
                                </TouchableOpacity>
                            </View>
                        </> :
                        <> 
                            <View>
                                <Text style={styles.otpMessage}>`OTP has been sent to +91{phoneNumber}`</Text>
                            </View>
                            <View style={styles.inputContainer}>
                                <TextInput
                                    placeholder='Enter OTP'
                                    placeholderTextColor={'rgba(255,255,255,0.25)'}
                                    keyboardType='phone-pad'
                                    inputMode='numeric'
                                    maxLength={6}
                                    style={[styles.phoneNumberInput, { paddingLeft: 24 }]}
                                    onChangeText={(text) => {
                                        const filteredText = text.replace(/[^0-9]/g, '');
                                        setOtp(filteredText);
                                    }}
                                    value={otp} />
                            </View>

                            <View style={styles.dualButtonsContainer}>
                                <View style={styles.dualButton}>
                                    <TouchableOpacity
                                        style={[styles.button, {backgroundColor: colors.bgLight }] }
                                        onPress={() => {
                                            sendOtp(`+91${phoneNumber}`);
                                            setLoginScreen(false)
                                        }}
                                        disabled={isButton2Disabled}
                                    >
                                        <Text style={[styles.code, { fontSize: 28 }]}>Regenerate OTP</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.dualButton}>
                                    <TouchableOpacity
                                        style={styles.button}
                                        onPress={() => {
                                            sendOtp(`+91${phoneNumber}`);
                                            setLoginScreen(false)
                                        }}
                                        disabled={isButtonDisabled}
                                    >
                                        <Text style={[styles.code, { fontSize: 28 }]}>Get Started</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            {/* Change Phone Number */}
                            <View style={{ width: '100%', paddingHorizontal: 40, marginTop: 6, alignItems: 'center' }}>
                                <TouchableOpacity
                                    style={[styles.button, { backgroundColor: colors.bgLight }]}
                                    onPress={() => {
                                        setLoginScreen(true)
                                    }}
                                >
                                    <Text style={[styles.code, { fontSize: 28 }]}>Change Phone Number</Text>
                                </TouchableOpacity>
                            </View>
                        </>
                    }

                    {/* Terms and Conditions */}
                    <View style={styles.terms}>
                        <Text style={styles.text}>
                            By signing up, you agree to the
                        </Text>
                        <View style={styles.linkContainer}>
                            <Text style={styles.linkText} onPress={() => { /* TODO: Navigate to Terms */ }}>
                                Terms & Policy
                            </Text>
                            <Text style={styles.text}> & </Text>
                            <Text style={styles.linkText} onPress={() => { /* TODO: Navigate to Privacy Policy */ }}>
                                Privacy Policy
                            </Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        alignItems: 'center'
    },
    content: {
        flex: 1,
        paddingTop: '35%',
        width: '60%',
        alignItems: 'center',
    },
    logo: {
        width: 500,
        height: 160,
    },
    tagline1: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 30,
        fontWeight: '600',
        marginTop: 375,
    },

    tagline2: {
        color: 'white',
        fontSize: 50,
        fontWeight: '600',
    },
    inputContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        gap: 12,
        paddingHorizontal: 40,
        marginTop: 60,
    },
    code: {
        fontSize: 32,
        color: 'white',
        textAlign: 'center',
    },
    phoneNumberInput: {
        backgroundColor: colors.bgLight,
        flex: 4,
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderRadius: 16,
        fontSize: 32,
        color: 'white',
        textAlign: 'justify',
    },
    button: {
        backgroundColor: 'black',
        padding: 16,
        borderRadius: 16,
        width: '100%',
        marginTop: 12,
    },
    buttonDisabled: {
        backgroundColor: 'rgba(0,0,0,0.25)',
        color: 'white',
    },
    otpMessage: {
        color: 'rgba(235, 240, 243, 0.9)',
        fontSize: 28,
        marginTop: 40,
        marginBottom: -20,

    },
    dualButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20,
        paddingHorizontal: 40,
    },
     dualButton: {
        flex: 1,
     },
    terms: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 12,
        marginTop: 100,
    },
    text: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
    },
    newLine: {
        flexDirection: 'row', // Ensures inline display of text and touchable elements
        flexWrap: 'wrap', // Allows text to wrap onto the next line
    },
    linkText: {
        color: 'white',
        textDecorationLine: 'underline',
        fontWeight: 'bold',
        fontSize: 18,
    },
    linkContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    }
});

export default LoginScreen;
