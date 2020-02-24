import React, { Component } from "react";
import { View, Text, ImageBackground, StyleSheet, HeaderTitle,Image,Headers } from 'react-native';
export default class HeadersView extends Component
{
    render()
    { 
    return(
       
            
            <View style={style.header}>
                <Text style={style.contentHeader}>{this.props.content}</Text>
            </View>
    
    );
    }
}
const style = StyleSheet.create(
    {
        header:{
            justifyContent:"center",
            alignContent:"center",
            flexDirection:"row",
            backgroundColor:"#FF9900",
            height:50,
            
        },
        contentHeader:{
           flex:0.3,
           paddingTop:10,
           alignContent:"center",
           justifyContent:"center",
           fontSize:20
            
        }
    }
);