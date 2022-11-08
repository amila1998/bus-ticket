import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator, DrawerActions } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';
import { Ionicons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import Profile from '../screen/Profile';
import Colors from '../Styles/Colors';
import Notifications from '../screen/Notifications';
import Home from '../screen/Home';
import BusTimeTables from '../screen/busTimeTables/BusTimeTables';
import ViewSearchedRoutes from '../screen/ViewSearchedRoutes/ViewSearchedRoutes';
import Book from '../screen/Book_a_Bus/Book';
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
    barStyle={{ backgroundColor: '#8a47fd' }}
    activeColor={'#fd307b'}
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#8a47fd',
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
        tabBarColor: '#8a47fd',
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
        tabBarColor: '#8a47fd',
        tabBarIcon: ({ color }) => (
          <Ionicons name="notifications" color={color} size={26} />
        ),
        tabBarBadge: 3,
      }}
    />

  </Tab.Navigator>
);

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#8a47fd',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <HomeStack.Screen name="Home2" component={Home} options={{
      title: 'Home',
      headerLeft: () => (
        <Icon.Button name="ios-menu" size={25} backgroundColor="#8a47fd" onPress={() => navigation.dispatch(DrawerActions.openDrawer())}></Icon.Button>
      )
    }} />
    <HomeStack.Screen name="Bus_Time_Tables" component={BusTimeTables} options={{
      title: 'Bus Time Tables',
      headerShown: true,
    }} />
     <HomeStack.Screen name="ViewSearchedRoutes" component={ViewSearchedRoutes} options={{
      title: 'Bus Time Tables',
      headerShown: true,
    }} />
      <HomeStack.Screen name="Book" component={Book} options={{
      title: 'Book',
      headerShown: true,
    }} />
  </HomeStack.Navigator>
);

export default MainTabScreen;

