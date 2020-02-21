import React,{ Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import routers from './router.config'

const Stack = createStackNavigator();
export default class MyCenter extends Component
{
  render()
  {
    return(
      
        <NavigationContainer>
            <Stack.Navigator           
            screenOptions={{
              headerShown: false
            }}>
              {routers.map((m)=> (<Stack.Screen name={m.name} component={m.component} options={m.options}/>) )}
              
            </Stack.Navigator>
            
        </NavigationContainer>
              
    );
  }
}