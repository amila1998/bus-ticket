import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, View, Text, Image, TextInput, Button, TouchableOpacity } from "react-native";

const Register = () => {
    const [number, onChangeNumber] = React.useState(null);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('../../assets/adaptive-icon.png')} resizeMode='contain' style={{ height: 200, marginTop: 10 }} />
                </View>
                <View style={styles.container}>
                    <Text style={styles.myTitle}>Passenger Register</Text>
                </View>
                <View style={{ margin: 20, backgroundColor: '#f2f2f2', borderRadius: 5, }}>
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
                            <Text style={styles.myText}>Namefild</Text>
                        </View>
                    </View>
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
                    <View style={{ margin: 20, backgroundColor: '#e6e6e6', borderRadius: 5, }}>
                        <Button
                            title="Sign up"
                            color="#c920b3"
                            borderRadius=''

                        // onPress=''
                        />
                    </View>
                </View>
                <TouchableOpacity>
                    <Text style={{ fontSize: 15, textAlign: 'center' }}>Sign In</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
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