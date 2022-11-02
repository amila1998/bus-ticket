import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';
import {Ionicons,MaterialCommunityIcons,FontAwesome} from '@expo/vector-icons';
import Profile from '../screen/Profile';
import Colors from '../Styles/Colors';
import Notifications from '../screen/Notifications';
import Home from '../screen/Home';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


// import HomeScreen from './HomeScreen';
// import DetailsScreen from './DetailsScreen';
// import ExploreScreen from './ExploreScreen';
// import ProfileScreen from './ProfileScreen';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={Colors.buttons.orange}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#36455A',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" color={color} size={26} />
          ),
        }}
      />
       <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#36455A',
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" color={color} size={26} />
          ),
        }}
        />
       
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Notifications',
          tabBarColor: '#36455A',
          tabBarIcon: ({ color }) => (
            <Ionicons name="notifications" color={color} size={26} />
          ),
          tabBarBadge: 3,
        }}
      />
     
    </Tab.Navigator>
);

const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions={{
            headerStyle: {
            backgroundColor: '#36455A',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            }
        }}>
            <HomeStack.Screen name="Home" component={Home}  options={{
        title:'Home',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#36455A" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
    </HomeStack.Navigator>
    );

export default MainTabScreen;

