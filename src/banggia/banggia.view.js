

import React, { Component } from "react";
import { View, Text, ImageBackground, StyleSheet, HeaderTitle,Image,Headers } from 'react-native';
import category from '../../callapi/category'
import { FlatList, TouchableOpacity } from "react-native-gesture-handler"
import HeadersView from '../header/header'
export default class PricelistView extends Component
{
    constructor()
    {
        super();
        this.state={
            db:null,
            content:"Bảng Giá",
            
        }
        
    }
     
    render()
    { 
        console.log("data tu controller", this.props.data)
       
        return(
            <View>
               <HeadersView content={this.state.content}></HeadersView>
                <View>
                    <FlatList
                    data={this.props.data}
                    renderItem={({item})=>
                    <View style={style.boder}> 
                        <TouchableOpacity onPress={()=>this.setClick(item.id_category)}>
                            <Text style={style.textView}>{item.category1}</Text>
                        </TouchableOpacity>
                    </View>
                        }
                    >
                    </FlatList>
                 </View>
            </View>
        );     
    }
    setClick(i)
    {
        this.props.setId(i);
    }
}
const style = StyleSheet.create(
    {
        boder:{
            borderBottomWidth: 0.5,
            borderBottomColor: 'black',           
            flexDirection:"row",
            paddingTop:10,
            marginTop:5,           
            backgroundColor:"#fff",
            paddingBottom:10
        },
        textView:
        { 
           
        },
        img:{
            width:100,
            height:100
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