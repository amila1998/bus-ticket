import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screen/auth/Login';
import Home from './src/screen/Home';
import Splash from './src/screen/splash/Splash';
import React from 'react';
import RootStackScreensRoute from './src/router/RootStackScreensRoute';
import MainTabScreenRoute from './src/router/MainTabScreenRoute';
import LoginProvider from './src/context/LoginProvider';
import Main from './src/Main';

export default function App() {
  const [isLoggin, setIsLoggin] = React.useState(true)
  return (
    <LoginProvider>
      <NavigationContainer>
       {/* <Main/> */}
       {
          !isLoggin ? <RootStackScreensRoute /> : <MainTabScreenRoute />
        }
      </NavigationContainer>
    </LoginProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
