import React from 'react'
import { SafeAreaView } from 'react-native';
import { useLogin } from './context/LoginProvider';
import MainTabScreen from './router/MainTabScreenRoute';
import RootStackScreensRoute from './router/RootStackScreensRoute';

const Main = () => {
    const { isLoggedIn, token, profile } = useLogin();
  return (
    <SafeAreaView>
        {
          !isLoggedIn ? <RootStackScreensRoute /> : <MainTabScreen />
        }
    </SafeAreaView>
    
  )
}

export default Main