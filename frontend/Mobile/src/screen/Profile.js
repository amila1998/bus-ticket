
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Button, SafeAreaView,TouchableOpacity } from 'react-native';
import { useLogin } from '../context/LoginProvider'


const Profile = () => {

    const Navigator = useNavigation();
    const {profile} = useLogin();

   
    const navigateViewAllTimeTables = () => {
        Navigator.navigate('QrCode')
    }

    return (
            <SafeAreaView style={styles.mainContainer}>
                <View style={styles.formInput}>
                                <TouchableOpacity onPress={navigateViewAllTimeTables} style={styles.defaultButton1}>
                                    <Text style={{ textAlign: 'center', fontSize: 16, color: '#fff' }}>View Profile</Text>
                                </TouchableOpacity>
                </View>
           { profile.role=="n_passanger" || profile.role=="f_passanger" &&
           <View style={styles.formInput}>
                            <TouchableOpacity onPress={navigateViewAllTimeTables} style={styles.defaultButton2}>
                                <Text style={{ textAlign: 'center', fontSize: 16, color: '#fff' }}>Get QR Code</Text>
                            </TouchableOpacity>
            </View>
            }
                <View style={styles.formInput}>
                                <TouchableOpacity onPress={navigateViewAllTimeTables} style={styles.defaultButton1}>
                                    <Text style={{ textAlign: 'center', fontSize: 16, color: '#fff' }}>Logout</Text>
                                </TouchableOpacity>
                </View>
                
            </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8cacf7',
    },
    dummyText: {
    },
    formInput: {
        marginBottom: 10,
        padding: 10,
    },
    defaultButton1: {
        padding: 15,
        backgroundColor: '#fd307b',
        borderRadius: 50,
        width:150
    },
    defaultButton2: {
        padding: 15,
        backgroundColor: '#f5a727',
        borderRadius: 50,
        width:150
    },


})


export default Profile