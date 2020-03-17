import React,{ Component } from "react"; 
import { Button,Alert, Text,View} from 'react-native';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
  } from 'react-native-popup-menu';


export default ()=>{
  function setClick()
  {
    window.navigation.navigate("Main")
  }
  // tao menu
   return <Menu>
    
    <MenuTrigger style={{paddingLeft:20,paddingTop:30}}>
      <Text style={{color:"#fff"}}>LogOut</Text>
    </MenuTrigger>  
    <MenuOptions >
      <View style={{backgroundColor:"rgb:(255,255,255,0.5)"}}>
      <MenuOption >        
      <Text style={{color: 'black'}}>Thông tin cá nhân</Text>
      </MenuOption>
      <MenuOption onSelect={() =>setClick()} >
        <Text style={{color: 'black'}}>Đăng xuất</Text>
      </MenuOption>
      <MenuOption onSelect={() => alert(`Not called`)} disabled={true} text='Disabled'/>
      </View>
    </MenuOptions>
  </Menu>

}

