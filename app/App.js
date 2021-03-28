import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from './src/screens/welcome';
import SelectTime from './src/screens/selectTime';
import SetMap from './src/screens/setMap';
import ViewMap from './src/screens/viewMap';
import ReportIncident from './src/screens/reportIncident';
import Join from './src/screens/join';
import SafeWalker from './src/screens/safewalker';
import SignUpWalker from './src/screens/signupWalker';
import LoginWalker from './src/screens/loginWalker';
import WalkerHome from './src/screens/walkerHome';
import WalkerMap from './src/screens/walkerMap';



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
        name="Join" 
        component={Join} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="SafeWalker" 
        component={SafeWalker} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="SignUpWalker" 
        component={SignUpWalker} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="LoginWalker" 
        component={LoginWalker} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="WalkerHome" 
        component={WalkerHome} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="WalkerMap" 
        component={WalkerMap} 
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
      <Stack.Screen 
        name="ReportIncident" 
        component={ReportIncident} 
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