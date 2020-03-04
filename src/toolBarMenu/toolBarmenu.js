import React,{ Component } from "react"; 
import { Button,Alert, Text} from 'react-native';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
  } from 'react-native-popup-menu';


export default ()=>{
  function setClick()
  {
    window.navigation.navigate("Dashboard")
  }
  // tao menu
   return <Menu>
    <MenuTrigger text='Select action' />
    <MenuOptions>
      <MenuOption onSelect={() =>setClick()}>
      <Text style={{color: 'red'}}>Test</Text>
      </MenuOption>
      <MenuOption onSelect={() => alert(`Delete`)} >
        <Text style={{color: 'red'}}>Delete</Text>
      </MenuOption>
      <MenuOption onSelect={() => alert(`Not called`)} disabled={true} text='Disabled'/>
    </MenuOptions>
  </Menu>

}

