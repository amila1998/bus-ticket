import { useNavigation } from '@react-navigation/native'

import React from 'react'
import { Image, View } from 'react-native'
import { useLogin } from '../../context/LoginProvider'

const Splash = () => {
    const [isGo, setisGo] = React.useState(true)
    const navigation = useNavigation();
    const { isLoggedIn } = useLogin();

    React.useEffect(() => {
        if (isGo) {
            setTimeout(() => {
                if (isLoggedIn) {
                    navigation.navigate('Main');
                } else {
                    navigation.navigate('Login');
                }
               
                setisGo(false)
            }, 2000)
        }
    }, [isGo,isLoggedIn])
    return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' , backgroundColor:'#8cacf7'}}>
                <View>
                    <Image resizeMode={'contain'} style={{ width: 200, height: 200 }} source={require('../../../assets/logo.png')} />
                </View>
            </View>
    )
}

export default Splash