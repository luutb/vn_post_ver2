import React, { Component } from "react";
import { View, Text, ImageBackground, StyleSheet } from 'react-native';



export default class IntroduceView extends Component
{
        render()
        {
            return(
                <View style={styles.viewIntro} >  
                    <ImageBackground source={require('../img/unnamed.jpg')}
                    style={styles.backgroundImage}
                    
                    ></ImageBackground>
                 </View>
            );
        }
}
const styles = StyleSheet.create(
    {
        backgroundImage:{
            width: 320,
            height: 170,
           
        },
        viewIntro:{
               backgroundColor: "#FFFFFF",
                justifyContent:"center",
                flex:1
                
        }
    }
);