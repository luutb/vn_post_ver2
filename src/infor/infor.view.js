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
            
            text:''
        }
    }
    componentDidMount()
    {
       
        this.setState({text:this.props.data})
        //this.setState({content:this.props.content})
        
    }
    render()
    {
        console.log('haha',this.props.content)      
      
        return(
          <ScrollView style={{flex:1, backgroundColor:"#FFF"}}>
                <View>
                        <HeadersView content={this.props.content.slice(0,30)}></HeadersView>
                </View>
                <View style={{marginTop:10}}>
                    <Text style={{fontSize:16}}>{this.props.data}</Text>
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