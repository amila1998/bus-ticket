
import React from 'react'

import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';


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