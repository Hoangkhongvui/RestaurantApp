import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Login from './Screens/Login';
import Home from './Screens/Signup';
import Signup from './Screens/Signup';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <Login />
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Register' screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="OnBoarding" component={OnBoarding} /> */}
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer >
  )
}