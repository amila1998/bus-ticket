import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screen/splash/Splash';
import Login from '../screen/auth/Login';

const Stack = createNativeStackNavigator();

const RootStackScreensRoute = () => {
    return (
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen options={{ headerShown: false }} name="Splash" component={Splash} />
            <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
        </Stack.Navigator>
    )
}

export default RootStackScreensRoute