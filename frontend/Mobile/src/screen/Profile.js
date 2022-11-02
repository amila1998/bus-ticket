import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'

import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import bGStyles from '../Styles/Background';
import Colors from '../Styles/Colors'

const Profile = () => {
    return (
            <SafeAreaView style={styles.mainContainer}>
                <View>
                    <Text>Profile</Text>
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


export default Profile