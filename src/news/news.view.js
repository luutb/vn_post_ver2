import React, { Component } from "react";
import { View, Text, ImageBackground,StyleSheet,Image,TouchableOpacity } from 'react-native';
import { FlatList, ScrollView } from "react-native-gesture-handler";
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
    {console.log("log",this.props.data)
        return(
            
            <ScrollView>
                <HeadersView content={this.state.content}> </HeadersView>
                 <View>
                    <FlatList
                    data={this.props.data}
                    renderItem={({item})=>
                    <TouchableOpacity style={style.boder} onPress={()=>this.onClick(item)}> 
                        <View style={style.img}>
                            <Image source={require('../img/imgvpost.png')} style={{width:"100%", height:"100%"}} ></Image>
                        </View>

                        <View style={style.textView}>
                            <Text>{item.category1}</Text>
                            <Text style={{marginTop:10, color:"#C0C0C0"}}>{item.post.slice(0,100)}</Text>
                        </View>
                    </TouchableOpacity>
                        }
                    >
                    </FlatList>
                 </View>
            </ScrollView>
        );
    }
   
    onClick(i)
    {
        this.props.onSubmit(i);
    }
}
const style = StyleSheet.create(
    {
        boder:{
                     
            flexDirection:"row",
            paddingTop:10,
            marginTop: 10,
            marginBottom: 10,
            backgroundColor:"#fff",
            paddingBottom:10,
            elevation: 5,
            marginLeft:10,
            marginRight:10,
            borderRadius: 10
        },
        textView:
        { 
           flex:2,

        },
        img:{
            width:80,
            height:80,
            flex:1,
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