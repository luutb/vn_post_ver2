import React,{ Component } from "react";
import { View, Text, ImageBackground,StyleSheet,Image,TouchableOpacity, Button, } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
export default  class InforApp extends Component
{
    render()
    {
        return(
          <ScrollView style={{flex:1}}>
               <View style={{flex:1, height:300}}>
                   <View style={style.viewText}>
                       <Text style={{position: "absolute", top:180,left:10}}>abcdef</Text>
                   </View>
                   <View style={style.viewImg}>
                       <Image source={require("../img/bg_header.png")} style={{width:100,height:100}}></Image>
                   </View>
               </View>
         </ScrollView>
        );
    }
}
const style = StyleSheet.create(
    {
        viewImg:{
            position: "absolute",
           flex:1,
            top: 20,
            left:20,
            width:100,
            height:100

        },
        viewText:{
            position: "absolute",
            backgroundColor:"#fff",
            flex:1,
            top:30,
            left:10,
            width:200,
            height:300
        }
    }
);