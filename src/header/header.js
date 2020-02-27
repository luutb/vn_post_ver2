import React, { Component } from "react";
import { View, Text, ImageBackground, StyleSheet, HeaderTitle,Image,Headers, Button } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
export default class HeadersView extends Component
{
    render()
    { 
    return(    
            <View style={style.header} >
                <View style={style.back}>
                 <Icon name="arrowleft" size={20} color="#900" onPress={()=>navigation.goBack(null)}></Icon>
                 </View>
                 <View style={style.contentHeader}>
                <Text style={{ textAlign:"center"}}>{this.props.content}</Text>
                </View>
               
            </View>
    
    );
    }
    
}
const style = StyleSheet.create(
    {
        header:{
            
            flexDirection:"row",
            backgroundColor:"#FF9900",
            height:50,
            
        },
        contentHeader:{
          
           flex:5,
           fontSize:20,
           justifyContent:"center",
           marginRight:60
          
            
        },
        back:{
            alignContent:"center",
           justifyContent:"center",
            alignContent:"flex-start",
            fontSize:5,
            marginLeft:10,
            flex:1
        }
        
    }
);