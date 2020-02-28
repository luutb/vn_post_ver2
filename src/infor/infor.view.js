import React,{ Component } from "react";
import { View, Text, ImageBackground,StyleSheet,Image,TouchableOpacity, Button, } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import HeadersView from "../header/header";
export default  class InforApp extends Component
{
    constructor()
    {
        super();
        this.state={
            content:''
        }
    }
    componentDidMount()
    {
        console.log("test",this.props.data)
        this.setState({content:this.props.data})
        console.log('haha',this.state.content)
    }
    render()
    {
               
        const navigation = this.props.navigation;
        return(
          <ScrollView style={{flex:1}}>
              <HeadersView></HeadersView>
                <Text></Text>
               <Text>{this.props.data}</Text>
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