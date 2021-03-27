import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from './src/screens/welcome';
import SelectTime from './src/screens/selectTime';
import SetMap from './src/screens/setMap';
import ViewMap from './src/screens/viewMap';



const Stack = createStackNavigator();


function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
    >
      <Stack.Screen 
        name="Welcome" 
        component={Welcome} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="SelectTime" 
        component={SelectTime} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="SetMap" 
        component={SetMap} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="ViewMap" 
        component={ViewMap} 
        options={{ headerShown: false}} 
      />
      
    
    
     
      
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}