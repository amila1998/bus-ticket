import React from 'react'
import QRCode from 'react-native-qrcode-svg';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import { useLogin } from '../../context/LoginProvider'

const QrCode = () => {
    const bus="123456"
    const {profile} = useLogin();
    console.log("🚀 ~ file: QrCode.js ~ line 9 ~ QrCode ~ profile", profile)
    
    return (
        <SafeAreaView style={styles.mainContainer}>
            {/* <View>
                    <Text>Notifications</Text>
                </View> */}
            <View>
                <QRCode
                    value={profile.tokenID}
                />
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

})


export default QrCode