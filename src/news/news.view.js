import React, { Component } from "react";
import { View, Text, ImageBackground,StyleSheet,Image,TouchableOpacity } from 'react-native';
import { FlatList } from "react-native-gesture-handler";
import HeadersView from '../header/header'

export default class NewsView extends Component
{

    constructor()
    {
        super();
        this.state={
            content:"Có gì mới"
        }
    }
    render()
    {
        return(
            <View>
                <HeadersView content={this.state.content}> </HeadersView>
                 <View>
                    <FlatList
                    data={this.props.data}
                    renderItem={({item})=>
                    <View style={style.boder}> 
                        <Image source={require('../img/imgvpost.png')} style={style.img}></Image>
                        <Text style={style.textView}>{item.category1}</Text>
                    </View>
                        }
                    >
                    </FlatList>
                 </View>
            </View>
        );
    }
}
const style = StyleSheet.create(
    {
        boder:{
                     
            flexDirection:"row",
            paddingTop:10,
            marginTop: 20,
            backgroundColor:"#fff",
            paddingBottom:10,
            elevation: 5,
            marginLeft:10,
            marginRight:10,
            borderRadius: 10
        },
        textView:
        { 
           flex:2
        },
        img:{
            width:80,
            height:80,
            flex:1
        },
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