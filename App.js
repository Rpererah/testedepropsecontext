import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Other from './pages/Other';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home">
          {(props)=>(<Home {...props}/>)}
        </Stack.Screen>

        <Stack.Screen name="about">
          {(props)=>(<About {...props}/>)}
        </Stack.Screen>

        <Stack.Screen name="other">
          {(props)=>(<Other {...props}/>)}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}