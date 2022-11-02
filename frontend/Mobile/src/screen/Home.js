
import React from 'react'

import { StyleSheet, Text, View, Button, SafeAreaView, ScrollView } from 'react-native';
const Home = () => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <ScrollView>
                <View style={styles.main}>
                <View>
                    
                </View>
                <View>
                {
                   <>
                   </> 
                }
                </View>
                </View>

            </ScrollView>
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
    main: {
        flex: 2,
    },

})


export default Home