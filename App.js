import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Screens/Home'
import OpenWeb from './Components/OpenWeb'

const Stack = createStackNavigator();

const App = () => {
    return (
    <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Web" component={OpenWeb} />
        </Stack.Navigator>
    </NavigationContainer>
    )
}

export default App

