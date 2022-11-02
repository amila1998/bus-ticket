
import React from 'react'

import { StyleSheet, Text, View, Button, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from 'react-native';
const Home = () => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <ScrollView>
                <View style={styles.main}>  
                <View>
                    <View style={{padding:10,backgroundColor:'#b8bbe8'}}>
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
                            <TouchableOpacity  style={styles.defaultButton}>
                                <Text style={{ textAlign: 'center', fontSize: 16, color: '#fff' }}>View</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    
                </View>
                <View>
                
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
        height: 150
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
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        padding: 15,
    },

})


export default Home