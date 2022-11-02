import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'


const BusTimeTables = ({ props }) => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <ScrollView>
                <View style={styles.main}>
                    <Text style={styles.title}>Bus Time Tables</Text>
                    <TextInput style={styles.textInput} placeholder='Search...'/>
                    <View style={{ flex: 1 }}>
                        <View style={styles.flexContainer}>
                            <View>
                                <Text style={styles.txt}>Route No 1</Text>
                            </View>
                            <View>
                            <TouchableOpacity  style={styles.defaultButton}>
                                <Text style={{ textAlign: 'center', fontSize: 16, color: '#fff' }}>View</Text>
                            </TouchableOpacity>
                            </View>


                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    txt:{
        fontSize: 16,
        color: '#000',
        textAlign: 'center',
    },
    flexContainer: {
        justifyContent: 'space-between',
        width: '100%',
        height: 90,
        flexDirection: 'row',
        backgroundColor: '#b8bbe8',
        marginBottom: 10,
        marginTop: 10,
        padding : 20,
        borderRadius:100

    },
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

export default BusTimeTables