import React, { Component } from "react";
import { ScrollView, Text, ImageBackground,StyleSheet,Image,TouchableOpacity, Button,View, Alert } from 'react-native';
import LoginView from './login.view'
import category from '../../callapi/category'
export default class LoginController extends Component
{

    render()
    {
        return(
             <LoginView
                     onSubmit ={this.onSubmit.bind(this)}
             ></LoginView>
            
        );
    }
    onSubmit(username,password)
    {
        category.postData({username,password}).then((response)=>{
            console.log(response);
        if(response!=null&& response.data==true)
        {
            this.props.navigation.navigate("Main")
        }
        else
            Alert.alert("sai roi nhe")
         }
        
        );
        
    }
}