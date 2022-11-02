
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React from 'react'

import { StyleSheet, Text, View, Button, SafeAreaView, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import client from '../api/client';
const Home = () => {
    const [allRoutes, setAllRoutes] = React.useState([])
    const [startLocation, setStartLocation] = React.useState('')
    const [endLocation, setEndLocation] = React.useState('')
    console.log("🚀 ~ file: Home.js ~ line 8 ~ Home ~ allRoutes", allRoutes)
    const Navigator = useNavigation();
    const navigateViewAllTimeTables = () => {
        Navigator.navigate('Bus_Time_Tables')
    }
    React.useEffect(() => {

        const getAllRoutes = async () => {
            try {
                const res = client.get('/api/timetable/')
                console.log("🚀 ~ file: Home.js ~ line 14 ~ getAllRoutes ~ res", res)
                setAllRoutes(res.data.AllTimetables)
            } catch (error) {
                console.log("🚀 ~ file: Home.js ~ line 16 ~ getAllRoutes ~ error", error)

            }
        }

        getAllRoutes();


    }, [])

    return (
        <SafeAreaView style={styles.mainContainer}>
            <ScrollView>
                <View style={styles.main}>
                    <View>
                        <View>
                            <Image resizeMode={'contain'} style={styles.defultBg} source={require('../../assets/logo.png')} />

                        </View>
                        <View style={{ padding: 10 }}>
                            <View>
                                <Text style={styles.title}>Find Availble Buses</Text>
                            </View>
                            <View style={styles.formInput}>
                                <TextInput style={styles.textInput} placeholder='Start Location'></TextInput>
                            </View>
                            <View style={styles.formInput}>
                                <TextInput style={styles.textInput} placeholder='Destination Location'></TextInput>
                            </View>
                            <View style={styles.formInput}>
                                <TouchableOpacity style={styles.defaultButton}>
                                    <Text style={{ textAlign: 'center', fontSize: 16, color: '#fff' }}>View</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.formInput}>
                                <TouchableOpacity onPress={navigateViewAllTimeTables} style={styles.defaultButton2}>
                                    <Text style={{ textAlign: 'center', fontSize: 16, color: '#fff' }}>View All Time Tables</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                    <View>
                        {/* {
                    allRoutes.map(a=>(
                        <View id={a._id}></View>
                    ))
                } */}
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>


    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#8cacf7',
        width: '100%',
        height: '100%',
    },
    dummyText: {
    },
    main: {
        width: '100%',
        height: '100%',
        flex: 2,
    },
    defultBg: {
        width: '100%',
        height: 150,
        padding: 10
    },
    loginBody: {
        padding: 10,
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
    defaultButton2: {
        padding: 15,
        backgroundColor: '#f5a727',
        borderRadius: 50,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        padding: 15,
    },

})


export default Home