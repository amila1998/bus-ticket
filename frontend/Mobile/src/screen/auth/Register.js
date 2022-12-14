import React, { useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, View, Text, Image, TextInput, Button, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native'
const Register = () => {
    const [number, onChangeNumber] =useState(null);
    const [selected, setSelected] =useState();
    const Navigator = useNavigation();
    const Local=()=>{
        setSelected("Local")
    }
    const Foreign=()=>{
        setSelected("Foreign")
    }
    const navigateLogin = () => {
        Navigator.navigate('Login')
    }


    return (
        <SafeAreaView style={{ flex: 1 ,backgroundColor:'#8cacf7'}}>
            <ScrollView>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('../../../assets/logo.png')} resizeMode='contain' style={{ width:'100%', height: 200, marginTop: 10 }} />
                </View>
                <View style={styles.container}>
                    <Text style={styles.myTitle}>Passenger Register</Text>
                </View>
                <View style={{ margin: 20, backgroundColor:'rgba(255, 255, 255, 0.5)', borderRadius: 10, }}>
                    <View style={[styles.containerFlex, {
                        // Try setting `flexDirection` to `"row"`.
                        flexDirection: "row"
                    }]}>
                        <View style={styles.leftFlex} >
                            <Text style={styles.myText}>Name</Text>
                        </View>
                        <View style={styles.rightFlex} >
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeNumber}
                                placeholder="Name"

                            />
                        </View>
                    </View>

                    <View style={[styles.containerFlex, {
                        // Try setting `flexDirection` to `"row"`.
                        flexDirection: "row"
                    }]}>
                        <View style={styles.leftFlex} >
                            <Text style={styles.myText}>Phone</Text>
                        </View>
                        <View style={styles.rightFlex} >
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeNumber}
                                placeholder="Number"
                                keyboardType="numeric"
                            />
                        </View>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', height: 1 }}>
                        <Text></Text>
                    </View>
                    <View style={[styles.containerFlex, {
                        // Try setting `flexDirection` to `"row"`.
                        flexDirection: "row"
                    }]}>
                        <View style={styles.leftFlex} >
                            <Text style={styles.myText}>Account type</Text>
                        </View>
                        <View style={styles.rightFlex} >
                        <TouchableOpacity onPress={Local} >
                            <Text style={styles.myText}>Local</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={Foreign}>
                            <Text style={styles.myText}>Foreign</Text>
                        </TouchableOpacity>   
                        </View>
                    </View>
                    { selected=="Local" &&
                        <View style={[styles.containerFlex, {
                        // Try setting `flexDirection` to `"row"`.
                        flexDirection: "row"
                    }]}>
                        <View style={styles.leftFlex} >
                            <Text style={styles.myText}>NIC Number</Text>
                        </View>
                        <View style={styles.rightFlex} >
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeNumber}
                                placeholder="NIC Number"

                            />
                        </View>
                    </View>
                    }
                    { selected=="Foreign" &&
                        <View style={[styles.containerFlex, {
                        // Try setting `flexDirection` to `"row"`.
                        flexDirection: "row"
                    }]}>
                        <View style={styles.leftFlex} >
                            <Text style={styles.myText}>Passport Number</Text>
                        </View>
                        <View style={styles.rightFlex} >
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeNumber}
                                placeholder="Passport Number"

                            />
                        </View>
                    </View>
                    }
                    <View style={[styles.containerFlex, {
                        // Try setting `flexDirection` to `"row"`.
                        flexDirection: "row"
                    }]}>
                        <View style={styles.leftFlex} >
                            <Text style={styles.myText}>Email</Text>
                        </View>
                        <View style={styles.rightFlex} >
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeNumber}
                                placeholder="Email"

                            />
                        </View>
                    </View>
                    <View style={[styles.containerFlex, {
                        // Try setting `flexDirection` to `"row"`.
                        flexDirection: "row"
                    }]}>
                        <View style={styles.leftFlex} >
                            <Text style={styles.myText}>Password</Text>
                        </View>
                        <View style={styles.rightFlex} >
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeNumber}
                                secureTextEntry={true}
                                placeholder="Password"

                            />
                        </View>
                    </View>
                    <View style={[styles.containerFlex, {
                        // Try setting `flexDirection` to `"row"`.
                        flexDirection: "row"
                    }]}>
                        <View style={styles.leftFlex} >
                            <Text style={styles.myText}>Conform Password</Text>
                        </View>
                        <View style={styles.rightFlex} >
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeNumber}
                                secureTextEntry={true}
                                placeholder="Conform Password"

                            />
                        </View>
                    </View>
                    <View style={{ margin: 20, backgroundColor: '#ed11b2', borderRadius: 5, }}>
                        <Button
                            title="Sign up"
                            color="#ed11b2"
                            borderRadius=''
                            onPress={navigateLogin}
                        />
                    </View>
                </View>
                <TouchableOpacity onPress={navigateLogin}>
                    <Text style={{ fontSize: 15, textAlign: 'center' }}>Sign In</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#8cacf7',
    },
    myTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    myText: {
        fontSize: 20,
        textAlign: 'center'
    },
    containerFlex: {
        flex: 1,
        padding: 8,
    },
    leftFlex: {
        flex: 1,
        // backgroundColor: "red"

    },
    rightFlex: {
        flex: 2,
        // backgroundColor: "darkorange"
    },
    input: {
        height: 40,
        // margin: 12,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#034efc',
        padding: 10,
    },

});
export default Register