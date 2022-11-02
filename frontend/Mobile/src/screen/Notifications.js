import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'

import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';

const Notifications = () => {
    return (
            <SafeAreaView style={styles.mainContainer}>
                <View>
                    <Text>Notifications</Text>
                </View>
            </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dummyText: {
    },

})


export default Notifications