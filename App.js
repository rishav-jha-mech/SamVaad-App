import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import OpenWeb from './Components/OpenWeb'
import Home from './Screens/Home'

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

