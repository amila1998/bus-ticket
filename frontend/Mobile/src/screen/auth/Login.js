import React, { useState } from 'react'
import { Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'

const Login = () => {
    const [email, setEmail] = useState('')
    const [Password, setPasword] = useState('')
    const Navigator = useNavigation();

    const navigateRegister = () => {
        Navigator.navigate('Register')
    }


    const loginHandler = async(e) => {
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:8090/api/auth/login',{email, password:Password})
            console.log(res.data.message)
        } catch (error) {
            console.log("🚀 ~ file: Login.js ~ line 20 ~ loginHandler ~ error", error)
        }

    }
    return (
        <SafeAreaView style={styles.mainContainer}>
            <ScrollView>
                <View>
                    <View style={styles.container}>
                        <Image resizeMode={'contain'} style={styles.defultBg} source={require('../../../assets/logo.png')} />
                    </View>
                    <View style={styles.loginBody}>
                        <View style={styles.formInput}>
                            <TextInput onChangeText={setEmail} style={styles.textInput} placeholder='Email'></TextInput>
                        </View>
                        <View style={styles.formInput}>
                            <TextInput onChangeText={setPasword} style={styles.textInput} placeholder='Password' secureTextEntry={true}></TextInput>
                        </View>
                        <View style={styles.formInput}>
                            <TouchableOpacity onPress={loginHandler} style={styles.defaultButton}>
                                <Text style={{ textAlign: 'center', fontSize: 16, color: '#fff' }}>Login</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.formInput}>
                            <TouchableOpacity>
                                <Text style={{ color: '#fff', textAlign: 'center', fontSize: 16, fontWeight: 'italic' }}>Forgot Password</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.formInput}>
                            <TouchableOpacity onPress={navigateRegister}>
                                <Text style={{ textAlign: 'center', fontSize: 16, color: '#fff', fontWeight: 'bold' }}>Need Account ? Register Now</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
   

    )
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor:'#8cacf7',
        flex: 1,
    },
    container: {
        alignItems: 'center',
        flex: 1,
        marginBottom: 5,
    },
    defultBg: {
        width: '100%',
        height: 150
    },
    loginBody: {
        padding: 10
    },
    formInput: {
        marginBottom: 10,
        padding: 10,
    },
    textInput: {
        padding: 10,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#10006b',
        color: '#10006b',
        borderRadius: 50,
        backgroundColor: '#fff'
    },
    defaultButton: {
        padding: 15,
        backgroundColor: '#fd307b',
        borderRadius: 50,
    },


})

export default Login