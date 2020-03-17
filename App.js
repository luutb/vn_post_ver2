import React,{ Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import {MenuProvider} from 'react-native-popup-menu'
import routers from './router.config'

const Stack = createStackNavigator();
export default class MyCenter extends Component
{
  render()
  {
    return(
        <MenuProvider>
        <NavigationContainer>
            <Stack.Navigator           
            screenOptions={{
              headerShown: false
            }}>
              {routers.map((m)=> (<Stack.Screen name={m.name} component={m.component} options={m.options}/>) )}
              
            </Stack.Navigator>
            
        </NavigationContainer>
        </MenuProvider>
              
    );
  }
}